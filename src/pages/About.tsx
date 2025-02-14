import profile from '../../src/assets/main-avtar.jpg'

const About = () => {
    return (
      // 👇 Added min-height to ensure scrollable content
      <div className="flex flex-col md:flex-row items-start gap-8 p-6 max-w-5xl mx-auto">
        {/* Left Side: Sticky Profile Card */}
        <div className="w-full md:w-1/3 md:sticky top-20">
          {/* 👇 Ensure sticky container has proper constraints */}
          <div className=" h-fit">
            <div className="card bg-base-200 shadow-xl p-6 text-center">
              <img
                src={profile}
                alt="Your Name"
                className="w-32 h-32 mx-auto rounded-full border-4 border-primary object-cover"
              />
              <h2 className="text-xl font-bold mt-4">Your Name</h2>
              <p className="text-sm text-gray-500">MERN Stack Developer</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="https://github.com/yourprofile" target="_blank" className="text-gray-500 hover:text-primary">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-gray-500 hover:text-primary">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" className="text-gray-500 hover:text-primary">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Side: Content Area */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-gray-600">
            Hello! I'm a passionate MERN Stack Developer specializing in building scalable and modern web applications. 
            With experience in React, Node.js, Express, and MongoDB, I focus on creating high-performance and user-friendly applications.
          </p>
          <p className="text-gray-600 mt-3">
            I have a strong background in frontend development using React.js, Tailwind CSS, and DaisyUI, ensuring sleek 
            and responsive UI designs. On the backend, I develop secure and efficient APIs using Node.js and Express.
          </p>
          <p className="text-gray-600 mt-3">
            I'm always eager to learn new technologies, collaborate on innovative projects, and contribute to open-source communities.
            Feel free to connect with me!
          </p>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              I also have experience with state management libraries like Redux and Context API to enhance React applications.
              My goal is to build products that are not only functional but also visually appealing and performant.
            </p>
            <p>
              Apart from coding, I enjoy contributing to open-source projects and writing technical blogs to share my knowledge
              with the developer community.
            </p>
            <p>
              If you're looking for a skilled developer who is always eager to learn and grow, let's connect!
            </p>
            {/* Dummy content to ensure scrolling */}
            {[...Array(10)].map((_, i) => (
              <p key={i} className="mt-6">More content...</p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default About;