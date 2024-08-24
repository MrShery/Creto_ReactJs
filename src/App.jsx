import React, { useState } from "react";

import Header from "./Components/Header";
import { NavBar } from "./Components/NavBar";
import { Hero } from "./Components/Hero";
import MyComponent from "./Components/MyComponent";
import FindCard from "./Components/FindCard";
import Heading from "./Components/Heading";
import Advantage from "./Components/Advantage";
import OurProduct from "./Components/ProductSection/OurProduct";
import SubscribeSecion from "./Components/SubscribeSection";
import FeedBackSection from "./Components/FeedBackSection";
import OurNewsSection from "./Components/OurNewsSection";
import ClientSection from "./Components/ClientSection";
import BannerSection from "./Components/BannerSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <NavBar />
      <Hero />
      <MyComponent />
      <Advantage />
      <OurProduct />
      <SubscribeSecion />
      <FeedBackSection />
      <OurNewsSection />
      <ClientSection />
      <BannerSection />
      <Footer/>
    </div>
  );
}

export default App;
