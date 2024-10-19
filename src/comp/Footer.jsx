import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Site Name */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-white text-3xl font-bold">
              MoviesWeb
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a href="#" className="hover:text-white transition duration-300">Home</a>
            <a href="#" className="hover:text-white transition duration-300">Movies</a>
            <a href="#" className="hover:text-white transition duration-300">TV Shows</a>
            <a href="#" className="hover:text-white transition duration-300">Trending</a>
            <a href="#" className="hover:text-white transition duration-300">Contact</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM7.2 12c0 2.64 2.16 4.8 4.8 4.8s4.8-2.16 4.8-4.8S14.64 7.2 12 7.2 7.2 9.36 7.2 12zm10.56 0c0 3.12-2.52 5.76-5.76 5.76S6.24 15.12 6.24 12c0-3.12 2.52-5.76 5.76-5.76s5.76 2.64 5.76 5.76zm1.2-6.72c0 .96-.78 1.8-1.8 1.8H18c-.96 0-1.8-.84-1.8-1.8v-.12c0-.96.84-1.8 1.8-1.8h.12c1.02 0 1.8.84 1.8 1.8z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM7.2 12c0 2.64 2.16 4.8 4.8 4.8s4.8-2.16 4.8-4.8S14.64 7.2 12 7.2 7.2 9.36 7.2 12zm10.56 0c0 3.12-2.52 5.76-5.76 5.76S6.24 15.12 6.24 12c0-3.12 2.52-5.76 5.76-5.76s5.76 2.64 5.76 5.76zm1.2-6.72c0 .96-.78 1.8-1.8 1.8H18c-.96 0-1.8-.84-1.8-1.8v-.12c0-.96.84-1.8 1.8-1.8h.12c1.02 0 1.8.84 1.8 1.8z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 5.924a8.5 8.5 0 01-2.5.694 4.336 4.336 0 001.88-2.385 8.7 8.7 0 01-2.734 1.04A4.289 4.289 0 0016.618 4a4.29 4.29 0 00-4.292 4.292c0 .336.042.67.116.992A12.165 12.165 0 013 5.243a4.256 4.256 0 001.326 5.714 4.255 4.255 0 01-1.944-.536v.048a4.293 4.293 0 003.444 4.2 4.338 4.338 0 01-1.94.074 4.31 4.31 0 004.024 3.007 8.606 8.606 0 01-5.314 1.827A12.128 12.128 0 0012.126 21c8.32 0 12.876-6.894 12.876-12.876 0-.197-.004-.394-.012-.59a9.072 9.072 0 002.233-2.312z"></path>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.5 3.5v17l-5.25-5.25h-11a2.25 2.25 0 01-2.25-2.25v-5.25a2.25 2.25 0 012.25-2.25h11l5.25-5.25zm-7.5 12.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
            </svg>
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 MoviesWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
