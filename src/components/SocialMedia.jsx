import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SocialMedia = () => {
  const [error, setError] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://api-portfolioweb.vercel.app/app/contact")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === false) {
          setError(data.msg);
        } else {
          setContacts(data.data);
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="lg:w-full lg:mb-2 mb-3">
      <div className="bg-card-background p-4">
        <p className="font-semibold text-2xl mb-4">Contact Me</p>
        
          {error ? (
            <p>{error}</p>
          ) : (
            <ul>
            {
                contacts.map(contact => (
                <li key={contact._id} className="mb-2">
                    <Link to={contact.link}>
                      <div className="flex items-center">
                      <span dangerouslySetInnerHTML={{ __html: contact.icon }} />
                        <span className="ml-2">{contact.name}</span>
                      </div>
                    </Link>
                  </li> 
                ))
            }
           </ul>
          )}
      </div>
    </div>
  );
};

export default SocialMedia;
