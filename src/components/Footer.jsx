import logo from "../assets/SoftSell_Logo_Clean-removebg-preview.png";
import useScrollTo from "../hooks/useScrollTo";

const Footer = () => {
  const scrollTo = useScrollTo();

  return (
    <footer className="bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src={logo}
              alt="SoftSell Logo"
              className="h-12 w-auto max-w-[200px]"
            />
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
              The trusted platform for buying and selling software licenses. Get
              the best value for your unused licenses.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <button
                  onClick={() => scrollTo("about")}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("careers")}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("blog")}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <button
                  onClick={() => scrollTo("privacy")}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("terms")}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("cookies")}
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} SoftSell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
