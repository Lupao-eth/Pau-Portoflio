export default function Navbar() {
  return `
    <header class="fixed top-0 w-full z-50 bg-[black]">

      <nav class="w-full px-12 py-3 flex justify-center items-center relative">

        <!-- Desktop Menu -->
        <ul class="hidden md:flex gap-16 text-lg font-mono font-medium tracking-wide text-[#9E2A3A]">
          ${navItem("About", "about")}
          ${navItem("Work Experience", "experience")}
          ${navItem("Skills", "achievement")}
          ${navItem("Contact", "contact")}
        </ul>

        <!-- Mobile Menu Button -->
        <button id="menu-btn" class="md:hidden absolute right-12 text-2xl text-[#9E2A3A]">
          ☰
        </button>

      </nav>

      <!-- Mobile Menu -->
      <div id="mobile-menu"
           class="hidden md:hidden mt-2 p-6 w-full bg-[#2C2C2C]">

        <ul class="flex flex-col items-center gap-8 text-lg font-mono font-medium text-[#9E2A3A]">
          <li><a href="#about" class="scroll-link hover:opacity-70 transition">About</a></li>
          <li><a href="#experience" class="scroll-link hover:opacity-70 transition">Work Experience</a></li>
          <li><a href="#achievement" class="scroll-link hover:opacity-70 transition">Skills</a></li>
          <li><a href="#contact" class="scroll-link hover:opacity-70 transition">Contact</a></li>
        </ul>

      </div>

    </header>

    <style>
      /* Enable smooth scroll behavior */
      html {
        scroll-behavior: smooth;
      }
    </style>

    <script>
      // Mobile menu toggle
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Smooth scroll for older browsers (optional, works in JS)
      document.querySelectorAll('a.scroll-link').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href'));
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 70, // adjust offset for fixed navbar
              behavior: 'smooth'
            });

            // Close mobile menu after click
            if (!mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
            }
          }
        });
      });
    </script>
  `
}

// Function to generate nav item with animated underline
function navItem(label, href) {
  const underlineColor = "#9E2A3A"

  return `
    <li>
      <a href="#${href}" class="scroll-link group relative text-[#9E2A3A] transition-colors duration-300">
        ${label}

        <!-- Animated underline -->
        <span class="
          absolute left-0 -bottom-1
          w-0 h-[2px]
          transition-all duration-300
          group-hover:w-full
        " style="background-color: ${underlineColor}"></span>

      </a>
    </li>
  `
}