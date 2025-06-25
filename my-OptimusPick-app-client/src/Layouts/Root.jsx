import { createBrowserRouter } from "react-router";
import LayOut from "./Main/LayOut";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Queries from "../Pages/Queries/Queries";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/SignInPage/LogIn";
import PrivateRote from "../Private/PrivateRote";
import RecommendationsForMe from "../Pages/RecommendationsForMe/RecommendationsForMe";
import MyQueries from "../Pages/MyQueries/MyQueries";
import MyRecommendations from "../Pages/MyRecommendations/MyRecommendations";
import AddQueries from "../Pages/AddQuries/AddQueries";
import QueriesDetails from "../Pages/AllQueries/QueriesDetails";
import Loading from "../Pages/Loading/loading";
import UpdateMyQueries from "../Pages/MyQueries/UpdateMyQueries";
import ParticularInfo from "../Pages/AllQueries/RecommendationSection/ParticularInfo/ParticularInfo";

const router = createBrowserRouter([
    {
        path: '/',
        Component: LayOut,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/allQueries`),
            },
            {
                path: 'Queries',
                Component: Queries,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'login',
                Component: LogIn
            },
            {
                path: 'recommendationsForMe',
                element: <PrivateRote>
                    <RecommendationsForMe></RecommendationsForMe>
                </PrivateRote>
            },
            {
                path: 'myQueries',
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRote>
                    <MyQueries />
                </PrivateRote>

            },
            {
                path: '/updateMyQueries/:id',
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/getAllQueries/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRote>
                    <UpdateMyQueries />
                </PrivateRote>
            },
            {
                path: 'queriesDetails/:id',
                hydrateFallbackElement: <Loading></Loading>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/getAllQueries/${params.id}`),
                element: <PrivateRote>
                    <QueriesDetails></QueriesDetails>
                </PrivateRote>
            },
            {
                path: 'myRecommendations',
                hydrateFallbackElement: <Loading></Loading>,
                element: <PrivateRote>
                    <MyRecommendations />
                </PrivateRote>

            },
            {
                path: '/particular/:id',
                loaderL: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/particular/${params.id}`),
                element: <PrivateRote>
                    <ParticularInfo>
                    </ParticularInfo>
                </PrivateRote>
            },
            {

            },
            {
                path: 'addQueries',
                element: <PrivateRote>
                    <AddQueries />
                </PrivateRote>
            }

        ]
    }
]);
export default router