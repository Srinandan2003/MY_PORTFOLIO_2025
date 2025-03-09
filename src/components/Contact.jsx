import React, { useState } from "react";
import { CONTACT } from "../constants";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const isFormValid = () => {
    return formData.name.trim() !== "" && 
           formData.email.trim() !== "" && 
           formData.message.trim() !== "" &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isFormValid()) return;
    
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });
    try {
      const response = await fetch('https://formspree.io/f/mblgrnzb', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" }
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <section id="contact" className="bg-transparent py-12 md:py-20 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-100 relative">
          Get in Touch
          <span className="block w-16 md:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-4 md:mt-6"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form - Moved to first position for better visibility on navigation */}
          <div className="backdrop-blur-lg bg-gradient-to-b from-gray-900/80 to-gray-800/80 p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-2xl order-1">
            <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-5 md:mb-6 border-b border-gray-700/50 pb-3 md:pb-4">Send Me a Message</h3>
            
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="group">
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-indigo-300 mb-1 md:mb-2">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 md:px-5 md:py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all duration-300 shadow-md text-sm md:text-base"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-indigo-300 mb-1 md:mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 md:px-5 md:py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all duration-300 shadow-md text-sm md:text-base"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="group">
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-indigo-300 mb-1 md:mb-2">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 md:px-5 md:py-3 bg-gray-800/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none text-white placeholder-gray-400 transition-all duration-300 shadow-md text-sm md:text-base"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
              </div>
              
              {/* Form Status Message */}
              {status.info.msg && (
                <div className={`text-xs md:text-sm py-2 md:py-3 px-3 md:px-4 rounded-lg ${status.info.error ? 'bg-red-900/80 text-red-200 border border-red-700/50' : 'bg-green-900/80 text-green-200 border border-green-700/50'} shadow-md`}>
                  <div className="flex items-center">
                    {status.info.error ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                    {status.info.msg}
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 font-medium disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 shadow-lg text-sm md:text-base mt-2 md:mt-4"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Info - Moved to second position */}
          <div className="space-y-6 md:space-y-8 md:pl-6 lg:pl-12 order-2">
            <div className="backdrop-blur-lg bg-gradient-to-r from-gray-900/70 to-gray-800/70 p-6 md:p-8 rounded-xl border border-gray-700/50 shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-4 md:mb-6 border-b border-gray-700/50 pb-3 md:pb-4">Contact Information</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-2 md:p-3 rounded-full shadow-md flex-shrink-0">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-medium text-indigo-300">Location</h3>
                    <p className="text-sm md:text-base text-gray-200 font-light mt-1">{CONTACT.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-2 md:p-3 rounded-full shadow-md flex-shrink-0">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-medium text-indigo-300">Phone</h3>
                    <p className="text-sm md:text-base text-gray-200 font-light mt-1">{CONTACT.phoneNo}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-2 md:p-3 rounded-full shadow-md flex-shrink-0">
                    <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-medium text-indigo-300">Email</h3>
                    <a href={`mailto:${CONTACT.email}`} className="text-sm md:text-base text-gray-200 font-light mt-1 hover:text-indigo-300 transition-colors duration-300 block">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="mt-8 pt-4 md:pt-6 border-t border-gray-700/50">
                <h3 className="text-xs md:text-sm font-medium text-indigo-300 mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/srinandan-m-n-b55bab321" target="_blank" rel="noopener noreferrer" className="bg-gray-800 bg-opacity-70 p-2 md:p-3 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://github.com/Srinandan2003" target="_blank" rel="noopener noreferrer" className="bg-gray-800 bg-opacity-70 p-2 md:p-3 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:-translate-y-1 shadow-md">
                    <svg className="h-4 w-4 md:h-5 md:w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;