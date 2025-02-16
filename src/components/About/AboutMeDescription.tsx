const AboutMeDescription = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-gray-300 rounded-xl shadow-lg border border-gray-800">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Building Digital Dreams, <br/>
          <span className="text-2xl">One Line at a Time</span>
        </h2>
        
        <p className="text-lg leading-relaxed">
          Hey there! I'm <span className="font-semibold text-blue-400">Akash Roy</span>, a passionate 
          <span className="text-purple-400"> Full-stack developer(MERN)</span> from 
          <span className="text-green-400"> Bangladesh</span>, turning coffee into clean code since 2023.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex items-start gap-5">
          <div className="mt-1 p-2 bg-blue-900/30 rounded-lg">
            <span className="text-2xl text-blue-400">🚀</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              Started with <span className="text-blue-300">React.js</span> and frontend magic in 2023, 
              fell in love with creating interactive experiences. In 2024, I embraced the backend world 
              with <span className="text-green-300">Node.js</span> and 
              <span className="text-green-300"> MongoDB</span>, completing the MERN stack circle.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="mt-1 p-2 bg-purple-900/30 rounded-lg">
            <span className="text-2xl text-purple-400">💡</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">What Drives Me</h3>
            <p className="text-gray-400 leading-relaxed">
              I thrive on solving real-world problems through 
              <span className="text-pink-300"> elegant solutions</span>. Currently diving deep into 
              <span className="text-purple-300"> Next.js</span> and 
              <span className="text-purple-300"> Redux</span> to craft even more powerful applications.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="mt-1 p-2 bg-green-900/30 rounded-lg">
            <span className="text-2xl text-green-400">🌍</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Beyond Code</h3>
            <p className="text-gray-400 leading-relaxed">
              When not debugging, you'll find me exploring new tech trends, contributing to open-source 
              projects, or mentoring aspiring developers in my local community.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gray-800/40 rounded-xl border border-blue-900/50">
          <p className="text-center text-lg italic text-blue-300">
            "I believe great software is where <span className="text-white">functionality</span> 
            meets <span className="text-white">creativity</span> - and that's exactly what I build."
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDescription;