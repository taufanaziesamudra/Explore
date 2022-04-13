import React from "react";
import Layout from "./Layout";
import './App.css'
// Week1
// import HomeWeek1 from "./Week1/HomeWeek1";

// Week2
import HomeWeek2 from "./Week2/HomeWeek2";

function App() {
  return (
    <div>
      <Layout title='Master ReactJS RoadMap'>
        <h1 style={{ textAlign: 'center' }}>Week 1</h1>
        {/* <HomeWeek1 /> */}
        <HomeWeek2 />
      </Layout>
    </div >
  );
}

export default App;
