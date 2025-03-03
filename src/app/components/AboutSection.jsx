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
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          ⭐⭐⭐⭐⭐
          <br/> I worked with this team on a custom web development project, and they exceeded my expectations. The delivery was on time, the site&apos;s functionality is flawless, and their communication throughout the process was exceptional. Highly recommend! -Sarah
</li>
        <li>⭐⭐⭐⭐ <br/>
The coaching session was exactly what I needed to transition into tech. They helped me map out my career path and gave practical advice on improving my skills. I feel so much more confident about my next steps! -David</li>
<li>⭐⭐⭐⭐⭐
<br/>
Their SEO services were a game changer for my business. My website&apos;s traffic has doubled within a few months, and I&apos;m now getting more leads than ever. Great work from a dedicated team! -Priya
</li>
<li>⭐⭐⭐⭐⭐
<br/>
This team is simply amazing. Their passion for tech really shows in their work. They created a beautiful and user-friendly website for my brand and provided excellent support afterward. I couldn&apos;t be happier! -Sofia</li>
<li>⭐⭐⭐⭐⭐
<br/>
Fast, reliable, and highly skilled! They built a custom API for my business that works seamlessly with my existing systems. The whole process was smooth, and I&apos;m thrilled with the result! -Micheal</li>
<li>⭐⭐⭐⭐
<br/>
The consultation session gave me clarity on the tech space and helped me decide on a strategy for my startup. The team is knowledgeable and patient, addressing all my questions. Highly professional! -Jacob</li>
<li>⭐⭐⭐⭐⭐
<br/>
I appreciated how they turned my vague idea into a fully functional and optimized app. The attention to detail and focus on security and performance were impressive. I&apos;ll definitely work with them again for future projects. -Elena</li>

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
