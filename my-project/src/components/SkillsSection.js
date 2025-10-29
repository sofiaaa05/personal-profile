import React from "react";
import { Paintbrush, Code2, PenTool, Zap } from "lucide-react";

function SkillsSection() {
  const skills = [
    {
      icon: React.createElement(Paintbrush, { className: "w-8 h-8 text-pink-500 mb-3" }),
      title: "UI/UX Design",
      desc: "Figma",
      bg: "bg-[#F0E7FF]",
      border: "border-[#E5E7EB]",
    },
    {
      icon: React.createElement(Code2, { className: "w-8 h-8 text-indigo-500 mb-3" }),
      title: "Web Development",
      desc: "React, Bootstrap, Tailwind",
      bg: "bg-[#E0EAFE]",
      border: "border-[#E5E7EB]",
    },
    {
      icon: React.createElement(PenTool, { className: "w-8 h-8 text-yellow-500 mb-3" }),
      title: "Branding",
      desc: "Logo, Identity",
      bg: "bg-[#FFE978]",
      border: "border-[#E5E7EB]",
    },
    {
      icon: React.createElement(Zap, { className: "w-8 h-8 text-purple-500 mb-3" }),
      title: "Front End Developer",
      desc: "PostgreSQL, Node.js, REST API, React, CSS, HTML",
      bg: "bg-[#E0EAFE]",
      border: "border-[#E5E7EB]",
    },
  ];

  return React.createElement(
    "section",
    {
      id: "skills",
      className:
        "py-20 px-6 md:px-20 bg-gradient-to-b from-white to-purple-50 text-center",
    },
    // Judul
    React.createElement(
      "h2",
      {
        className: "text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-12",
      },
      "My Skills"
    ),

    // Grid Card (mobile-first): 1 col mobile, 2 cols small, 3 cols md, 4 cols lg
    React.createElement(
      "div",
      {
        className:
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center",
      },
      skills.map((skill, i) =>
        React.createElement(
          "div",
          {
            key: i,
            // make card fluid on mobile (full width up to a max), fixed width on md+
            className: `w-full max-w-xs md:w-60 min-h-[10rem] p-6 ${skill.bg} ${skill.border} border rounded-2xl shadow-sm flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300`,
          },
          // icon: ensure responsive sizing - preserve original color class if present
          React.cloneElement(skill.icon, {
            className: `${skill.icon && skill.icon.props && skill.icon.props.className ? skill.icon.props.className + ' ' : ''}w-8 h-8 md:w-10 md:h-10 mb-3`,
          }),
          React.createElement(
            "h3",
            { className: "text-base md:text-lg font-bold text-[#7755FF] mb-1 text-center" },
            skill.title
          ),
          React.createElement(
            "p",
            { className: "text-sm md:text-sm text-gray-500 text-center" },
            skill.desc
          )
        )
      )
    )
  );
}

export default SkillsSection;
