export default function Contact() {
  return `
    <section id="contact" class="relative bg-black py-24 px-8 flex justify-center items-center overflow-hidden">

      <div class="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        <!-- Contact Header -->
        <div class="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 class="text-4xl font-bold text-white mb-4 neon-glow">Get in Touch</h2>
          <p class="text-gray-400 text-lg max-w-md mb-6">
            Feel free to contact me via social media, email, or phone. I’m always open to collaboration, questions, or a friendly hello!
          </p>
          <h3 class="text-xl text-gray-300 font-semibold mb-4">Click on options to contact me</h3>
        </div>

        <!-- Contact Options -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <!-- Discord -->
          <a href="https://discord.gg/82ZCPxTg" target="_blank" class="contact-btn discord">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 55" class="contact-icon">
              <path fill="currentColor" d="M60.104 4.583A58.55 58.55 0 0045.651 0a41.842 41.842 0 00-1.9 3.885 55.3 55.3 0 00-16.5 0 41.84 41.84 0 00-1.902-3.885 58.602 58.602 0 00-14.454 4.583C2.365 20.21-1.4 35.31.489 49.375a59.132 59.132 0 0017.296 5.717c1.298-1.774 2.458-3.625 3.468-5.534a40.07 40.07 0 01-6.207-2.993c.523-.383 1.042-.783 1.548-1.2 12.184 5.627 25.415 5.627 37.556 0 .504.417 1.022.817 1.544 1.2a39.779 39.779 0 01-6.207 2.993c1.01 1.909 2.17 3.76 3.468 5.534a59.188 59.188 0 0017.296-5.717c1.888-14.065-1.877-29.164-12.896-44.792zM23.725 37.498c-3.516 0-6.419-3.207-6.419-7.156 0-3.95 2.853-7.156 6.419-7.156 3.581 0 6.45 3.207 6.419 7.156 0 3.95-2.838 7.156-6.419 7.156zm23.54 0c-3.516 0-6.419-3.207-6.419-7.156 0-3.95 2.853-7.156 6.419-7.156 3.581 0 6.45 3.207 6.419 7.156 0 3.95-2.838 7.156-6.419 7.156z"/>
            </svg>
            <span class="text-white font-semibold">Discord</span>
          </a>

          <!-- Facebook -->
          <a href="https://www.facebook.com/SacloloP/" target="_blank" class="contact-btn facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="contact-icon">
              <path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.127 22 17 22 12z"/>
            </svg>
            <span class="text-white font-semibold">Facebook</span>
          </a>

          <!-- Email (copy on click) -->
          <button type="button" class="contact-btn email break-words" title="Click to copy email"
            onclick="navigator.clipboard.writeText('paulosaclolo0514@gmail.com').then(()=>alert('Email copied!'))">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="contact-icon">
              <path fill="currentColor" d="M12 12.713l-11.99-7.713h23.98l-11.99 7.713zm0 2.574l-12-7.713v13.426h24v-13.426l-12 7.713z"/>
            </svg>
            <span class="text-white font-semibold text-sm break-words max-w-[150px] sm:max-w-full">
              paulosaclolo0514@gmail.com
            </span>
          </button>

          <!-- Phone -->
          <button type="button" class="contact-btn phone" title="Click to copy phone number" 
            onclick="navigator.clipboard.writeText('+639193597428').then(()=>alert('Phone number copied!'))">
            <span class="text-white font-semibold">+63 919 359 7428</span>
          </button>

        </div>
      </div>

      <style>
        /* Header glow */
        .neon-glow {
          text-shadow:
            0 0 5px #fff,
            0 0 10px #9E2A3A,
            0 0 20px #9E2A3A,
            0 0 40px #9E2A3A;
          animation: neonPulse 3s ease-in-out infinite alternate;
        }

        /* Contact Buttons */
        .contact-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border: none;
          border-radius: 12px;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s;
          word-wrap: break-word;
        }
        .contact-btn:hover {
          box-shadow: 0 0 12px #9E2A3A, 0 0 24px #9E2A3A;
          transform: translateY(-3px);
        }

        /* Contact Icons */
        .contact-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }

        /* Icon Colors */
        .discord .contact-icon { color: #7289DA; }
        .facebook .contact-icon { color: #1877F2; }
        .email .contact-icon { color: #da5248; }
        .phone .contact-icon { color: #fff; }

        @keyframes neonPulse {
          from {
            text-shadow: 0 0 5px #fff, 0 0 10px #9E2A3A, 0 0 20px #9E2A3A, 0 0 40px #9E2A3A;
          }
          to {
            text-shadow: 0 0 10px #fff, 0 0 20px #9E2A3A, 0 0 40px #9E2A3A, 0 0 80px #9E2A3A, 0 0 120px #9E2A3A;
          }
        }
      </style>
    </section>
  `;
}