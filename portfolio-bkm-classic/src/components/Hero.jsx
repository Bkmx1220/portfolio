import React from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 overflow-hidden text-white">
      {/* 🌌 Bulles animées d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble w-16 h-16 bg-white/10 left-10 animate-bubble delay-0"></div>
        <div className="bubble w-24 h-24 bg-white/10 left-1/3 animate-bubble delay-2000"></div>
        <div className="bubble w-20 h-20 bg-white/10 left-2/3 animate-bubble delay-4000"></div>
        <div className="bubble w-28 h-28 bg-white/10 left-3/4 animate-bubble delay-6000"></div>
      </div>

      {/* 👤 Contenu principal */}
      <div className="z-10 text-center px-4">
        <img
          src={profile}
          alt="Portrait de Yahya"
          className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-white shadow-2xl transform rotate-[-4deg] hover:scale-105 transition-all duration-500"
        />
        <h1 className="text-5xl font-extrabold mb-2">
          Salut, je suis <span className="text-indigo-300">Yahya</span> 👋
        </h1>
        <p className="text-xl text-indigo-100 mb-8">
          Développeur Web & Mobile • Passionné d’IA & d’Innovation
        </p>

        {/* 🚀 Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
          >
            Voir mes projets 🚀
          </a>
          <a
            href="/CV_Developpeur_Web_Mobile_YahBkm.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all shadow-lg"
          >
            Télécharger mon CV 📄
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
