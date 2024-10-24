"use client"; // Ensures this is treated as a client component
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";


const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Contact", path: "#contact" }, // Make sure this is added only once
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="navbar-container"> {/* Set background to black */} 
            <div className="navbar-menu"> {/* Desktop Menu */}
                <ul>
                    {navLinks.map((links, index) => (
                        <li key={index}>
                            <Link href={links.path}>
                                <p>{links.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div
                onClick={toggleNav}
                className="navbar-toggle"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className={`mobile-menu ${nav ? 'open' : ''}`}
            >
                <ul>
                    {navLinks.map((links, index) => (
                        <li key={index}>
                            <Link href={links.path} onClick={closeNav} className="hover:text-gray-400">
                                {links.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default Navbar;
