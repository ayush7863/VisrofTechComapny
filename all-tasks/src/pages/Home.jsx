import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const styles = {
    border: "1px solid black",
    backgroundImage: `url("https://esqtraining.com/wp-content/uploads/2021/07/background-landing-page-training-NLP-1-scaled.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover", // or "contain" depending on your preference
    height: "100vh",
  };

  return (
    <div style={styles}>
      <Navbar />
    </div>
  );
};

export default Home;
