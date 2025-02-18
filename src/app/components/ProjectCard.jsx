import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
   <div className="services-grid flex flex-col md:flex-row md:flex-wrap md:justify-between md:gap-5">
  <div className="service-card group transition-all duration-300 w-full md:w-[calc(50%-20px)]">
    {/* Image Block */}
    <div className="service-image">
      <img src={imgUrl} alt={title} className="w-full h-52 md:h-72 rounded-t-xl object-cover" />
    </div>

    {/* Content */}
    <div className="service-content bg-[#181818] text-white p-6 rounded-b-xl flex flex-col justify-between">
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="text-[#ADB7BE] text-sm overflow-hidden"
         style={{
           display: '-webkit-box',
           WebkitBoxOrient: 'vertical',
           WebkitLineClamp: 5,
           lineHeight: '1.4em',
         }}>
        {description}
      </p>
    </div>
  </div>
</div>
    
    
  );
};

export default ProjectCard;
