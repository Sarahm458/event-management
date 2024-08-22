import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-green-600 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} Events, All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
