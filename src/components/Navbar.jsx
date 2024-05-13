import React from "react";
const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center p-4">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlSpace="preserve"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <g>
            <path
              d="m1.293 12.707 4 4a1 1 0 1 0 1.414-1.414L3.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414zM18.707 7.293a1 1 0 1 0-1.414 1.414L20.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zM13.039 4.726l-4 14a1 1 0 0 0 .686 1.236A1.053 1.053 0 0 0 10 20a1 1 0 0 0 .961-.726l4-14a1 1 0 1 0-1.922-.548z"
              fill="#3b82f6"
              opacity="1"
              data-original="#000000"
              className=""
            ></path>
          </g>
        </svg>
        <span className="ml-3 text-xl hidden sm:hidden md:hidden lg:inline-block">Piyush Manna</span>
      </a>
      <a href="mailto:piyushmanna69@gmail.com">
      <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 md:px-3 rounded text-sm md:text-base">
        Contact Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 md:w-5 md:h-5 ml-1"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </button>
      </a>
      
    </nav>
  );
};

export default Navbar;
