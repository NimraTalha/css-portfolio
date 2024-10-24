"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "../images/domino.png";
import project2 from "../images/resume.png";
import project3 from "../images/figma.png";
import project4 from "../images/portfolio.png";


const projects = [
    {
        title: "Domino Pizza clone",
        desc: "I copy original Domino Pizza clone",
        devStack: "Nextjs, Tailwind Css, Shadcnui",
        link: "https://dominopizza-nrl9.vercel.app/",
        git: "https://github.com/NimraTalha/Dominopizza",
        src: project1,
    },
    {
        title: "Resume Builder",
        desc: "I design this resume builder using Html Css.",
        devStack: "Html, Css",
        link: "https://resume-pdf-chi.vercel.app/",
        git: "https://github.com/NimraTalha/NimraTalha-pdf-making-resume",
        src: project2,
    },
    {
        title: "E-commerce Furniture market",
        desc: "E-commerce website using Figma design",
        devStack: "Tailwind Css, Frame motion, Next.js",
        link: "https://e-commerce-furniture-website-l67o.vercel.app/",
        git: "https://github.com/NimraTalha/E-commerce-furniture-website",
        src: project3,
    },
    {
        title: "Portfolio Website",
        desc: "My Portfolio website. I design this clone with Html, Css.",
        devStack: "Html, Css",
        link: "https://my-webpage-five-sable.vercel.app/",
        git: "https://github.com/NimraTalha/MyWebpage",
        src: project4,
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio-container" id="portfolio">
            <h1 className="portfolio-title">
                Selected <span>Projects</span>
            </h1>
            <div className="project-container">
                {projects.map((project, index) => (
                    <motion.div key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`project-item ${index % 2 === 1 ? "project-item-reverse" : ""}`}>
                        
                        <div className="project-info">
                            <h2>{`0${index + 1}`}</h2>
                            <h2>{project.title}</h2>
                            <p className="project-desc">{project.desc}</p>
                            <p className="project-stack">{project.devStack}</p>
                            <div className='divider'>
                                <a href={project.link}>Link</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>
                        <div className="project-image-container">
                            <Image 
                                src={project.src} 
                                alt={project.title} 
                                className="project-image"
                                layout="responsive"
                                width={350}
                                height={250}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
