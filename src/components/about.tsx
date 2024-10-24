"use client";
import React from "react";
import Image from "next/image";
import finance from "../images/finance.png";
import book from "../images/book.png";
import pc from "../images/pc.png";
import card from "../images/card.png";


const About = () => {
  return (
    <div id="about">
      <h1>
        About
        <span> Me</span>
      </h1>
      <div className="about-container">
        <div className="about-grid">
          <div className="card">
            <div className="card-content">
              <Image src={book} alt="book" />
              <div>
                <h2>Book Title</h2>
                <p>I &apos;am studying Cloud Generative AI Engineering. I am an expert in Next.js, JavaScript, TypeScript, HTML, Tailwind CSS, and CSS.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <Image src={finance} alt="finance" />
              <div>
                <h2>Problem Solving</h2>
                <p>I &apos; approach challenges with a logical and systematic mindset.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <Image src={card} alt="card" />
              <div>
                <h2>Experience</h2>
                <p>I &apos; have a diverse portfolio of projects.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <Image src={pc} alt="pc" />
              <div>
                <h2>Technical Skills</h2>
                <p>I &apos; specialize in Next.js, React.js, and Tailwind CSS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
