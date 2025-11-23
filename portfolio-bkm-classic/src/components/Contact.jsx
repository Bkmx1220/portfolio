import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iyxucxs",      // 🔹 remplace par ton EmailJS service ID
        "template_ykarbhj",     // 🔹 remplace par ton template ID
        form.current,
        "vmCaXtCY6fWkQ2pH5"       // 🔹 remplace par ta clé publique EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Une erreur est survenue !");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white flex flex-col justify-center items-center px-6 py-16"
    >
      <div className="max-w-3xl w-full text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">📬 Contacte-moi</h2>
        <p className="text-gray-300">
          Un projet, une idée ou une collaboration ? Remplis le formulaire ci-dessous
          et je te répondrai rapidement !
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg"
      >
        <div className="flex flex-col mb-4">
          <label className="mb-2 font-semibold text-left">Nom complet</label>
          <input
            type="text"
            name="user_name"
            required
            className="p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="mb-2 font-semibold text-left">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="flex flex-col mb-6">
          <label className="mb-2 font-semibold text-left">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="p-3 rounded-lg bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 transition font-semibold py-3 rounded-lg shadow-md"
        >
          Envoyer ✉️
        </button>

        {sent && (
          <p className="mt-4 text-green-400 font-semibold">
            ✅ Message envoyé avec succès !
          </p>
        )}
      </form>
    </section>
  );
}
