import React from "react";
import "./home.css"; 
import MyHeader from "./homeheader";

const LandingPage = () => {
    const handleClick = () =>{
        window.location.href = 'https://track.deriv.com/_7p0wsCpjOfD1hit6RV3zsGNd7ZgqdRLk/1/'
      }
  return (
    <div className="online-academy">
      {/* Header Section */}
      <header className="header">
        <MyHeader/>
      </header>

      {/* Main Content */}
      <main className="content">
        <h1 className="title">Welcome To BINARY TOOL</h1>
        <p className="description">
            <p>Welcome to the BINARY TOOL, an indispensable asset for traders of digital options and CFDs. This state-of-the-art platform is designed to help you achieve precision in your trades by identifying sniper entries in the market. Utilizing cutting-edge technology, BINARY TOOL provides advanced market analysis, including volatility assessments, pattern sequences, and real-time market signals. Trusted by top options traders globally, this tool offers the insights you need to refine your trading strategies and maximize your potential for success. Always remember to trade responsibly, as the high risks associated with digital options and CFDs can result in significant losses.</p>
          Take your online and distance learning to new heights. Explore forex, Deriv,
          trading, analysis tools, and more with our professional courses.
        </p>

        {/* Buttons Section */}
        <div className="button-container">
          <button className="start-learning" onClick={handleClick}>Start Learning</button>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
