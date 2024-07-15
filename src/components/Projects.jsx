import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [project, setProject] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api-portfolioweb.vercel.app/app/projects")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === false) {
          setError(data.msg);
        }
        setProject(data.data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="lg:w-2/2 mb-4 lg:mb-0 rounded-md">
      {error ? (
        <p>{error}</p>
      ) : (
        project.length > 0 &&
        project.map((proj) => (
          <div key={proj._id} className="bg-card-background p-2 m-2">
            <img
              src={proj.project_image}
              alt=""
              className="w-full h-auto rounded-md"
            />
            <div className="p-2">
              <h2 className="text-2xl font-semibold text-white">
                {proj.project_name}
              </h2>
              <div className="flex flex-wrap gap-1">
                {proj.project_techstack.split(',').map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 text-xs mb-1 font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
              <Link to={proj.project_code}>
                <button className="flex items-center mt-2 text-sm text-white bg-blue-500 py-1 px-3 rounded-md">
                  View Project
                  <svg
                    className="ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="10"
                    height="10"
                    x="0"
                    y="0"
                    viewBox="0 0 492.004 492.004"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                        fill="#ffffff"
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Projects;
