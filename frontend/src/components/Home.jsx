import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHome, faInfo, faBriefcase, faPhone, faCode, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from 'react-simple-typewriter';
import santhosh from "../assets/santhosh.jpg";

const Home = () => {
  const [darkToggle, setDarkToggle] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkToggle((prevDarkToggle) => !prevDarkToggle);
  };

  const navbarColor = darkToggle ? "#303234" : "#FAFAFA";

  return (
    <div className={`min-h-screen ${darkToggle ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <nav className={`${darkToggle ? "bg-gray-800" : "bg-white"} p-4 flex items-center justify-between`} style={{ backgroundColor: navbarColor }}>
        <div className="flex items-center">
          <h2 className={`text-2xl font-medium bold ${darkToggle ? "text-white" : "text-gray-900"} ${darkToggle ? "no-underline" : ""}`}>
            <FontAwesomeIcon icon={faLaptopCode} /> SANTHOSH
          </h2>
        </div>
        <div className="ml-auto flex items-center">
          <ul className={`hidden md:flex space-x-20 ${darkToggle ? "text-white" : "text-gray-900"}`}>
            <li>
              <button className="text-2xl font-medium">
                Home
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium">
                About
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium">
                Projects
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium">
                Skills
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium">
                Contact
              </button>
            </li>
          </ul>
          {darkToggle ? (
            <FontAwesomeIcon
              icon={faSun}
              className="text-white cursor-pointer ml-20 text-2xl"
              onClick={toggleDarkMode}
            />
          ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="text-gray-700 cursor-pointer ml-20 text-2xl"
                onClick={toggleDarkMode}
              />
            )}
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav style={{ backgroundColor: navbarColor }} className="p-4 fixed bottom-0 left-0 right-0 md:hidden flex flex-wrap justify-center">
        <ul className={`flex flex-wrap justify-center space-x-4 ${darkToggle ? "text-white" : "text-gray-900"}`}>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`}>
              <FontAwesomeIcon icon={faHome} className="mb-1" />
              Home
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`}>
              <FontAwesomeIcon icon={faInfo} className="mb-1" />
              About
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`}>
              <FontAwesomeIcon icon={faBriefcase} className="mb-1" />
              Projects
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`}>
              <FontAwesomeIcon icon={faCode} className="mb-1" />
              Skills
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`}>
              <FontAwesomeIcon icon={faPhone} className="mb-1" />
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <h1 className="text-4xl md:text-6xl text-xl md:text-6xl text-center pt-20 font-normal">
        Hello World!{" "}
        <span className={`text-purple-700 font-bold ${darkToggle ? "text-purple-400" : ""}`}>
          <Typewriter
            words={['I am Santhosh S', 'Budding Engineer', 'Web Developer']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <div className="flex justify-center mt-8">
        <div className="rounded-lg overflow-hidden shadow-md w-48 sm:w-56 md:w-64">
          <img
            src={santhosh}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
