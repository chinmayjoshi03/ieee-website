import React from "react";
import "./assets/styles/App.css";
import "./assets/styles/About.css";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import Footer from "./components/Footer";
import MarqueeBar from "./components/MarqueeBar";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./Pages/AboutUs";

// const App: React.FC = () => {
//   return (
//     <div className="app">
//       <Header />
//       <MarqueeBar/>
//       <LandingSection />
//       <About/>
//       <Footer />
//     </div>
//   );
// };


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
              <LandingSection />
              <About />
            </>
          ),
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;


