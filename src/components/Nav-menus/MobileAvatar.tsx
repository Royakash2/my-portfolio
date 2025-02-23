import profile from "../../assets/akash.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const MobileAvatar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center py-8 px-6 rounded-2xl shadow-2xl relative overflow-hidden group"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#1F1F1F_0%,#2A2A2A_50%,#1F1F1F_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {/* Avatar Container */}
      <div className="relative w-32 h-32 mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 animate-spin-slow [mask-image:linear-gradient(to_bottom,transparent,white_70%)]"/>
        <div className="relative w-32 h-32 rounded-full bg-gray-800 overflow-hidden border-4 border-white/5">
          <img
            src={profile}
            alt="Akash Roy"
            className="w-full h-full object-cover scale-[1.01]"
          />
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-6">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
        >
          Akash Roy
        </motion.h1>
        <p className="text-sm text-gray-300 font-medium">Full Stack Developer</p>
      </div>

      {/* Social Icons */}
      <motion.div 
        className="flex gap-5 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a href="#" className="p-2 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-cyan-400/10 transition-colors">
          <FaGithub className="w-6 h-6 text-cyan-400" />
        </a>
        <a href="#" className="p-2 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-blue-400/10 transition-colors">
          <FaLinkedin className="w-6 h-6 text-blue-400" />
        </a>
        <a href="#" className="p-2 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-sky-400/10 transition-colors">
          <FaTwitter className="w-6 h-6 text-sky-400" />
        </a>
      </motion.div>

      {/* Animated Divider */}
      <div className="w-full relative h-px mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    </motion.div>
  );
};

export default MobileAvatar;