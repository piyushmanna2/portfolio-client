import React, { useEffect, useState } from "react";

const TechStack = () => {

  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api-portfolioweb.vercel.app/app/techstack")
      .then(response => response.json())
      .then((data) => {
        if (data.status === false) {
          setError(data.msg);
        } else {
          setSkills(data.data);
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="lg:w-full lg:mb-2 mb-3">
      {
        (
          <div className="bg-card-background p-4">
        <h1 className="font-semibold text-2xl mb-4">What I know</h1>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {skills.map(skill => (
              <li key={skill._id} className="flex justify-between">
                <span>{skill.tech}</span>
                <span>{skill.progress}%</span>
              </li>
            ))}
          </ul>
        )}
      </div>
        )
      }
    </div>
  );
};

export default TechStack;
