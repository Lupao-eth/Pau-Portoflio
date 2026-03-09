// Import assets from src/assets
import picture from '../assets/picture.jpg';
import resume from '../assets/resume-pau.pdf';

export default function Hero() {
  return `
    <section id="home" class="bg-black pt-16">
      <div class="max-w-7xl mx-auto px-8 flex flex-row items-center gap-4">

        <!-- Image -->
        <div class="flex-shrink-0">
          <img 
            src="${picture}" 
            alt="Paulo"
            class="w-36 h-36 sm:w-40 sm:h-40 object-cover rounded-xl shadow-lg"
          />
        </div>

        <!-- Text Content -->
        <div class="flex flex-col justify-center gap-1">

          <!-- Name -->
          <h1 class="text-2xl sm:text-3xl font-bold leading-snug text-white neon-name">
            Paulo M. Saclolo
          </h1>

          <!-- Location -->
          <p class="flex items-center text-gray-300 text-sm sm:text-base gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c-3 0-8 1.5-8 6v2h16v-2c0-4.5-5-6-8-6z" />
            </svg>
            Bulakan, Bulacan
          </p>

          <!-- Role -->
          <p class="text-white text-sm sm:text-base font-medium">
            Computer Programmer
          </p>

          <!-- Buttons -->
          <div class="mt-2 flex flex-col sm:flex-row gap-2">

            <!-- Resume Link -->
            <a href="${resume}" target="_blank"
              class="flex items-center gap-1 justify-center bg-[#9E2A3A] text-white px-4 py-1 sm:px-5 sm:py-2 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition"
              style="box-shadow: 0 0 10px #9E2A3A, 0 0 20px #9E2A3A;">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v.01M12 12v.01M16 12H8m8 0H8m8 0v4m0-4v-4m0 4H8" />
              </svg>
              View Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  `;
}