import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faHome, faInfo, faBriefcase, faPhone, faCode, faLaptopCode,faDownload, faLinkedinIn} from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from 'react-simple-typewriter';
import santhosh from "../assets/santhosh.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import tproject1 from "../assets/tproject1.png";
import tproject2 from "../assets/tproject2.png";
import tproject3 from "../assets/tproject3.png";
import tproject4 from "../assets/tproject4.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import resume from "../assets/Santhosh_resume.pdf";


const TeamProjects = () => {
  const teamProjects = [
    {
      title: "File Encryption-Decryption",
      image: tproject1,
      githubLink: "https://github.com/Santhoshnov/fileEncryptionDecryptionSoftware",
    },
    {
      title: "Cert-Proof",
      image: tproject2,
      githubLink: "https://github.com/Santhoshnov/certproof-HackInHub22",
    },
    {
      title: "CodeRizz",
      image: tproject3,
      githubLink: "https://github.com/Santhoshnov/coderizz-website",
    },
    {
      title: "BrowSEcure",
      image: tproject4,
      githubLink: "https://github.com/Santhoshnov/Browsecure",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {teamProjects.map((project, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-md">
          <img src={project.image} alt={project.title} className="w-full h-auto" />
          <div className="p-4">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-purple-700 font-medium underline">
              {project.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const PersonalProjects = () => {
  const personalProjects = [
    {
      title: "BMI-Calculator",
      image: project1,
      githubLink: "https://github.com/Santhoshnov/bmi-calculator",
    },
    {
      title: "Gluco-Predict",
      image: project2,
      githubLink: "https://github.com/Santhoshnov/Gluco-Predict",
    },
    {
      title: "Covid-Vaccination-Booking",
      image: project3,
      githubLink: "https://github.com/Santhoshnov/Devrev",
    },
    {
      title: "Linkify",
      image: project4,
      githubLink: "https://github.com/Santhoshnov/bmi-calculator",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {personalProjects.map((project, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-md">
          <img src={project.image} alt={project.title} className="w-full h-auto" />
          <div className="p-4">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-purple-700 font-medium underline">
              {project.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  const [displayTeamProjects, setDisplayTeamProjects] = useState(true);

  const toggleDarkMode = () => {
    setDarkToggle((prevDarkToggle) => !prevDarkToggle);
  };

  const toggleProjectsDisplay = () => {
    setDisplayTeamProjects((prevDisplayTeamProjects) => !prevDisplayTeamProjects);
  };

  const navbarColor = darkToggle ? "#303234" : "#FAFAFA";

  return (
    <div className={`min-h-screen ${darkToggle ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Navbar */}
      <nav className={`${darkToggle ? "bg-gray-800" : "bg-white"} p-4 flex items-center justify-between`} style={{ backgroundColor: navbarColor }}>
        <div className="flex items-center">
          <h2 className={`text-2xl font-medium bold ${darkToggle ? "text-white" : "text-gray-900"} ${darkToggle ? "no-underline" : ""}`}>
            <FontAwesomeIcon icon={faLaptopCode} /> SANTHOSH
          </h2>
        </div>
        <div className="ml-auto flex items-center">
          <ul className={`hidden md:flex space-x-20 ${darkToggle ? "text-white" : "text-gray-900"}`}>
            <li>
              <button className="text-2xl font-medium" onClick={toggleProjectsDisplay}>
                Home
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium" onClick={toggleProjectsDisplay}>
                About
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium" onClick={toggleProjectsDisplay}>
                Projects
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium" onClick={toggleProjectsDisplay}>
                Skills
              </button>
            </li>
            <li>
              <button className="text-2xl font-medium" onClick={toggleProjectsDisplay}>
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

      {/* Mobile Navbar */}
      <nav style={{ backgroundColor: navbarColor }} className="p-4 fixed bottom-0 left-0 right-0 md:hidden flex flex-wrap justify-center">
        <ul className={`flex flex-wrap justify-center space-x-4 ${darkToggle ? "text-white" : "text-gray-900"}`}>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`} onClick={toggleProjectsDisplay}>
              <FontAwesomeIcon icon={faHome} className="mb-1" />
              Home
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`} onClick={toggleProjectsDisplay}>
              <FontAwesomeIcon icon={faInfo} className="mb-1" />
              About
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`} onClick={toggleProjectsDisplay}>
              <FontAwesomeIcon icon={faBriefcase} className="mb-1" />
              Projects
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`} onClick={toggleProjectsDisplay}>
              <FontAwesomeIcon icon={faCode} className="mb-1" />
              Skills
            </button>
          </li>
          <li>
            <button className={`text-sm flex flex-col items-center ${darkToggle ? "text-white" : "text-gray-900"}`} onClick={toggleProjectsDisplay}>
              <FontAwesomeIcon icon={faPhone} className="mb-1" />
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center mt-20">
        <div className="rounded-lg overflow-hidden shadow-md w-48 sm:w-56 md:w-64 shadow-lg">
          <img src={santhosh} alt="" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-4xl md:text-6xl text-xl md:text-6xl text-center pt-14 font-normal">
          Hello World!{" "}
          <span className={`text-purple-700 font-bold ${darkToggle ? "text-purple-400" : ""}`}>
            <Typewriter
              words={['I am Santhosh S', 'Web Developer', 'Founder of The CodeRizz']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <p className={`text-sm md:text-lg lg:text-2xl text-center mt-10 mx-10 lg:mx-auto max-w-2xl lg:max-w-7xl ${darkToggle ? 'text-white' : 'text-black'}`} style={{ lineHeight: "1.8" }}>
          I am a full-stack developer. I started learning programming and web development about two years ago. I am really enthusiastic about it and have become skilled in both front-end and back-end development. I am currently pursuing a Bachelor's degree in Computer Science and Engineering. I am proud to be one of the founders of the CodeRizz Coding Club at SRMVEC, where I am in charge of leading the domain of Web Development. I always enjoy learning and staying updated with new technologies through building projects. Let's work together and create something amazing!
        </p>
        <li>
        <a href={resume} download="Santhosh_resume.pdf" >
        <FontAwesomeIcon icon={faDownload} className="mr-1" />
          Download Resume
        </a>
      </li>

      </div>

      <div className="mt-20">
        <div className="flex justify-center mt-10">
          <button
            className={`text-2xl font-medium py-2 px-6 rounded-lg ${
              darkToggle ? "bg-purple-700 text-white" : "bg-gray-900 text-white"
            }`}
            onClick={toggleProjectsDisplay}
          >
            {displayTeamProjects ? "Team Projects" : "Personal Projects"}
          </button>
        </div>

        {/* Mobile view */}
        <div className="md:hidden flex justify-center">
          {displayTeamProjects ? (
            <Carousel showArrows={true}>
              <TeamProjects />
            </Carousel>
          ) : (
            <Carousel showArrows={true}>
              <PersonalProjects />
            </Carousel>
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden md:block">
          {displayTeamProjects ? (
            <TeamProjects />
          ) : (
            <PersonalProjects />
          )}
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-center">
          <h1 className={`text-4xl font-medium ${darkToggle ? "text-white" : "text-black"}`}>Skills</h1>
        </div>

        <div className="flex flex-wrap justify-center mt-5">
          <div className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-medium">Programming Languages</h2>
              <ul className="mt-4">
                <li>Python</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>C</li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-medium">Front-End</h2>
              <ul className="mt-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>React JS</li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-medium">Back-End</h2>
              <ul className="mt-4">
                <li>Node JS</li>
                <li>Express Js</li>
                <li>Flask</li>
                <li>Django</li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-medium">Databases</h2>
              <ul className="mt-4">
                <li>Mongo DB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-center">
          <h1 className={`text-4xl font-medium ${darkToggle ? "text-white" : "text-black"}`}>Contact</h1>
        </div>

        <div className="flex justify-center mt-5">
          <ul className={`text-2xl space-x-8 ${darkToggle ? "text-white" : "text-black"}`}>
            <li>
              <a href="https://github.com/Santhoshnov" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/santhosh-s-950184160" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </li>
            <li>
              <a href="mailto:santhoshnov1@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FontAwesomeIcon icon={faCode} />
              </a>
            </li>
          
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-center">
          <p className={`text-xl font-medium ${darkToggle ? "text-white" : "text-black"}`}>
            &copy; 2023 Santhosh. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
