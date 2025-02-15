const Service = () => {
    const services = [
        {
            title: "Frontend Development",
            description: "Crafting pixel-perfect, responsive, and interactive UI/UX using React.js, Tailwind CSS, and TypeScript.",
            icon: "💻",
            gradient: "bg-gradient-to-r from-blue-400 to-purple-500",
        },
        {
            title: "Backend Development",
            description: "Building scalable and secure backend applications with Node.js, Express.js, and MongoDB.",
            icon: "⚙️",
            gradient: "bg-gradient-to-r from-green-400 to-teal-500",
        },
        {
            title: "Full-Stack (MERN) Development",
            description: "Delivering complete web solutions with seamless frontend and backend integration using the MERN stack.",
            icon: "🚀",
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
        }
    ];

    return (
        <div className="p-10 bg-gray-900 text-white">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Services
            </h2>
            <div className="space-y-8">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-center items-start gap-6 group transition-transform hover:scale-105">
                        {/* Icon with gradient */}
                        <div className={`w-12 h-12 flex items-center justify-center text-4xl text-white rounded-full ${service.gradient} shadow-lg`}>
                            {service.icon}
                        </div>
                        {/* Service Details */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-blue-400 transition-colors">{service.title}</h3>
                            <p className="text-gray-300 text-lg">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
