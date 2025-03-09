import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <section className="py-12 md:py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y:-50}}
          transition={{duration:0.6}}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 md:mb-16 text-center"
        >
          Projects
        </motion.h2>
        
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              className="relative"
            >
              {/* Project title with colored accent */}
              <div className="flex items-center mb-4 md:mb-8">
                <div className="w-6 md:w-8 h-0.5 bg-blue-500 mr-3 md:mr-4"></div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{project.title}</h3>
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="ml-3 md:ml-4"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                    <path d="M21 9L21 3L15 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 3L13 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              
              {/* Two column layout with better mobile handling */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">
                {/* Device frame with project image - stacked on mobile, side by side on desktop */}
                <div className="lg:order-1">
                  <div className="relative rounded-lg md:rounded-2xl overflow-hidden bg-blue-900/30 p-1 md:p-2 shadow-xl md:shadow-2xl border border-blue-900/40">
                    <div className="rounded-md md:rounded-xl overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Project details */}
                <div className="lg:order-2 flex flex-col space-y-4 md:space-y-6 mt-4 lg:mt-0">
                  <motion.p 
                    className="text-gray-300 text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Technology stack with icons */}
                  <div className="space-y-3 md:space-y-5">
                    {project.text.map((item, i) => (
                      <motion.div 
                        key={i}
                        className="flex items-start space-x-2 md:space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                      >
                        <div className="text-blue-500 mt-1 flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4">
                            <path d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z" fill="currentColor"/>
                            <path d="M7 11.4L3.6 8L5.2 6.4L7 8.2L10.8 4.4L12.4 6L7 11.4Z" fill="currentColor"/>
                          </svg>
                        </div>
                        <p className="text-sm md:text-base text-gray-400">{item.text}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Tech Stack Pills - Better wrapping and sizing for mobile */}
                  <motion.div 
                    className="flex flex-wrap gap-2 md:gap-3 mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="rounded-full px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm border border-gray-800 bg-gray-900 flex items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + (techIndex * 0.1) }}
                        whileHover={{ scale: 1.05, backgroundColor: "#1e293b" }}
                      >
                        {getTechIcon(tech)}
                        <span className="ml-1 md:ml-2">{tech}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Call to action buttons - More mobile-friendly */}
                  <motion.div 
                    className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-3 md:space-x-4 pt-3 md:pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                  >
                    {project.liveLink && (
                      <motion.a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center justify-center xs:justify-start space-x-2 shadow-lg shadow-blue-500/20 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                          <path d="M13 7H11V13H17V11H13V7Z" fill="currentColor"/>
                        </svg>
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    
                    {project.githubLink && (
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center justify-center xs:justify-start space-x-2 text-sm md:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5">
                          <path d="M12 2.24658C6.475 2.24658 2 6.72158 2 12.2466C2 16.6216 4.8625 20.3091 8.8375 21.6216C9.3375 21.7216 9.525 21.4216 9.525 21.1716C9.525 20.9466 9.5125 20.0966 9.5125 19.2966C7 19.8341 6.35 18.7841 6.15 18.2216C6.0375 17.9466 5.55 17.0966 5.125 16.8716C4.775 16.6966 4.275 16.1591 5.1125 16.1466C5.9 16.1341 6.4625 16.9216 6.65 17.2091C7.55 18.6841 8.9875 18.2591 9.5625 18.0091C9.6625 17.3716 9.9625 16.9341 10.3 16.6841C8.0875 16.4341 5.775 15.5841 5.775 11.8341C5.775 10.7841 6.1625 9.91908 6.675 9.25658C6.5625 9.01908 6.225 7.98408 6.775 6.62158C6.775 6.62158 7.6125 6.37158 9.525 7.74658C10.325 7.53408 11.175 7.42908 12.025 7.42908C12.875 7.42908 13.725 7.53408 14.525 7.74658C16.4375 6.35908 17.275 6.62158 17.275 6.62158C17.825 7.98408 17.4875 9.01908 17.375 9.25658C17.8875 9.91908 18.275 10.7716 18.275 11.8341C18.275 15.5966 15.95 16.4341 13.7375 16.6841C14.15 16.9966 14.5 17.6091 14.5 18.5591C14.5 19.9091 14.4875 20.8466 14.4875 21.1716C14.4875 21.4216 14.675 21.7341 15.175 21.6216C17.1625 20.9591 18.84 19.6216 19.9398 17.8421C21.0397 16.0627 21.4992 13.9716 21.25 11.9091C21.0008 9.84664 20.0581 7.93825 18.5611 6.49119C17.064 5.04413 15.1106 4.14146 13.037 3.91398C10.9634 3.68651 8.86295 4.15077 7.06517 5.23664C5.26739 6.32251 3.88862 7.97549 3.1349 9.93536C2.38118 11.8952 2.28723 14.0515 2.86845 16.0719C3.44967 18.0924 4.67265 19.8737 6.35 21.1216" fill="currentColor"/>
                        </svg>
                        <span>GitHub</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper function to generate icons based on technology name
const getTechIcon = (tech) => {
  const iconMap = {
    HTML: <svg width="12" height="12" viewBox="0 0 24 24" fill="#E34F26" className="w-3 h-3 md:w-4 md:h-4"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>,
    CSS: <svg width="12" height="12" viewBox="0 0 24 24" fill="#1572B6" className="w-3 h-3 md:w-4 md:h-4"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z"/></svg>,
    JavaScript: <svg width="12" height="12" viewBox="0 0 24 24" fill="#F7DF1E" className="w-3 h-3 md:w-4 md:h-4"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>,
    "Tailwind CSS": <svg width="12" height="12" viewBox="0 0 24 24" fill="#06B6D4" className="w-3 h-3 md:w-4 md:h-4"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>,
    Firebase: <svg width="12" height="12" viewBox="0 0 24 24" fill="#FFCA28" className="w-3 h-3 md:w-4 md:h-4"><path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/></svg>,
    React: <svg width="12" height="12" viewBox="0 0 24 24" fill="#61DAFB" className="w-3 h-3 md:w-4 md:h-4"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.397-.465-.783-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.396.435-.79.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>,
    // Add more tech icons as needed
  };
  
  // Return the icon if it exists, or a default icon
  return iconMap[tech] || (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 md:w-4 md:h-4">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      <path d="M11 7h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  );
};

export default Projects;