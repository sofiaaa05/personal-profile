import React from "react";
import myProfile from "../assets/images/my_profile.jpeg";
import frameIcon from "../assets/images/Frame.svg";

function AboutSection() {
  return React.createElement(
    "section",
    { id: "about", className: "py-16 bg-gradient-to-b from-white to-purple-50" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10 font-sans", style: { fontFamily: "Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif" } },

      React.createElement(
        "div",
        { className: "w-full md:w-1/2 flex justify-center md:justify-end" },
        React.createElement("img", {
          src: myProfile,
          alt: "Profile",
          className: "w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300",
        })
      ),

      React.createElement(
        "div",
        { className: "w-full md:w-1/2 max-w-md md:max-w-xl border border-[#E5E7EB] rounded-xl p-6 sm:p-8 bg-white shadow-sm text-center md:text-left" },
        React.createElement(
          "h2",
          { className: "text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#1F1F1F] mb-4" },
          "About Me"
        ),
        React.createElement(
          "p",
          { className: "text-[#6B7280] text-base sm:text-lg md:text-lg leading-7 mb-6" },
          "Hi! I'm Sofia Nugraheni, an Information Systems student at Universitas Negeri Surabaya with a passion for UI/UX design. Through the Web Development and UI/UX bootcamp at Celerates, I’ve learned how to combine aesthetic design with an intuitive user experience."
        ),
        React.createElement(
          "div",
          { className: "flex flex-wrap justify-center md:justify-start gap-2 mb-6" },
          React.createElement(
            "span",
            { className: "bg-[#F0E7FF] text-[#7755FF] text-sm sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm", style: { color: '#7755FF' } },
            "UI/UX Design"
          ),
          React.createElement(
            "span",
            { className: "bg-[#E0EAFE] text-[#7755FF] text-sm sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm", style: { color: '#7755FF' } },
            "Web Development"
          ),
          React.createElement(
            "span",
            { className: "bg-[#E0EAFE] text-[#7755FF] text-sm sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm", style: { color: '#7755FF' } },
            "Branding"
          ),
          React.createElement(
            "span",
            { className: "bg-[#E0EAFE] text-[#7755FF] text-sm sm:text-sm font-semibold px-4 py-2 rounded-full shadow-sm", style: { color: '#7755FF' } },
            "Front End Developer"
          )
        ),
        React.createElement(
          "a",
          {
            href: "#contact",
            className: "inline-flex bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white text-base sm:text-base font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-95 transform transition-all items-center gap-3",
            role: "button",
            style: { color: '#FFFFFF' }
          },
          [
            React.createElement('img', { src: frameIcon, alt: 'plane', className: 'w-5 h-5', key: 'icon' }),
            React.createElement('span', { key: 'text', style: { color: '#FFFFFF' } }, "Let's Connect")
          ]
        )
      )
    )
  );
}

export default AboutSection;
