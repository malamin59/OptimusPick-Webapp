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
        .then((data) => {
          setMyQueries(data);
        })
        .catch((err) => console.log(err));
  }, [user?.email, user?.accessToken]);

  const handleDeleteQuery = (id) => {
    const updated = myQueries.filter((q) => q._id !== id);
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
          <h2 className="text-center text-3xl mb-8">
            My Total Queries: {myQueries.length}
          </h2>
         <div className="overflow-x-auto">
  <table className="min-w-max w-full mb-24 table-auto border">
    <thead className="bg-gray-100 text-sm">
      <tr>
        <th className="px-4 py-2 text-left">Title</th>
        <th className="px-4 py-2 text-left">Product</th>
        <th className="px-4 py-2 text-left">Brand</th>
        <th className="px-4 py-2 text-left">Time</th>
        <th className="px-4 py-2 text-left">Date</th>
        <th className="px-4 py-2 text-left">Recommend</th>
        <th className="px-4 py-2 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {myQueries.map((query) => (
        <MyQueriesDetailsPage
          key={query._id}
          myAddedData={query}
          onDelete={handleDeleteQuery}
        />
      ))}
    </tbody>
  </table>
</div>

        </>
      )}
    </div>
  );
};

export default MyQueries;
