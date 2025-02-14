const Footer = () => {
    return (
      <div>
        <footer className="text-white py-6 bg-gray-800">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center">
            {/* Navigation links */}
            <nav className="space-x-6 mb-4 sm:mb-0 sm:ml-2 flex flex-wrap justify-center sm:justify-start">
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            </nav>
  
            {/* Social Media Links */}
            <div className="space-x-6 mb-4 sm:mb-0 flex flex-wrap justify-center sm:justify-end">
              <a href="https://github.com/preetcoder12" target="_blank" className="hover:text-blue-600">GitHub</a>
              <a href="https://www.linkedin.com/in/preet-gusain-986b022a5/" target="_blank" className="hover:text-blue-400">LinkedIn</a>
              <a href="https://www.instagram.com/preet_gusain200_?utm_source=qr&igsh=MXhmenR4ZXgwc2xvbA==" target="_blank" className="hover:text-pink-500">Instagram</a>
            </div>
  
            {/* Footer text */}
            <div className="text-sm text-center sm:text-left mr-2 mt-4 sm:mt-0">
              <p>© 2025 Preet's Personal Portfolio (PPP)</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  