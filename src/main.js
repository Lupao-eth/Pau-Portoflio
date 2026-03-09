import './style.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/about'
import Experience from './pages/Experience'
import Achievement from './pages/Achievement'  // Achievement page
import Contact from './pages/contact'          // <-- Import Contact page

const app = document.querySelector('#app')

// Render all components in order
app.innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${About()}
  ${Experience()}
  ${Achievement()}
  ${Contact()} 
`

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })
}