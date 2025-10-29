import React from "react";

function Footer() {
  
  return React.createElement(
    "footer",
    { className: "bg-white border-t border-gray-200" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-center" },
      React.createElement("p", {
        className: "text-gray-500 text-sm",
        dangerouslySetInnerHTML: { __html: "© 2025 Sofia Nugraheni. Crafted with &hearts; in Surabaya." }
      })
    )
  );
}

export default Footer; 
