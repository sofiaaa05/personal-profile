import React, { useState } from "react";

// Import images dari folder assets
import igIcon from "../assets/images/ig.png";
import githubIcon from "../assets/images/github.png";
import dribbleIcon from "../assets/images/dribble.png";
import linkedinIcon from "../assets/images/linkedin.png";
import phoneIcon from "../assets/images/phone.png";
import pesanIcon from "../assets/images/pesan.png";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return React.createElement(
    "section",
    { 
      className: "py-20 px-6 md:px-20 bg-[#F0E7FF] text-gray-800", 
      id: "contact",
      style: { fontFamily: 'Poppins, sans-serif' }
    },
    [
      React.createElement(
        "h2",
        { key: "title", className: "text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4 text-center", style: { fontFamily: 'Poppins, sans-serif' } },
        "Contact Me"
      ),
      
      React.createElement(
        "p",
        { key: "desc", className: "text-gray-600 mb-12 max-w-2xl mx-auto text-center", style: { fontFamily: 'Poppins, sans-serif' } },
        "Interested working together? Let's talk about your project and make something amazing!"
      ),

      React.createElement(
        "div",
        {
          className: "max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12",
          key: "container",
        },
        [
          React.createElement(
            "div",
            { className: "w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start", key: "info" },
            [
              // Email dengan icon pesan.png
              React.createElement(
                "div",
                { className: "flex items-center gap-4 text-gray-700", key: "email" },
                [
                  React.createElement("img", { 
                    src: pesanIcon, 
                    alt: "Email", 
                    className: "w-6 h-6",
                    key: "icon1" 
                  }),
                  React.createElement("span", { key: "text1", className: "text-base", style: { fontFamily: 'Poppins, sans-serif' } }, "sofianugraheni05@email.com")
                ]
              ),
              
              // Phone dengan icon phone.png
              React.createElement(
                "div",
                { className: "flex items-center gap-4 text-gray-700", key: "phone" },
                [
                  React.createElement("img", { 
                    src: phoneIcon, 
                    alt: "Phone", 
                    className: "w-6 h-6",
                    key: "icon2" 
                  }),
                  React.createElement("span", { key: "text2", className: "text-base", style: { fontFamily: 'Poppins, sans-serif' } }, "+62 857-0895-9489")
                ]
              ),
              
              // Social Media Icons - Logo Only
              React.createElement(
                "div",
                { className: "flex items-center gap-4 mt-2", key: "social" },
                [
                  // Instagram
                  React.createElement(
                    "a",
                    { 
                      href: "https://instagram.com", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      className: "hover:opacity-80 transition-opacity",
                      key: "ig-link"
                    },
                    React.createElement("img", { 
                      src: igIcon, 
                      alt: "Instagram", 
                      className: "w-6 h-6"
                    })
                  ),
                  
                  // GitHub
                  React.createElement(
                    "a",
                    { 
                      href: "https://github.com", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      className: "hover:opacity-80 transition-opacity",
                      key: "github-link"
                    },
                    React.createElement("img", { 
                      src: githubIcon, 
                      alt: "GitHub", 
                      className: "w-6 h-6"
                    })
                  ),
                  
                  // Dribbble
                  React.createElement(
                    "a",
                    { 
                      href: "https://dribbble.com", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      className: "hover:opacity-80 transition-opacity",
                      key: "dribbble-link"
                    },
                    React.createElement("img", { 
                      src: dribbleIcon, 
                      alt: "Dribbble", 
                      className: "w-6 h-6"
                    })
                  ),
                  
                  // LinkedIn
                  React.createElement(
                    "a",
                    { 
                      href: "https://linkedin.com", 
                      target: "_blank", 
                      rel: "noopener noreferrer",
                      className: "hover:opacity-80 transition-opacity",
                      key: "linkedin-link"
                    },
                    React.createElement("img", { 
                      src: linkedinIcon, 
                      alt: "LinkedIn", 
                      className: "w-6 h-6"
                    })
                  )
                ]
              )
            ]
          ),

          React.createElement(
            "div",
            { className: "w-full md:w-1/2 flex justify-center md:justify-end", key: "form-wrapper" },
            React.createElement(
              "div",
              { className: "bg-white rounded-2xl p-8 shadow-lg w-full max-w-md" },
              [
                // Name Field
                React.createElement("div", { className: "mb-4", key: "name-group" }, [
                  React.createElement("label", { 
                    key: "label-name", 
                    htmlFor: "name", 
                    className: "block text-sm font-semibold mb-2 text-gray-800 text-left",
                    style: { fontFamily: 'Poppins, sans-serif' }
                  }, "Name"),
                  React.createElement("input", {
                    id: "name",
                    key: "name-input",
                    type: "text",
                    name: "name",
                    placeholder: "Your Name",
                    value: formData.name,
                    onChange: handleChange,
                    style: { fontFamily: 'Poppins, sans-serif' },
                    className: "w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7755FF] focus:border-transparent"
                  }),
                  errors.name && React.createElement("span", { 
                    className: "text-sm text-red-500 mt-1 block text-left",
                    style: { fontFamily: 'Poppins, sans-serif' },
                    key: "err-name" 
                  }, errors.name)
                ]),

                // Email Field
                React.createElement("div", { className: "mb-4", key: "email-group" }, [
                  React.createElement("label", { 
                    key: "label-email", 
                    htmlFor: "email", 
                    className: "block text-sm font-semibold mb-2 text-gray-800 text-left",
                    style: { fontFamily: 'Poppins, sans-serif' }
                  }, "Email"),
                  React.createElement("input", {
                    id: "email",
                    key: "email-input",
                    type: "email",
                    name: "email",
                    placeholder: "you@email.com",
                    value: formData.email,
                    onChange: handleChange,
                    style: { fontFamily: 'Poppins, sans-serif' },
                    className: "w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7755FF] focus:border-transparent"
                  }),
                  errors.email && React.createElement("span", { 
                    className: "text-sm text-red-500 mt-1 block text-left",
                    style: { fontFamily: 'Poppins, sans-serif' },
                    key: "err-email" 
                  }, errors.email)
                ]),

                // Message Field
                React.createElement("div", { className: "mb-6", key: "message-group" }, [
                  React.createElement("label", { 
                    key: "label-message", 
                    htmlFor: "message", 
                    className: "block text-sm font-semibold mb-2 text-gray-800 text-left",
                    style: { fontFamily: 'Poppins, sans-serif' }
                  }, "Message"),
                  React.createElement("textarea", {
                    id: "message",
                    key: "message-input",
                    name: "message",
                    placeholder: "Type your message...",
                    value: formData.message,
                    onChange: handleChange,
                    style: { fontFamily: 'Poppins, sans-serif' },
                    className: "w-full border border-gray-300 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#7755FF] focus:border-transparent"
                  }),
                  errors.message && React.createElement("span", { 
                    className: "text-sm text-red-500 mt-1 block text-left",
                    style: { fontFamily: 'Poppins, sans-serif' },
                    key: "err-message" 
                  }, errors.message)
                ]),

                // Submit Button
                React.createElement(
                  "button",
                  { 
                    type: "button",
                    onClick: handleSubmit,
                    key: "btn",
                    style: { fontFamily: 'Poppins, sans-serif' },
                    className: "w-full bg-gradient-to-r from-[#7755FF] to-[#FF6480] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" 
                  },
                  "Send Message"
                )
              ]
            )
          )
        ]
      )
    ]
  );
}

export default ContactSection;