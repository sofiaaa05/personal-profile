import React from "react";
import gameImg from "../assets/images/game.png";
import mobileappImg from "../assets/images/mobileapp.png";
import smartwatchImg from "../assets/images/smartwatch.png";
import logoPorto from "../assets/images/logoporto.png";

function PortfolioSection() {
  const portfolios = [
    {
      image: gameImg,
      title: "Web Game Crosswords",
      desc: "HTML, CSS, JavaScript, PHP, mySQL, Full Stack Development",
      tag: "Web Game",
      bg: "bg-purple-100",
    },
    {
      image: mobileappImg,
      title: "Genovate Mobile App UI/UX Design",
      desc: "UI/UX Design, Branding",
      tag: "Mobile App",
      bg: "bg-pink-100",
    },
    {
      image: smartwatchImg,
      title: "MomsWatch Smartwatch UI/UX Design",
      desc: "UI/UX Design, Branding",
      tag: "Smartwatch",
      bg: "bg-yellow-100",
    },
  ];

  return React.createElement(
    "section",
    {
      id: "portfolio",
      className:
        "py-20 px-6 md:px-20 bg-gradient-to-b from-white to-pink-50 text-center",
      style: { fontFamily: "Poppins, system-ui, Avenir, Helvetica, Arial, sans-serif" },
    },
    React.createElement(
      "h2",
      {
        className: "text-3xl md:text-4xl font-extrabold text-[#1F1F1F] mb-12",
      },
      "Portfolio"
    ),

    // Grid Portfolio
    React.createElement(
      "div",
      {
        className:
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center",
      },
      portfolios.map((item, i) =>
        React.createElement(
          "div",
          {
            key: i,
            className:
              "w-full max-w-xs md:w-80 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300",
          },
          // Bagian gambar
          React.createElement(
            "div",
            { className: "relative" },
            React.createElement("img", {
              src: item.image,
              alt: item.title,
              className: "w-full h-40 md:h-48 lg:h-56 object-cover",
            }),
            // Tag
            React.createElement(
              "span",
              {
                className:
                  "absolute top-3 right-3 text-xs font-semibold bg-white text-[#1F1F1F] py-1 px-3 rounded-full shadow-sm",
              },
              item.tag
            )
          ),
          // Bagian teks
          React.createElement(
            "div",
            { className: "p-5 text-left" },
            React.createElement(
              "h3",
              { className: "text-lg font-bold text-[#1F1F1F] mb-1" },
              item.title
            ),
            React.createElement(
              "p",
              { className: "text-sm text-gray-500" },
              item.desc
            )
          )
        )
      )
    ),

    // Tombol
    React.createElement(
      "div",
      { className: "mt-12 flex justify-center" },
      React.createElement(
        "a",
        {
          href: "https://dribbble.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className:
            "inline-flex items-center justify-center gap-3 w-[220px] h-[48px] bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white font-semibold rounded-full shadow-lg hover:opacity-95 transform transition-all",
          role: "button",
        },
        [
          React.createElement("img", {
            src: logoPorto,
            alt: "dribbble",
            className: "w-5 h-5",
            key: "icon",
          }),
          React.createElement(
            "span",
            { key: "text", style: { color: "#FFFFFF" } },
            "More on Dribbble"
          ),
        ]
      )
    )
  );
}

export default PortfolioSection;
