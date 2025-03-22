import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <footer className="bg-white shadow-md p-4 text-center text-gray-600">
            <div className="flex justify-center space-x-4 mb-2">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl hover:text-[#D97941]" />
              </a>
              <a href="https://instagram.com/senadodesign" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-[#D97941]" />
              </a>
              <a href="https://linkedin.com/showcase/senadodesign" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl hover:text-[#D97941]" />
              </a>
            </div>
            <p>
              © {new Date().getFullYear()} <span className="text-[#D97941]"> Uuid Pass Generator. </span> All rights reserved.
            </p>
        </footer>
    </div>
  )
}

export default Footer
