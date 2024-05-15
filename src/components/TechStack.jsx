import React, { useEffect, useState } from "react";

const TechStack = () => {

  const [skills, setSkills] = useState([]);
  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
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
      setLoading(false)
  }, []);

  return (
    <div className="lg:w-full lg:mb-2 mb-3">
      {
        loading ?  (
          <img src="/loader.gif" alt="loader" className="loader" />
        ) : (
          <div className="bg-card-background p-4">
        <p className="font-semibold text-2xl mb-4">What i know</p>
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
