import React, { useState } from 'react';
import frameIcon from '../assets/images/Frame.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return React.createElement(
    'header',
    { className: 'sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full' },
    React.createElement(
      'nav',
      { className: 'w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-4' },
      [
  // logo
  React.createElement('a', { key: 'logo', href: '#home', className: 'text-xl md:text-2xl font-black tracking-wide', style: { color: '#000000' } }, 'MyProfile'),

        // desktop menu (hidden on small)
        React.createElement(
          'div',
          { key: 'menu-desktop', className: 'hidden md:flex space-x-6 lg:space-x-10 items-center text-sm font-medium' },
          navLinks.map(link =>
            React.createElement(
              'a',
              { key: link.name, href: link.href, className: 'text-hover-effect', style: { color: '#000000' } },
              link.name
            )
          )
        ),

        // right side
        React.createElement(
          'div',
          { key: 'right', className: 'flex items-center gap-2' },
          [
            React.createElement(
              'button',
              {
                key: 'hire',
                className:
                  'bg-gradient-to-r from-[#7755FF] to-[#FF6480] text-white text-sm font-medium px-4 md:px-6 py-2 md:py-2.5 rounded-lg shadow-md hover:opacity-90 transition flex items-center gap-2',
                style: { height: 'auto' },
              },
              React.createElement('img', { src: frameIcon, alt: 'plane', className: 'w-4 h-4', key: 'icon' }),
              React.createElement('span', { className: 'hidden sm:inline', key: 'hire-text' }, ' Hire Me')
            ),

            // mobile menu toggle
            React.createElement(
              'button',
              {
                key: 'toggle',
                onClick: () => setOpen(prev => !prev),
                'aria-expanded': open,
                className: 'md:hidden ml-2 text-hover-effect p-2',
                style: { color: '#000000' },
              },
              React.createElement(
                'svg',
                {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '24',
                  height: '24',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                },
                [
                  React.createElement('line', { key: 'l1', x1: '4', x2: '20', y1: '12', y2: '12' }),
                  React.createElement('line', { key: 'l2', x1: '4', x2: '20', y1: '6', y2: '6' }),
                  React.createElement('line', { key: 'l3', x1: '4', x2: '20', y1: '18', y2: '18' }),
                ]
              )
            ),
          ]
        ),
      ]
    ),

    // mobile collapsible
        React.createElement(
      'div',
      { className: `md:hidden ${open ? 'block' : 'hidden'} px-4 pb-4`, key: 'mobile-menu' },
      React.createElement(
        'div',
        { className: 'flex flex-col space-y-2' },
        navLinks.map(link => React.createElement('a', { key: link.name, href: link.href, className: 'text-hover-effect py-2', style: { color: '#000000' } }, link.name))
      )
    )
  );
};

export default Navbar;
