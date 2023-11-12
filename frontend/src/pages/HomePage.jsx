import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Deals from "../components/Route/Deals/Deals";
import TodaysDeal from "../components/TodaysDeal/TodaysDeal";
import Categories from "../components/Route/Categories/Categories";
import BestSellers from "../components/Route/BestSellers/BestSellers";


const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Deals />
        <TodaysDeal /> {/*Events*/}
        <Categories />
        <BestSellers /> {/*FeaturedProducts*/}

    </div>
  )
}

export default HomePage