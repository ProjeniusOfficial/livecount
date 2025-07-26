import React, { useRef } from "react";
import "./Showcase.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import client1 from "../img/client1.jpeg";
import client2 from "../img/client2.jpg";
import client3 from "../img/client3.jpeg";
import client4 from "../img/client4.jpeg";
import client5 from "../img/client5.jpeg";
import client6 from "../img/client-6.jpeg";

type Project = {
  title: string;
  category: string;
  description: string;
  rating: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Intelligent Commodity System",
    category: "Software & Hardware",
    description:
      "An IoT-based web app for automated ration distribution with smart weighing, billing, and inventory tracking. Prevents fraud and offers real-time monitoring.",
    rating: "Rating: ⭐⭐⭐⭐☆ (4/5)",
    image: client1,
  },
  {
    title: "Smart Hospital Access System",
    category: "Software",
    description:
      "Enhances hospital accessibility using IoT for smart parking and pothole detection. Aims for smoother emergency navigation and access control.",
    rating: "Rating: ⭐⭐⭐⭐⭐ (5/5)",
    image: client2,
  },
  {
    title: "AI-Powered Water Health Monitoring",
    category: "Software",
    description:
      "Real-time water quality monitoring with AI analysis and sensor integration. Includes chatbot support and live dashboard for insights.",
    rating: "Rating: ⭐⭐⭐⭐☆ (4/5)",
    image: client3,
  },
  {
    title: "Road Hazard Detection and Notification",
    category: "Software",
    description:
      "Detects road accidents using AI and IoT, sending instant GPS alerts. Supports emergency response with wearables and a web dashboard.",
    rating: "Rating: ⭐⭐⭐⭐⭐ (5/5)",
    image: client4,
  },
  {
    title: "Smart Waste Management System",
    category: "Software",
    description:
      "Uses sensors to detect and segregate wet and dry waste in tunnels. Sends live data to a dashboard for timely waste collection.",
    rating: "Rating: ⭐⭐⭐⭐☆ (4/5)",
    image: client5,
  },
  {
    title: "Autonomous Follower Robot Van",
    category: "Hardware",
    description:
      "Obstacle-avoiding robot van that follows users for military logistics. Ensures hands-free load transport in rugged terrains using sensors.",
    rating: "Rating: ⭐⭐⭐⭐⭐ (5/5)",
    image: client6,
  },
];

const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    // Get the first project card to determine its actual rendered width and margin
    const firstCard = container.querySelector(".project-card") as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const cardStyle = window.getComputedStyle(firstCard);
    const cardMarginRight = parseFloat(cardStyle.marginRight) || 0;

    // The scroll amount is one card's width plus its right margin (which acts as the gap)
    const scrollAmount = cardWidth + cardMarginRight;

    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });

    // Loop back to start/end for infinite scroll effect
    // Add a small tolerance (e.g., 1px) for floating point inaccuracies
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else if (container.scrollLeft <= 1 && direction === "left") {
      container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="projects-section-wrapper">
      <h2 className="section-title3">
        <span style={{ color: "#00fff2" }}> Projects </span> Delivered Through ProJenius
      </h2>
      <div className="arrow-button left" onClick={() => scroll("left")}>
        <FaChevronLeft />
      </div>
      <div className="arrow-button right" onClick={() => scroll("right")}>
        <FaChevronRight />
      </div>
      <div className="project-scroll-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-inner">
              <div className="project-card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-front-label">
                  <span>
                    <span style={{ color: "#00fff2" }}>Project</span> Showcase {index + 1}
                  </span>
                </div>
              </div>
              <div className="project-card-back">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="category">Category: {project.category}</p>
                  <p>{project.description}</p>
                  <p>{project.rating}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
