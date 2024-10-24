import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";

const skillIcons = [
    { Icon: <FaHtml5 size={140} />, label: "HTML" },
    { Icon: <FaCss3Alt size={140} />, label: "CSS" },
    { Icon: <FaReact size={140} />, label: "React" },
    { Icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { Icon: <FaHtml5 size={140} />, label: "HTML" },  // Duplicate entry
    { Icon: <FaCss3Alt size={140} />, label: "CSS" },  // Duplicate entry
    { Icon: <FaReact size={140} />, label: "React" },  // Duplicate entry
    { Icon: <FaJsSquare size={140} />, label: "JavaScript" },  // Duplicate entry
];

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-content">
                <h2 className="skills-title">What I Do.</h2>
                <div className="skills-grid">
                    {skillIcons.map((skill, index) => (
                        <div key={index} className="skill-box">
                            {skill.Icon}
                            <p className="skill-label">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
