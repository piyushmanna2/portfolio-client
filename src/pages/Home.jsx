import React from "react";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Project from "../components/Projects";

const Home = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <div className="lg:flex">
                <div className="lg:w-8/12">
                    <h1 className="text-3xl font-semibold mb-4">Projects</h1>
                    <div className="lg:flex lg:flex-wrap">
                        <Project />
                    </div>
                </div>
                <div className="lg:w-4/12 lg:pl-4 mt-12">
                    <div className="lg:flex lg:flex-col">
                        <About />
                        <TechStack />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
