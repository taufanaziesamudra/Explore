import React from "react";
import Layout from "./Layout";
import './App.css'
//! Week1
// import HomeWeek1 from "./Week1/HomeWeek1";

//! Week2
import HomeWeek2 from "./Week2/HomeWeek2";

//! Week5
// import Home from "./Week5/MiniProject1/Home";
// import MyApp from "./Week5/MiniProject2/MyApp";
// import AppHome from "./Week5/MiniProject3/AppHome";

function App() {
  return (
    <div>
      <Layout title='Master ReactJS RoadMap'>
        {/* <h1 style={{ textAlign: 'center' }}>Week 1</h1> */}
        {/* <HomeWeek1 /> */}

        <HomeWeek2 />
        {/* <MyApp /> */}
        {/* <Home /> */}
        {/* <AppHome /> */}
      </Layout>


    </div >
  );
}

export default App;
