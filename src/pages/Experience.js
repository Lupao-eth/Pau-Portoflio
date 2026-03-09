export default function Experience() {
  return `
    <section id="experience" class="relative bg-black py-24 px-8 flex justify-center items-center overflow-hidden">

      <!-- Center Glow -->
      <div class="bg-glow"></div>

      <div class="relative max-w-5xl w-full text-center">

        <!-- Title -->
        <h2 class="text-4xl font-bold text-white mb-10 neon-title">
          Work Experience
        </h2>

        <!-- Divider -->
        <div class="flex justify-center mb-12">
          <div class="neon-divider"></div>
        </div>

        <!-- Experience Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

          <!-- Card 1 -->
          <div class="experience-card p-6 rounded-lg relative">
            <div class="neon-line"></div>
            <p class="text-lg font-bold text-white mb-1">Freelance Programmer</p>
            <p class="text-sm text-gray-400 mb-2">2023 - 2025</p>
            <p class="text-gray-300 text-base">
              Designed and developed custom website and app systems, managed projects from concept to deployment, and ensured client satisfaction.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="experience-card p-6 rounded-lg relative">
            <div class="neon-line"></div>
            <p class="text-lg font-bold text-white mb-1">Catering Services / Crew</p>
            <p class="text-sm text-gray-400 mb-2">Balagtas, Philippines (2021 - 2025)</p>
            <p class="text-gray-300 text-base">
              Prepared buffet area, organized utensils, decorated celebrants’ area, and provided excellent customer service.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="experience-card p-6 rounded-lg relative">
            <div class="neon-line"></div>
            <p class="text-lg font-bold text-white mb-1">Customer Service (Work-From-Home)</p>
            <p class="text-sm text-gray-400 mb-2">2023 - 8 months</p>
            <p class="text-gray-300 text-base">
              Assisted customers by addressing inquiries, providing guidance, and resolving concerns efficiently.
            </p>
          </div>

        </div>

      </div>

      <style>
        /* CENTER BACKGROUND GLOW */
        .bg-glow {
          position: absolute;
          top: 50%;
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

        /* Experience Card */
        .experience-card {
          background: transparent; /* Removed background color */
          border: none; /* optional: remove border if you want clean transparency */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* Neon line left */
        .experience-card .neon-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: #9E2A3A;
          box-shadow: 0 0 8px #9E2A3A, 0 0 16px #9E2A3A;
          border-radius: 3px;
        }

        /* Hover Glow */
        .experience-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px #9E2A3A, 0 0 40px #9E2A3A;
        }

        /* Animations */
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

        @keyframes dividerGlow {
          from {
            box-shadow: 0 0 5px #9E2A3A, 0 0 15px #9E2A3A;
          }
          to {
            box-shadow: 0 0 15px #9E2A3A, 0 0 35px #9E2A3A, 0 0 60px #9E2A3A;
          }
        }

        @keyframes glowMove {
          from { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          to { transform: translate(-50%, -50%) scale(1.1); opacity: 0.75; }
        }

      </style>

    </section>
  `;
}