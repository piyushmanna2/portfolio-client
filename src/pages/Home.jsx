import React, { useEffect, useState } from "react";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Project from "../components/Projects";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialMedia from '../components/SocialMedia';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="loader">
                    <img src="/loader.gif" alt="loader" />
                </div>
            ) : (
                <>
                    <Navbar />
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
                                    <SocialMedia/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;
