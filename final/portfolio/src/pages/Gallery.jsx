import { useState } from "react";
import "../styles/Gallery.css";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";

import assignment1 from "../images/assignment1.jpg";
import assignment2 from "../images/assignment2.jpg";
import assignment3 from "../images/assignment3.jpg";
import assignment4 from "../images/assignment4.jpg";
import assignment6 from "../images/assignment6.jpg";
import assignment7 from "../images/assignment7.jpg";
import assignment9 from "../images/assignment9.jpg";
import assignment10pic1 from "../images/assignment10pic1.jpg";
import assignment10pic2 from "../images/assignment10pic2.jpg";
import assignment11pic1 from "../images/assignment11pic1.jpg";
import assignment11pic2 from "../images/assignment11pic2.jpg";
import project1 from "../images/project1.jpg";
import project2pic1 from "../images/project2pic1.jpg";
import project2pic2 from "../images/project2pic2.jpg";

function Gallery() {
    const projects = [
        {
            id: 1,
            title: "Assignment 1",
            description: "Adds HongDian Liu in basic HTML",
            images: [assignment1],
        },
        {
            id: 2,
            title: "Assignment 2",
            description: "Add Responsive CSS Layout and Hover Effects to Match Reference Design",
            images: [assignment2],
        },
        {
            id: 3,
            title: "Assignment 3",
            description: "Implement responsive cat news page with semantic HTML and mobile-first CSS",
            images: [assignment3],
        },
        {
            id: 4,
            title: "Assignment 4",
            description: "Create Registration Form Webpage",
            images: [assignment4],
        },
        {
            id: 5,
            title: "Project 1",
            description: "Multi-Page Website with Semantic HTML, CSS Grid, and Responsive Design",
            images: [project1],
        },
        {
            id: 6,
            title: "Assignment 6",
            description: "Responsive Dropdown Menu with JS Interaction and UI Cards",
            images: [assignment6],
        },
        {
            id: 7,
            title: "Assignment 7",
            description: "Implement JS form validation and responsive layout",
            images: [assignment7],
        },
        
        {
            id: 8,
            title: "Project 2",
            description: "Add Responsive and Accessible Webpages with Modal, Form Validation, and Navigation Features",
            images: [project2pic1, project2pic2],
        },
        {
            id: 9,
            title: "Assignment 9",
            description: "Implement React Inventory State Management",
            images: [assignment9],
        },
        {
            id: 10,
            title: "Assignment 10",
            description: "Build SPA with Multi-Page Navigation, Reusable Button Component, and Modal Window Using React & Vite",
            images: [assignment10pic1, assignment10pic2],
        },
        {
            id: 11,
            title: "Assignment 11",
            description: "React feature Implementation",
            images: [assignment11pic1, assignment11pic2],
        },
    ];

    const [activeProjectId, setActiveProjectId] = useState(null);

    const handleAccordionToggle = (projectId) => {
        setActiveProjectId((prevId) => (prevId === projectId ? null : projectId));
    };

    return (
        <div className="gallery">
            <h2>Learning Milestone</h2>
            <Carousel
                cardsData={projects}
                onProjectClick={(projectId) => handleAccordionToggle(projectId)}
            />

            <hr className="gallery-separator" />

            <div className="accordion-section">
                {projects.map((project) => (
                    <Accordion
                        key={project.id}
                        title={project.title}
                        isOpen={project.id === activeProjectId}
                        onToggle={() => handleAccordionToggle(project.id)}
                    >
                        <div className="accordion-details">
                            {project.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${project.title} Image ${index + 1}`}
                                    className="accordion-image"
                                />
                            ))}
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default Gallery;