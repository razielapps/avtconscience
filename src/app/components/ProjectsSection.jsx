"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    "id": 1,
    "title": "Full-Stack Web Development (MERN, MEAN, LAMP)",
    "description": "Build dynamic and scalable web applications using modern frameworks and technologies.",
    "image": "/images/projects/1.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 2,
    "title": "Backend Development (Node.js, PHP, Python, Django, Laravel)",
    "description": "Create secure and efficient backend systems to power web applications.",
    "image": "/images/projects/2.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 3,
    "title": "Database Management (SQL, NoSQL, MongoDB, PostgreSQL, Firebase)",
    "description": "Design and optimize relational and non-relational databases for high performance.",
    "image": "/images/projects/3.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 4,
    "title": "eCommerce Development (Shopify, WooCommerce, Magento)",
    "description": "Develop and customize online stores with seamless payment integrations.",
    "image": "/images/projects/4.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 5,
    "title": "WordPress Development & Customization",
    "description": "Build and optimize WordPress websites, themes, and plugins for businesses.",
    "image": "/images/projects/5.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 6,
    "title": "SEO Optimization (WordPress SEO, Core Web Vitals)",
    "description": "Improve website rankings with technical and on-page SEO strategies.",
    "image": "/images/projects/6.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 7,
    "title": "Data Scraping & Automation (Selenium, Scrapy, Python Scripts)",
    "description": "Extract valuable data from websites and automate repetitive tasks.",
    "image": "/images/projects/7.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 8,
    "title": "Data Analysis & Visualization (Pandas, NumPy, Matplotlib, Seaborn, Power BI, Tableau)",
    "description": "Process and visualize data for insights and decision-making.",
    "image": "/images/projects/8.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 9,
    "title": "Google Analytics & Tag Management (GA, GTM)",
    "description": "Track website performance and user behavior with proper analytics setup.",
    "image": "/images/projects/9.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 11,
    "title": "API Development & Integration",
    "description": "Build and integrate APIs to enhance software functionality.",
    "image": "/images/projects/11.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 13,
    "title": "AI Chatbot Development (Dialogflow, ManyChat, ChatGPT API)",
    "description": "Develop AI-powered chatbots for customer support and automation.",
    "image": "/images/projects/13.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 15,
    "title": "Cloud Database & Storage Solutions (Firebase, MongoDB, PostgreSQL)",
    "description": "Implement cloud-based databases for scalable applications.",
    "image": "/images/projects/15.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 17,
    "title": "Performance Optimization (Core Web Vitals, SEO, Page Speed)",
    "description": "Enhance website loading speed, security, and user experience.",
    "image": "/images/projects/17.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 18,
    "title": "Custom Python Scripting for Automation",
    "description": "Develop Python-based automation scripts for various needs.",
    "image": "/images/projects/18.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 19,
    "title": "Web Application Security & Performance Audits",
    "description": "Secure web applications by identifying vulnerabilities and improving efficiency.",
    "image": "/images/projects/19.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 20,
    "title": "Custom Dashboard Development (Power BI, Tableau, Google Sheets, Excel)",
    "description": "Design interactive dashboards for data monitoring and reporting.",
    "image": "/images/projects/20.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 21,
    "title": "Technical Consultancy & Strategy",
    "description": "Provide expert advice on tech stacks, development processes, and digital transformation.",
    "image": "/images/projects/21.png",
    "tag": ["All", "Web"]
  },
  {
    "id": 22,
    "title": "Android App Development",
    "description": "Develop functional Android apps with Java/Kotlin.",
    "image": "/images/projects/22.png",
    "tag": ["All", "Mobile"]
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Services
      </h2>
      
      <ul ref={ref} className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12 p-4 md:p-6">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
