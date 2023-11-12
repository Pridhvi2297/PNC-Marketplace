import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Deals from "../components/Route/Deals/Deals";
import TodaysDeal from "../components/TodaysDeal/TodaysDeal";
import Categories from "../components/Route/Categories/Categories";
import BestSellers from "../components/Route/BestSellers/BestSellers";
import Sellers from "../components/Route/Sellers";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Deals />
        <TodaysDeal /> {/*Events*/}
        <Categories />
        <BestSellers /> {/*FeaturedProducts*/}
        <Sellers /> {/* Sponsored */}
        <Footer />
    </div>
  )
}

export default HomePage