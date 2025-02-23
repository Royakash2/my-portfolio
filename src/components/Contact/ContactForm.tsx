import { toast,  } from "react-toastify";
import { FormData } from "../../utils/types";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_2lfg46h",
        "template_e0u2uld",
        { from_name: data.name, from_email: data.email, message: data.message },
        "QHi5OIKnF5lWaiFVT"
      );
      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
    setLoading(false);
  };
  const FORM_FIELDS = [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Your Name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Your Email",
      required: true,
    },
  ];
  
  return (
    <div className="w-full bg-gray-900 p-6 sm:p-10 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {FORM_FIELDS.map((field, index) => (
          <div key={index}>
            <label
              htmlFor={field.name}
              className="block text-white text-sm font-semibold mb-2"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              {...register(field.name as keyof FormData, {
                required: `${field.label} is required`,
              })}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition"
              placeholder={field.placeholder}
            />
            {errors[field.name as keyof FormData] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name as keyof FormData]?.message}
              </p>
            )}
          </div>
        ))}

        <div>
          <label
            htmlFor="message"
            className="block text-white text-sm font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            {...register("message", {
              required: "Message cannot be empty",
            })}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none transition resize-none"
            placeholder="Your Message"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full border btn-outline bg-black text-white py-3 rounded-lg font-semibold text-lg flex justify-center items-center gap-2 transition ${
            loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:from-blue-600 hover:to-blue-800"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin text-white"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
