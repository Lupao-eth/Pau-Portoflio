export default function About() {
  return `
    <section id="about" class="relative bg-black py-24 px-8 flex justify-center items-center overflow-hidden">

      <!-- Top Fade Overlay -->
      <div class="absolute top-0 left-0 w-full h-32 pointer-events-none fade-top"></div>

      <!-- Center Glow -->
      <div class="bg-glow"></div>

      <div class="relative max-w-5xl w-full text-center">

        <!-- Title -->
        <h2 class="text-4xl font-bold text-white mb-10 neon-title">
          About Me
        </h2>

        <!-- Divider -->
        <div class="flex justify-center mb-12">
          <div class="neon-divider"></div>
        </div>

        <!-- About Content -->
        <p class="text-gray-300 text-lg leading-relaxed font-light mb-16">
          I am a <span class="highlight">Bachelor of Industrial Technology</span> graduate 
          with a background in programming and experience in various roles. 
          I possess strong analytical and problem-solving skills and adapt quickly 
          to new technologies and challenges.
          <br><br>
          I am dedicated, adaptable, and committed to contributing positively to 
          any organization while continuously improving my technical knowledge 
          and professional growth as a <span class="highlight">Computer Programmer</span>.
        </p>

        <!-- Education Section -->
        <h3 class="text-2xl font-semibold text-white mb-6 neon-subtitle">Education</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">

          <!-- Education Item 1 -->
          <div class="education-item p-6 border border-gray-700 rounded-lg relative">
            <div class="neon-line"></div>
            <p class="text-lg font-bold text-white mb-1">Bachelor of Industrial Technology</p>
            <p class="text-base text-gray-300 mb-1">Major In Computer Technology</p>
            <p class="text-base text-gray-300 mb-1">Bulacan State University</p>
            <p class="text-sm text-gray-500 mb-1">TJS Matungao Bulakan</p>
            <p class="text-sm text-gray-500">July 2025</p>
          </div>

          <!-- Education Item 2 -->
          <div class="education-item p-6 border border-gray-700 rounded-lg relative">
            <div class="neon-line"></div>
            <p class="text-lg font-bold text-white mb-1">Science, Technology, Engineering & Mathematics - STEM</p>
            <p class="text-base text-gray-300 mb-1">Dr. Yanga Colleges Inc.</p>
            <p class="text-base text-gray-300 mb-1">Bocaue, Bulacan</p>
            <p class="text-sm text-gray-500">2020</p>
          </div>

        </div>

      </div>

      <style>
        /* TOP FADE */
        .fade-top {
          background: linear-gradient(to bottom, #000 0%, transparent 100%);
        }

        /* CENTER BACKGROUND GLOW */
        .bg-glow {
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);

          width: 400px;
          height: 400px;

          background: radial-gradient(circle, #9E2A3A 0%, transparent 70%);
          filter: blur(100px);

          opacity: 0.6;
          pointer-events: none;

          animation: glowMove 6s ease-in-out infinite alternate;
        }

        /* TITLE NEON */
        .neon-title {
          text-shadow:
            0 0 5px #fff,
            0 0 10px #9E2A3A,
            0 0 20px #9E2A3A,
            0 0 40px #9E2A3A,
            0 0 80px #9E2A3A;

          animation: neonPulse 3s ease-in-out infinite alternate;
        }

        /* Subtitle neon glow */
        .neon-subtitle {
          text-shadow:
            0 0 4px #fff,
            0 0 8px #9E2A3A,
            0 0 16px #9E2A3A;
          margin-bottom: 1rem;
        }

        /* Highlight words */
        .highlight {
          color: #fff;
          font-weight: 600;
          text-shadow:
            0 0 4px #9E2A3A,
            0 0 10px #9E2A3A;
        }

        /* Divider */
        .neon-divider {
          width: 120px;
          height: 3px;
          background: #9E2A3A;
          box-shadow:
            0 0 10px #9E2A3A,
            0 0 20px #9E2A3A,
            0 0 40px #9E2A3A;
          animation: dividerGlow 2.5s ease-in-out infinite alternate;
        }

        /* Education Neon Line */
        .education-item .neon-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: #9E2A3A;
          box-shadow: 0 0 8px #9E2A3A, 0 0 16px #9E2A3A;
          border-radius: 3px;
        }

        /* Title animation */
        @keyframes neonPulse {
          from {
            text-shadow:
              0 0 5px #fff,
              0 0 10px #9E2A3A,
              0 0 20px #9E2A3A,
              0 0 40px #9E2A3A;
          }

          to {
            text-shadow:
              0 0 10px #fff,
              0 0 20px #9E2A3A,
              0 0 40px #9E2A3A,
              0 0 80px #9E2A3A,
              0 0 120px #9E2A3A;
          }
        }

        /* Divider animation */
        @keyframes dividerGlow {
          from {
            box-shadow:
              0 0 5px #9E2A3A,
              0 0 15px #9E2A3A;
          }

          to {
            box-shadow:
              0 0 15px #9E2A3A,
              0 0 35px #9E2A3A,
              0 0 60px #9E2A3A;
          }
        }

        /* Background breathing glow */
        @keyframes glowMove {
          from {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          to {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.75;
          }
        }
      </style>

    </section>
  `;
}