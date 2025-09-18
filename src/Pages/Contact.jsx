import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

function Contact() {
    const contacts = [
        {
            id: 1,
            name: "Instagram",
            icon: <FaInstagram className="text-pink-500 text-4xl" />,
            link: "https://www.instagram.com/itz__admin__01",
            desc: "Follow me on Instagram for updates & fashion content.",
        },
        {
            id: 2,
            name: "GitHub",
            icon: <FaGithub className="text-gray-300 text-4xl" />,
            link: "https://github.com/itzadmin001",
            desc: "Check out my projects & open-source contributions.",
        },
        {
            id: 3,
            name: "LinkedIn",
            icon: <FaLinkedin className="text-blue-500 text-4xl" />,
            link: "https://www.linkedin.com/in/yogesh-kumar-558b4b26b/",
            desc: "Connect with me professionally on LinkedIn.",
        },
        {
            id: 4,
            name: "Portfolio",
            icon: <MdWeb className="text-green-400 text-4xl" />,
            link: "https://yogesh-dev-portfolio-14.vercel.app/",
            desc: "Explore my personal portfolio website.",
        },
        {
            id: 5,
            name: "WhatsApp",
            icon: <FaWhatsapp className="text-green-500 text-4xl" />,
            link: "https://wa.me/919828887630",
            desc: "Chat with me directly on WhatsApp.",
        },
    ];

    return (
        <div className="bg-black min-h-screen text-white py-16 px-6 md:px-20 font-[Silkscreen]">
            {/* Header */}
            <div className="text-center mb-12 animate-fadeInDown">
                <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Have questions or want to collaborate? Reach out through any of the
                    platforms below. I’m always open to discussing new projects, creative
                    ideas, or opportunities to be part of your vision.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {contacts.map((contact) => (
                    <div
                        key={contact.id}
                        onClick={() => window.open(contact.link, "_blank")}
                        className="cursor-pointer bg-gray-900 hover:bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center text-center transform hover:scale-105 transition-all duration-300 animate-fadeInUp"
                    >
                        <div className="mb-4">{contact.icon}</div>
                        <h2 className="text-2xl font-semibold mb-2">{contact.name}</h2>
                        <p className="text-gray-400 text-sm">{contact.desc}</p>
                    </div>
                ))}
            </div>

            {/* Footer Note */}
            <div className="text-center mt-16 text-gray-500 animate-fadeInUp">
                <p>© {new Date().getFullYear()} Yogesh Kumar | All Rights Reserved</p>
            </div>

            {/* Animations */}
            <style>
                {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInDown {
            animation: fadeInDown 1s ease forwards;
          }
          .animate-fadeInUp {
            animation: fadeInUp 1s ease forwards;
          }
        `}
            </style>
        </div>
    );
}

export default Contact;
