import React from "react";
import {
  Hero,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Categories,
  Feedback,
  CTA,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTA />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
