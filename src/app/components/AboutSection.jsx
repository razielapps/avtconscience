"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "TECHNOLOGIES",
    id: "skills",
    content: (
     <ul className="list-disc pl-2">
        <li>MERN (MongoDB, Express.js, React, Node.js)</li>
        <li>MEAN (MongoDB, Express.js, Angular, Node.js)</li>
        <li>LAMP (Linux, Apache, MySQL, PHP)</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>PHP</li>
        <li>Django</li>
        <li>Laravel</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>Firebase</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>WordPress</li>
        <li>Shopify</li>
        <li>WooCommerce</li>
        <li>Magento</li>
        <li>Selenium</li>
        <li>Scrapy</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Excel</li>
        <li>Google Sheets</li>
        <li>Power BI</li>
        <li>Tableau</li>
        <li>Matplotlib</li>
        <li>Seaborn</li>
        <li>Zapier</li>
        <li>Google Analytics</li>
        <li>Google Tag Manager</li>
        <li>WordPress SEO</li>
        <li>Core Web Vitals</li>
        <li>Gmail API</li>
        <li>Python scripts</li>
        <li>HubSpot</li>
        <li>Salesforce</li>
        <li>Zoho</li>
        <li>Dialogflow</li>
        <li>ChatGPT API</li>
        <li>ManyChat</li>
        <li>AI Automation Tools</li>
</ul>
    ),
  },
  {
    title: "Projects",
    id: "projects",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://lenslight1.netlify.app/">Lenslight</a></li>
        <li><a href="https://drgc.netlify.app/">CHURCH WEBSITE</a></li>
        <li><a href="https://urbanedge1.netlify.app/">Urban Edge</a></li>
        <li><a href="https://beauty-blogx.netlify.app/">BEAUTY</a></li>
        <li><a href="https://edoorphan.netlify.app/">NON PROFIT</a></li>
        <li><a href="https://pixelforge1.netlify.app/">Pixelforge</a></li>
        <li><a href="https://e-town.netlify.app/">REAL ESTATE</a></li>
        <li><a href="https://ecopack09.netlify.app/">Ecopack Start Up</a></li>
        <li><a href="https://laundry-s.netlify.app/">LAUNDRY S</a></li>
        <li><a href="https://serenemind1.netlify.app/">Serene Mind</a></li>
        <li><a href="https://reg-closer.netlify.app/">SCHOOL A</a></li>
        <li><a href="https://m-home.netlify.app/">RELOCATION S</a></li>
        <li><a href="https://fab-x.netlify.app/">INDUSTRIAL CO</a></li>
        <li><a href="https://nexusdigital1.netlify.app/">Nexus Digital</a></li>
        <li><a href="https://wordsmith1.netlify.app/">Wordsmith Copywriter</a></li>
        <li><a href="https://greenfarm1.netlify.app/">Green Varley Farm</a></li>
        <li><a href="https://music-x.netlify.app/">MUSIC SITE</a></li>
        <li><a href="https://aitutorx1.netlify.app/">Aitutorx Platform</a></li>
        <li><a href="https://land-real-estate.netlify.app/">REAL ESTATE</a></li>
        <li><a href="https://teaser-real-estate.netlify.app/">REAL ESTATE</a></li>
        <li><a href="https://eliteshine.netlify.app/">EliteShine Car Wash</a></li>
        <li><a href="https://laundry-s.netlify.app/">LAUNDRY S</a></li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
         <li>CS50 Introduction to Computer Science</li>
          <li>CS50 Web Development with Python & Javascript</li>
           <li>Full-Stack Web Development with React & Django REST Framework</li>
            <li>Full-Stack Web Development with Nextjs & Django REST Framework</li>
            <li>Mastering MEAN Stack</li>
            <li>Mastering MERN Stack</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-4 items-center py-4 px-4 sm:py-6 sm:px-6 xl:gap-8 xl:px-10">
        <img className="imgabt" src="/images/about-image.png" width={500} height={500} alt='logo'/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
 <p class="text-base lg:text-lg">
    Technology has always been more than just a career for me—it’s a passion, a journey, and a way to bring ideas to life. 
    From my earliest days of coding to crafting digital solutions, my work represents my dedication, resilience, 
    and the determination to keep going despite the obstacles I’ve faced along the way.
</p>
<br/>

<p class="text-base lg:text-lg">
    My path into tech wasn’t conventional. It has been shaped by setbacks, struggles, and an unwavering curiosity to solve problems. 
    I didn’t choose this field for quick success—I embraced it for the challenge, creativity, and the deep belief in the meaningful impact 
    technology can have, not just on businesses, but on life itself.
</p>
<br/>

<p class="text-base lg:text-lg">
    As an <strong>autodidactic versatile technologist</strong>, I’m proud to say that I’ve learned from every challenge and failure, 
    continuously working to improve my craft. Whether it’s <strong>Web Development, API Development, Data Sourcing & Processing, Digital Content Creation, or Search Engine Optimization</strong>, 
    I ensure that each project is approached with the commitment to deliver quality, but also the understanding that growth comes with learning from every experience.
</p>
<br/>

<p class="text-base lg:text-lg">
    Beyond development, I believe in the power of sharing knowledge and uplifting others. That’s why I offer coaching and consultation services—whether you’re transitioning into tech, 
    planning your next career move, or striving to achieve ambitious goals, I’m here to support you, just as I continue to support myself through my journey.
</p>
<br/>

<p class="text-base lg:text-lg">
    With a deep love for coding, problem-solving, and innovation, I leverage modern technologies to transform ideas into reality. 
    Prioritizing usability, security, and performance, I approach every project not just with a mindset of excellence, but with a continuous drive to better myself and help others along the way. 
    Let’s build something meaningful together!
</p>
     <br/>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
             SKills{" "}
            </TabButton >
       
            
             <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>

            <TabButton 
            	selectTab={() => handleTabChange("projects")} active={tab === "projects"}>
				{" "}
				Projects{" "}
            </TabButton>
            
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
