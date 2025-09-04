import React from "react";
import "./assets/styles/App.css";
import "./assets/styles/About.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import MarqueeBar from "./components/MarqueeBar";
import About from "./components/About";
import ConferenceTitleBanner from "./components/ConferenceTitleBanner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./Pages/AboutUs";
import CallForPapers from "./components/CallForPapers";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true, 
          element: (
            <>
              <MarqueeBar />
              <ConferenceTitleBanner />
              <LandingSection />
              <About />
            </>
          ),
        },
        {
          path: "about-us",
          element: (
            <>
              <MarqueeBar />
              <ConferenceTitleBanner />
              <AboutUs />
            </>
          ) 
        },
        {
          path: "call-for-papers",
          element: (
            <>
              <MarqueeBar />
              <ConferenceTitleBanner />
              <CallForPapers />
            </>
          ) 
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;