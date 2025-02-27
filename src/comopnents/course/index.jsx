import React, { useState } from "react";
// import FullStackComponent from './components/FullStackComponent';  // Import your pre-built components
import ML from "./ML/index";
import WebDev from "./web-dev/index";

// import './index.css';
import '../../App.css'

// Define a mapping from dropdown values to components
const componentMap = {
  //   fullstack: FullStackComponent,
  ML: ML,
  WebDev: WebDev,
};

const DynamicComponentApp = () => {
  const [selectedComponent, setSelectedComponent] = useState("WebDev");

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  // Dynamically determine which component to render
  const SelectedComponent = componentMap[selectedComponent];

  return (
    <div>
      <div className="text-center mt-4" id="courses">
        {" "}
        <div className="text-center mt-10 lg:mt-20 lg:py-10">
        <h1 className="text-4xl lg:text-6xl font-semibold my-10 lg:mb-2 mx-2 relative">
  Cours<span className="underline-span">e  O</span>verview
</h1>

        </div>
        <div className="flex justify-start items-center pl-2 lg:pl-6">
          <div className="relative">
            <select
              onChange={handleComponentChange}
              className="bg-slate-900 text-white text-lg font-semibold py-2 pl-8 pr-10 rounded-lg shadow-lg my-3 lg:my-6 appearance-none focus:ring-6 focus:ring-slate-500"
            >
              <option value="WebDev">Full Stack Development</option>
              <option value="ML">Machine Learning</option>
              <option value="ML">Scrum Master</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.25 7.5l4.25 4.25 4.25-4.25H5.25z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="component-container">
        <SelectedComponent />
      </div>
    </div>
  );
};

export default DynamicComponentApp;
