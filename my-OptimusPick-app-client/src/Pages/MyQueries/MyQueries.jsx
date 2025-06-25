import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import MyQueriesDetailsPage from "./MyQueriesDetailsPage";
import MyQueriesBanner from "./MyQueriesBanner";
import MyQueriesRightSide from "./MyQueriesRightSide";
import { Link } from "react-router";
import { myQueriesPromise } from "../../Hooks/MyQueriesPromise";

const MyQueries = () => {

    const { user } = UseAuth();
    const [myQueries, setMyQueries] = useState([]);
    useEffect(() => {
        if (user?.email && user?.accessToken)
            myQueriesPromise(user.email, user.accessToken)
                .then(data => {
                    setMyQueries(data)
                }
                )
                .catch(err => console.log(err))
    }, [user?.email, user?.accessToken])


    const handleDeleteQuery = (id) => {
        const updated = myQueries.filter(q => q._id !== id);
        setMyQueries(updated);
    };

    return (
        <div>
            {myQueries.length === 0 ? (
                <div className="text-center mt-4">
                    <h2>No Queries Found</h2>
                    <Link to="/addQueries">
                        <button className="btn btn-primary mt-3">Add Queries</button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="lg:flex items-center">
                        <div className="lg:w-1/2">
                            <MyQueriesBanner />
                        </div>
                        <div className="flex-1">
                            <MyQueriesRightSide />
                        </div>
                    </div>
                    <h2 className="text-center text-3xl">My Total Queries: {myQueries.length}</h2>
                    <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {/* {myQueries.map(query => (
                            <MyQueriesDetailsPage
                                key={query._id}
                                myAddedData={query}
                                onDelete={handleDeleteQuery}
                            />
                        ))}
                  */}


                        {Array.isArray(myQueries) &&
                            myQueries.map(query => (
                                <MyQueriesDetailsPage
                                    key={query._id}
                                    myAddedData={query}
                                    onDelete={handleDeleteQuery}
                                />
                            ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MyQueries;











{/* {Array.isArray(myQueries) &&
  myQueries.map(query => (
    <MyQueriesDetailsPage
      key={query._id}
      myAddedData={query}
      onDelete={handleDeleteQuery}
    />
))} */}
