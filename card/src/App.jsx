import React, { useState } from "react";
import "animate.css";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="max-w-xs w-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-[0.7s] ease-in-out">
      <div className="p-6 flex flex-col justify-between h-full bg-white rounded-lg shadow-lg group hover:shadow-2xl hover:bg-[#11131e] transition-shadow duration-[0.7s] ease-in-out">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-pink-400 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 group-hover:text-pink-200 transition-colors duration-500">
          {description}
        </p>
        <a
          href={link}
          className="mt-auto bg-pink-600 text-white py-2 px-6 rounded-lg text-center transform transition-transform duration-[2s] ease-in-out group-hover:scale-110 hover:bg-indigo-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const ProjectLinks = () => {
  // State for managing dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: "Study Point",
      description: "Collection of all necessary materials for MCA",
      link: "https://pu-mca.netlify.app/",
    },
    {
      title: "My Portfolio Website",
      description: "My all projects, My education, My skills",
      link: "https://kk-portfolio-website.vercel.app/",
    },
    {
      title: "Quiz App",
      description: "A mini project for MCA quizs",
      link: "https://mca-quiz.vercel.app/",
    },
    {
      title: "Cofee Website",
      description: "A Coffe website",
      link: "https://cafe-chronicles.netlify.app/",
    },
    {
      title: "To Do Vault",
      description: "For keeping track of what matters",
      link: "https://to-do-vault.netlify.app/",
    },
    {
      title: "Currency Converter",
      description: "Get quickly all currency rates",
      link: "https://currency-converter-nine-wheat.vercel.app/",
    },
    {
      title: "Age Calculator",
      description: "Calulate your age",
      link: "https://age-calculator-git-main-karans-projects-61780ee8.vercel.app/",
    },
    {
      title: "2nd Portfolio",
      description: "Portfolio",
      link: "https://react-portfolio-roan-seven.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description: "Trace your expenses",
      link: "https://exxpense-traacker.netlify.app/",
    },
    {
      title: "Travel Planner",
      description: "Plan your holidays with travel planner.",
      link: "https://travel-planner-two-psi.vercel.app/",
    },
    {
      title: "Stop Watch",
      description: "A simple Stopwatch using React.",
      link: "https://stop-watchz.netlify.app/",
    },
    {
      title: "To Do list",
      description: "A simple To Do List",
      link: "https://to-do-phi-orpin.vercel.app/",
    },
    {
      title: "Age Calculator",
      description: "A simple Age Calculator with react",
      link: "https://age-calculator-git-main-karans-projects-61780ee8.vercel.app/",
    },
    {
      title: "Weather App",
      description: "Get weather anytime",
      link: "https://weather-ashen-eta.vercel.app/",
    },
    {
      title: "Task Trekker",
      description: "A todo List with drag and drop feature.",
      link: "https://todo-tasktrekker.netlify.app/",
    },
    {
      title: "Light Dark Mode Switcher",
      description: "Just for Fun",
      link: "https://light-dark-mode-eight-pink.vercel.app/",
    },
    {
      title: "Tracker",
      description: "Keep tracking all your debts",
      link: "https://tracker-eight-xi.vercel.app/",
    },
  ];

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-800"
      }
    >
      <div className="container mx-auto p-8 animate__animated animate__fadeIn animate__delay-1s">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-4 right-4 bg-pink-600 text-white py-2 px-4 rounded-lg focus:outline-none"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <h2 className="text-4xl font-bold text-center mb-8">
          <span className="text-pink-600">My</span> Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectLinks;
