const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// app.use(cors());
// // git rm --cached firebase-key.json  

const admin = require("firebase-admin");

const serviceAccount = require("./firebase-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://optimuspick-d386a.web.app'
];
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}))






app.use(express.json());
app.get('/', (req, res) => {
    res.send('this is my OptiMusPick  server')
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server running of port ${port}`)
})


const verifyFirebaseToken = async (req, res, next) => {
    const authHeader = req.headers?.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({ message: 'Unauthorized Access!' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = await admin.auth().verifyIdToken(token);
        // console.log("Decoded token:", decoded);
        req.decoded = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        return res.status(401).send({ message: "Unauthorized Access!" });
    }
};



const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-iu13kdk-shard-00-00.syzuvzl.mongodb.net:27017,ac-iu13kdk-shard-00-01.syzuvzl.mongodb.net:27017,ac-iu13kdk-shard-00-02.syzuvzl.mongodb.net:27017/?ssl=true&replicaSet=atlas-133yf2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

/* git push -u origin main */

async function run() {
    try {
        const queriesCollection = client.db("AllQueries").collection("queries")
        const recommenderCollection = client.db("AllQueries").collection("recommendation")

        /* Post Recommendation data */

        app.post('/allRecommendation', async (req, res) => {
            const allRecommendation = req.body;
            // console.log(allRecommendation)
            const userEmil = req.body.userEmil;
            const recommendedUserEmail = req.body.recommendedUserEmail;
            if (userEmil === recommendedUserEmail) {
                return res.status(403).send("this this your post !")

            }
            allRecommendation.createdAt = new Date()
            const result = await recommenderCollection.insertOne(allRecommendation)
            res.send(result)
        })

        /* Get all recommendation*/

        app.get('/getAllRecommendation', async (req, res) => {
            const result = await recommenderCollection.find().sort({ createdAt: -1 }).toArray();
            res.send(result)
        })

        /* Get My Recommendation  */

        app.get('/getMyReCommendation/:recommendedUserEmail', verifyFirebaseToken, async (req, res) => {
            const recommendedUserEmail = req.params.recommendedUserEmail
            if (recommendedUserEmail !== req.decoded.email) {
                return res.status(403).send({ message: "Forbidden Access!" });
            }
            const query = { recommendedUserEmail: recommendedUserEmail }
            const result = await recommenderCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(result)
        })

        /* Get Recommender Data */

        app.get('/getRecommendedQueries/:userEmil', async (req, res) => {
            const userEmil = req.params.userEmil
            const query = { userEmil: userEmil }
            // console.log(userEmil)
            const result = await recommenderCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(result)
        })


        /* get a  Recommender single data */

        app.get('/deleteRecommenderData/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await recommenderCollection.findOne(query);
            res.send(result)
        })

        app.delete('/deleteRecommenderData/:deleteId/:queryId', async (req, res) => {
            const deleteId = req.params.deleteId;
            const queryId = req.params.queryId;
            const query2 = { _id: new ObjectId(queryId) }
            const query = { _id: new ObjectId(deleteId) };
            // console.log(deleteId, queryId)
            // const query = { _id: new ObjectId(id) };
            // const id = { recommendationCount: recommendationCount }
            const filter = await queriesCollection.findOne(query2);
            const updateDoc = {
                $inc: { recommendationCount: -1 }
            };
            await queriesCollection.updateOne(filter, updateDoc);
            const result = await recommenderCollection.deleteOne(query);
            res.send(result)
        })
        /* Get particular data  */

        app.get('/particular/:id', async (req, res) => {
            const id = req.params.id;
            const query = { id: id }
            const result = await recommenderCollection.find(query).toArray()
            res.send(result)
        })


        /* Update Recommendation Count  */


        app.patch('/updateRecommendationCount/:id', async (req, res) => {
            const id = req.params.id;
            // const email = req.body.email;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $inc: { recommendationCount: 1 }
            };
            const result = await queriesCollection.updateOne(filter, updateDoc);
            res.send({
                message: "Recommended successfully",
                success: true
            });

        });





        /* Post All Data */

        app.post('/allQueries', async (req, res) => {
            const allQueries = req.body;
            allQueries.createdAt = new Date();
            const result = await queriesCollection.insertOne(allQueries)
            res.send(result)
        })

        /* Get All Queries DATA */

        app.get('/getAllQueries', async (req, res) => {
            const { searchParams } = req.query;
            let query = {}
            if (searchParams) {
                query = { productName: { $regex: searchParams, $options: "i" } }
            }
            const result = await queriesCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(result)
        })

        /*  Get A Single Queries Data  */

        app.get('/getAllQueries/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await queriesCollection.findOne(query);
            res.send(result)
        })

        /* Get only 6 recently Queries  */

        app.get('/allQueries', async (req, res) => {
            const queries = req.body;
            const result = await queriesCollection.find(queries).sort({ createdAt: -1 }).limit(6).toArray();
            res.send(result)
        })


        // /* Get my Queries */

        app.get('/getMyQueries/:userEmil', verifyFirebaseToken, async (req, res) => {
            const userEmil = req.params.userEmil
            // console.log(req.headers.authorization)
            const query = { userEmil: userEmil }

            const result = await queriesCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(result)
        })


        /* Update My Queries  */

        app.put('/updateMyQueries/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updateQueries = req.body;
            const updateDoc = {
                $set: updateQueries
            }
            const result = await queriesCollection.updateOne(filter, updateDoc);
            res.send(result)
        })

        /* delete Api  */

        app.delete('/deleteQueries/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await queriesCollection.deleteOne(query);
            res.send(result)
        })


        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    finally {

    }
}
run().catch(console.dir);




/*  https://classroom.github.com/a/T881w0AQ */



