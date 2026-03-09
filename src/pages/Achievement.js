// Import the PNP logo image
import pnpLogo from '../assets/pnp.png';

export default function Achievement() {
  return `
    <section id="achievement" class="relative bg-black py-24 px-8 flex justify-center items-center overflow-hidden">

      <div class="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        <div class="flex flex-col gap-6">
          <h3 class="text-2xl font-bold text-white mb-2 neon-title">Skills</h3>

          <div>
            <p class="text-gray-300 font-semibold mb-2">Core Skills</p>
            <ul class="list-disc list-inside text-gray-400 space-y-1">
              <li>Programming Languages</li>
              <li>Adaptability & Continuous Learning</li>
              <li>Problem-Solving & Logical Thinking</li>
              <li>Software Development Practices</li>
            </ul>
          </div>

          <div>
            <p class="text-gray-300 font-semibold mb-3">Technologies</p>
            <div class="tech-slider neon-border">
              <div class="tech-track">
                <div class="tech-item">HTML</div>
                <div class="tech-item">CSS</div>
                <div class="tech-item">JS</div>
                <div class="tech-item">Python</div>
                <div class="tech-item">PHP</div>
                <div class="tech-item">MySQL</div>
                <div class="tech-item">React</div>
                <div class="tech-item">PostgreSQL</div>

                <!-- Duplicates for seamless carousel -->
                <div class="tech-item">HTML</div>
                <div class="tech-item">CSS</div>
                <div class="tech-item">JS</div>
                <div class="tech-item">Python</div>
                <div class="tech-item">PHP</div>
                <div class="tech-item">MySQL</div>
                <div class="tech-item">React</div>
                <div class="tech-item">PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <h3 class="text-2xl font-bold text-white mb-2 neon-title">Achievements</h3>

          <div class="achievement-card p-8 rounded-lg transition-transform hover:scale-105 relative flex flex-col gap-4 items-start overflow-hidden group">
            
            <img 
              src="${pnpLogo}" 
              alt="PNP Logo Background"
              class="absolute inset-0 w-full h-full object-contain opacity-10 grayscale group-hover:opacity-20 transition-opacity pointer-events-none p-4"
            />

            <div class="relative z-10">
              <p class="text-xl font-bold text-white mb-2">Accomplished On-The-Job Training</p>
              <p class="text-sm text-gray-400 font-medium mb-3">
                Philippine National Police<br>
                Camp Crame, Quezon City, Metro Manila<br>
                <span class="text-red-500">600 Hours</span>
              </p>
              <p class="text-gray-300 text-base leading-relaxed">
                Developed a functional messaging system capable of handling nationwide communication and managing a database of over 250 million records.
              </p>
            </div>

          </div>
        </div>

      </div>

      <style>
        .neon-title {
          text-shadow: 0 0 5px #fff, 0 0 10px #9E2A3A, 0 0 20px #9E2A3A, 0 0 40px #9E2A3A;
          animation: neonPulse 3s ease-in-out infinite alternate;
        }

        .tech-slider { 
          overflow: hidden; 
          width: 100%;
          padding: 12px 0;
        }
        
        .tech-track { 
          display: flex; 
          gap: 25px; 
          width: max-content;
          animation: slideTech 25s linear infinite; 
        }
        
        .tech-item { 
          display: flex; 
          align-items: center; 
          white-space: nowrap; 
          color: #fff; 
          font-size: 0.95rem; 
          font-weight: 600;
        }

        .neon-border {
          position: relative;
          border-top: 2px solid #9E2A3A;
          border-bottom: 2px solid #9E2A3A;
        }

        .neon-border::before,
        .neon-border::after {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background: #9E2A3A;
          filter: blur(10px);
        }
        .neon-border::before { top: -2px; }
        .neon-border::after { bottom: -2px; }

        .achievement-card { 
          background: rgba(158, 42, 58, 0.05); 
          border: 2px solid #9E2A3A; 
          min-height: 250px;
          display: flex;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .achievement-card:hover { 
          background: rgba(158, 42, 58, 0.1); 
          box-shadow: 0 0 30px rgba(158, 42, 58, 0.3);
        }

        @keyframes neonPulse {
          from { text-shadow:0 0 5px #fff,0 0 10px #9E2A3A,0 0 20px #9E2A3A,0 0 40px #9E2A3A; }
          to { text-shadow:0 0 10px #fff,0 0 20px #9E2A3A,0 0 40px #9E2A3A,0 0 80px #9E2A3A; }
        }

        @keyframes slideTech { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(calc(-50% - 12.5px)); } 
        }
      </style>

    </section>
  `;
}