const AboutMeDescription = () => {
  return (
      <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
              Hi, I’m <span className="font-bold text-white">Akash Roy</span> from <span className="font-bold text-white">Bangladesh</span>.  
              I am a <span className="font-bold text-blue-400">MERN Stack Developer</span> passionate about building **dynamic** and **responsive** web applications.
          </p>

          <div className="mt-4 space-y-3">
              <p className="text-gray-400">
                  🚀 Started frontend development in <span className="font-semibold text-white">2023</span>, specializing in  
                  <span className="text-blue-300"> React.js, JavaScript, HTML, and CSS</span>.
              </p>
              <p className="text-gray-400">
                  🔥 Expanded to backend development in <span className="font-semibold text-white">2024</span>, mastering  
                  <span className="text-green-300"> Node.js, Express.js, MongoDB, and Mongoose</span>.
              </p>
              <p className="text-gray-400">
                  🎯 Currently learning <span className="text-purple-300">Redux and Next.js</span> to enhance my frontend skills.
              </p>
          </div>

          <p className="mt-6 text-gray-300">
              I enjoy solving real-world problems with **clean & efficient code** and continuously strive to improve my skills.  
              I'm eager to contribute my **creativity and expertise** to impactful projects!
          </p>
      </div>
  );
};

export default AboutMeDescription;
