import React from 'react';
import profileImage from '../assets/images/my_profile.jpeg';

// Import social media icons dari folder assets
import igIcon from "../assets/images/ig.png";
import githubIcon from "../assets/images/github.png";
import dribbleIcon from "../assets/images/dribble.png";
import linkedinIcon from "../assets/images/linkedin.png";

const ProfileCard = () => {
  return React.createElement(
    'section',
    {
      // Make full-viewport height only on md+ screens to avoid very tall mobile layout
      className: "md:min-h-screen w-full bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF] pt-16 md:pt-28 pb-16 md:pb-40 flex flex-col items-center justify-center"
    },
    // Catatan responsivitas: Tailwind mobile-first. Gunakan sm:, md:, lg: untuk rules di atas breakpoint.
    React.createElement(
      'div',
      { className: "max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-6 sm:px-12 md:px-20 gap-x-24 gap-y-8 lg:gap-y-0" },
      [
        // kiri
        React.createElement(
          'div',
          { className: "w-full lg:w-1/2 max-w-2xl text-left", key: "left" },
          [
            // small intro text: use Figma purple and Poppins (font-weight 700 / bold)
            React.createElement('p', { className: "text-[#7755FF] mb-2 font-bold text-sm", key: "intro" }, "Hello, I'm Sofia Nugraheni"),
            React.createElement(
              'h1',
              { className: "text-[#1E1E2F] font-black text-5xl lg:text-6xl leading-[1.05] mb-6", key: "title" },
              [
                React.createElement('span', { key: 'line1', className: 'block' }, "Creative Designer &"),
                React.createElement('span', { key: 'line2', className: 'block mt-2' }, "Frontend Developer")
              ]
            ),
            React.createElement(
              'p',
              { className: "text-gray-600 mb-8 leading-relaxed max-w-lg", key: "desc" },
              "Passionate about creating engaging user interfaces and intuitive user experiences. Combining visual aesthetics with functionality to deliver effective and meaningful digital solutions."
            ),
            React.createElement(
              'div',
              { className: "flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4", key: "buttons" },
              [
                React.createElement(
                  'button',
                  {
                    key: "work-btn",
                    className: "bg-gradient-to-r from-[#7755FF] to-[#FF6480] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-md hover:opacity-90 transition",
                    style: { height: 'auto' }
                  },
                  "See My Work"
                ),
                React.createElement(
                  'button',
                  {
                    key: "contact-btn",
                    className: "bg-white text-[#7755FF] border border-[#7755FF] px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-sm hover:bg-[#7755FF] hover:text-white transition",
                    style: { height: 'auto' }
                  },
                  "Contact Me"
                )
              ]
            ),
            React.createElement(
              'div',
              { className: "flex space-x-4 mt-4", key: "social" },
              [
                // Instagram
                React.createElement(
                  'a',
                  {
                    key: "ig",
                    href: "https://instagram.com/username",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition"
                  },
                  React.createElement('img', {
                    src: igIcon,
                    alt: "Instagram",
                    className: "w-8 h-8"
                  })
                ),
                // GitHub
                React.createElement(
                  'a',
                  {
                    key: "github",
                    href: "https://github.com/username",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition"
                  },
                  React.createElement('img', {
                    src: githubIcon,
                    alt: "GitHub",
                    className: "w-8 h-8"
                  })
                ),
                // Dribbble
                React.createElement(
                  'a',
                  {
                    key: "dribbble",
                    href: "https://dribbble.com/username",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition"
                  },
                  React.createElement('img', {
                    src: dribbleIcon,
                    alt: "Dribbble",
                    className: "w-8 h-8"
                  })
                ),
                // LinkedIn
                React.createElement(
                  'a',
                  {
                    key: "linkedin",
                    href: "https://linkedin.com/in/username",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition"
                  },
                  React.createElement('img', {
                    src: linkedinIcon,
                    alt: "LinkedIn",
                    className: "w-8 h-8"
                  })
                )
              ]
            )
          ]
        ),
        // kanan
        React.createElement(
          'div',
          { className: "w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0", key: "right" },
          React.createElement(
            'div',
            { className: "relative overflow-visible" },
            [
              // decorative gradient circle matching Figma inspect: linear gradient inside a 192x192 circle, 20% opacity, offset -24px
              React.createElement('div', {
                key: "circle",
                className: "absolute -top-6 -left-6 w-48 h-48 rounded-full z-0 pointer-events-none",
                style: {
                  background: 'linear-gradient(135deg, #FF54B0 0%, #7755FF 50%, #FFE978 100%)',
                  opacity: 0.2
                },
                'aria-hidden': true
              }),
              React.createElement('img', {
                key: "profile",
                src: profileImage,
                alt: "Profile",
                className: "relative z-10 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-8 border-white shadow-xl"
              })
            ]
          )
        )
      ]
    )
  );
};

export default ProfileCard;