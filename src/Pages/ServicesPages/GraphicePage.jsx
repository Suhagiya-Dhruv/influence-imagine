import React from "react";
import Navbar from "../../components/Navbar";
import Style from "./style.module.css";

const GraphicePage = () => {
  return (
    <>
      <Navbar />
      <div className={`${Style.mainServices}`}>
        <div className="w-1/3">
          <h1>Graphice Design</h1>
          <p>
            Elevate your brand with captivating Graphics Designing that speaks
            volumes, leaving a lasting impression on your audience.
          </p>
        </div>
        <div className={`${Style.servicesImage}`}></div>
      </div>
      <div>
        <div>
          <ul>
            <li>Graphics design services typically include:</li>
            <li>
              <strong>Logo Design:</strong> Unleashing Creativity to Forge
              Unique Brand Visuals.
            </li>
            <li>
              <strong>Branding and Identity Design:</strong> Crafting a Cohesive
              Visual Style with Vibrant Color Schemes, Typography, and
              Distinctive Visual Elements.
            </li>
            <li>
              <strong>Marketing Collateral Design:</strong> Innovating
              Promotional Materials - From Brochures and Flyers to Business
              Cards.
            </li>
            <li>
              <strong>Web Design:</strong> Weaving Visually Appealing Websites
              that Speak Directly to Your Target Audience.
            </li>
            <li>
              <strong>Print Design:</strong> Transforming Concepts into Striking
              Visuals for Billboards, Banners, and Posters.
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default GraphicePage;
