import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHome, faInfo, faBriefcase, faCogs, faPhone,faCode  } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
const [darkToggle, setDarkToggle] = React.useState(false);

const toggleDarkMode = () => {
    setDarkToggle((prevDarkToggle) => !prevDarkToggle);
};

const navbarColor = darkToggle ? "#303234" : "#FAFAFA";

return (
    <div className={`min-h-screen ${darkToggle ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
    <nav className={`${darkToggle ? "bg-gray-800" : "bg-white"} p-4 flex items-center justify-between`}
        style={{ backgroundColor: navbarColor }} 
      >
        <div className="flex items-center">
          <h2
            className={`text-2xl font-medium ${
              darkToggle ? "text-white" : "text-gray-900"
            } ${darkToggle ? "no-underline" : ""}`}
          >
            Santhosh
          </h2>
        </div>
        <div className="ml-auto flex items-center">
          <ul
            className={`hidden md:flex space-x-4 ${
              darkToggle ? "text-white" : "text-gray-900"
            }`}
          >
           
            <li>
              <button
                className="focus:outline-none"
                onClick={() => console.log("Home button clicked")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="focus:outline-none"
                onClick={() => console.log("About button clicked")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="focus:outline-none"
                onClick={() => console.log("Projects button clicked")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="focus:outline-none"
                onClick={() => console.log("Skills button clicked")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className="focus:outline-none"
                onClick={() => console.log("Contact button clicked")}
              >
                Contact
              </button>
            </li>
          </ul>
          {darkToggle ? (
            <FontAwesomeIcon
              icon={faSun}
              className="text-white cursor-pointer ml-4"
              onClick={toggleDarkMode}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              className="text-gray-700 cursor-pointer ml-4"
              onClick={toggleDarkMode}
            />
          )}
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav
  style={{ backgroundColor: navbarColor }}
  className="p-4 fixed bottom-0 left-0 right-0 md:hidden flex flex-wrap justify-center"
>
  <ul className={`flex flex-wrap justify-center space-x-4 ${darkToggle ? "text-white" : "text-gray-900"}`}>
    <li>
    <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`}>
            <FontAwesomeIcon icon={faHome} className="mb-1" />
            Home
          </button>
    </li>
    <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`}>
            <FontAwesomeIcon icon={faInfo} className="mb-1" />
            About
          </button>
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
            Contacts
          </button>
    </li>
  </ul>
</nav>

    </div>
  );
};

export default Home;
