const FooterMain = () => {
    return (
      <footer className="bg-black text-white py-6">
        <p className="divider"></p>
        <div className="text-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold mb-4 dancing">Akash Roy</h1>
  
          {/* Navigation Links */}
          <ul className="flex justify-center space-x-8 text-gray-400 text-sm mb-4">
            <li>
              <a href="#" className="hover:text-white transition">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                WORKS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                CONTACT
              </a>
            </li>
          </ul>
  
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © All rights reserved by{" "}
            <a
              href=""
              className="text-blue-500 hover:underline"
            >
              Akash roy
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default FooterMain;
  