import React from "react";
import Navbar from "../../components/Navbar";
import Style from "./style.module.css";

const ModelingPage = () => {
  return (
    <>
      <Navbar />
      <div className={`${Style.mainServices}`}>
        <div className="w-1/3">
          <h1>3D Modeling</h1>
          <p>
            Immerse your audience in a three-dimensional world with our
            cutting-edge 3D modeling, where imagination meets reality for
            stunning visual experiences.
          </p>
        </div>
        <div className={`${Style.servicesImage}`}></div>
      </div>
      <div>
        <div>
          <div>
            <ul>
              <li>
                <strong>Project Visioning:</strong> Dive into the intricacies of
                your project, understanding the specific requirements and
                desired outcomes for the 3D modeling endeavor.
              </li>
              <li>
                <strong>Artistic and Technical Design:</strong>
                <ul>
                  <li>
                    Conceptualization: Bring creativity to life by
                    conceptualizing 3D models that align with project goals.
                  </li>
                  <li>
                    Technical Blueprinting: Develop detailed technical
                    specifications to guide the precision of 3D modeling
                    processes.
                  </li>
                </ul>
              </li>
              <li>
                <strong>3D Modeling Process:</strong> Leverage advanced modeling
                tools and techniques to craft intricate 3D models that capture
                the essence of your vision.
              </li>
              <li>
                <strong>Quality Assurance:</strong> Rigorous testing ensures the
                integrity and precision of 3D models, meeting and exceeding
                industry standards.
              </li>
              <li>
                <strong>Rendering and Visualization:</strong> Showcase your 3D
                models in high-quality renders, providing a realistic and
                immersive visual representation.
              </li>
              <li>
                <strong>Delivery and Distribution:</strong> Efficiently deliver
                3D models to clients or integrate them into various platforms
                for widespread distribution.
              </li>
              <li>
                <strong>Ongoing Support:</strong> Provide continual support and
                modifications to ensure that your 3D models evolve with changing
                project requirements and standards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelingPage;
