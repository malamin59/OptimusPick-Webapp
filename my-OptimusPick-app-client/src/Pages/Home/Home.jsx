import { useLoaderData } from "react-router";
import Header from "../Header/Header";
import RecentlyAdded from "./RecentlyAdded/RecentlyAdded";
import FirstSection from "../Section/FirstSection";
import HowItWorks from "../Section/HowItWorks";
import { Zoom } from "react-awesome-reveal";

const Home = () => {
    const recentlyAddQueries = useLoaderData();
    return (
        <div className="mt-8">
            <Header></Header>
              <Zoom triggerOnce>
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
                    Recently Added Queries
                </h2>
            </Zoom>
            <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    recentlyAddQueries.map(recentlyAdd =>
                        <RecentlyAdded key={recentlyAdd._id}
                            recentlyAdd={recentlyAdd} />
                    )
                }
            </div>

            <FirstSection></FirstSection>
            <HowItWorks></HowItWorks>

        </div>
    );
};

export default Home;