import { useLoaderData } from "react-router";
import Header from "../Header/Header";
import RecentlyAdded from "./RecentlyAdded/RecentlyAdded";
import FirstSection from "../Section/FirstSection";
import HowItWorks from "../Section/HowItWorks";
import { Zoom } from "react-awesome-reveal";
import ExperienceList from "../Experience/ExperienceList";
import WhyLovedSection from "../WhyLovedSection/WhyLovedSection";
import ProductQuiz from "../AddQuries/ProductQuiz";
import UseAuth from "../../Hooks/UseAuth";
import Loading from "../Loading/loading";

const Home = () => {
  const recentlyAddQueries = useLoaderData();

  
 
  return (
    <div className="mt-4">
      <Header></Header>
      <Zoom triggerOnce>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Recently Added Queries
        </h2>
      </Zoom>
      <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 mb-6 grid-cols-1">
        {recentlyAddQueries.map((recentlyAdd) => (
          <RecentlyAdded key={recentlyAdd._id} recentlyAdd={recentlyAdd} />
        ))}
      </div>
<ProductQuiz/> 
      <FirstSection></FirstSection>
      <WhyLovedSection/>
      <HowItWorks></HowItWorks>
      <ExperienceList />
    </div>
  );
};

export default Home;
