import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Handle form submission (e.g., API call)
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-10" data-aos="fade-up">
        Get In Touch
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6" data-aos="fade-right">
          {[
            { icon: "📍", text: "Dhaka, Bangladesh" },
            { icon: "✉️", text: "your.email@example.com" },
            { icon: "📞", text: "+123 456 7890" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-gray-900 p-5 rounded-lg shadow-lg">
              <span className="text-blue-500 text-2xl">{item.icon}</span>
              <p className="text-white text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", type: "text", name: "name", placeholder: "Your Name" },
              { label: "Email", type: "email", name: "email", placeholder: "Your Email" },
            ].map((field, index) => (
              <div key={index} className="mb-6">
                <label className="block text-white text-sm font-semibold mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof FormData]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
            
            <div className="mb-6">
              <label className="block text-white text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:border-blue-500 focus:outline-none transition resize-none"
                placeholder="Your Message"
                rows={4}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold text-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;