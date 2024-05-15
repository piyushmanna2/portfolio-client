import React, { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api-portfolioweb.vercel.app/app/about")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === false) {
          setError(data.msg);
        } else {
          setAbout(data.data[0]);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="lg:w-full lg:mb-3 mb-3">
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="bg-card-background p-4">
          <p className="font-semibold text-2xl">About Me</p>
          <p className="font-normal mt-2">{about.about}</p>
        </div>
      )}
    </div>
  );
};

export default About;
