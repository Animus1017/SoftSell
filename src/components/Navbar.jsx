import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/SoftSell_Logo_Clean-removebg-preview.png";
import useScrollTo from "../hooks/useScrollTo";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const handleNavigation = (sectionId) => {
    scrollTo(sectionId);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="SoftSell Logo"
                className="h-10 w-auto max-w-[200px]"
              />
            </div>
          </motion.div>

          {/* Desktop menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("how-it-works")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              How It Works
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("why-choose-us")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Why Choose Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("testimonials")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Testimonials
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-gray-200" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden flex items-center"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <motion.button
                variants={menuItemVariants}
                onClick={() => {
                  handleNavigation("how-it-works");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                How It Works
              </motion.button>
              <motion.button
                variants={menuItemVariants}
                onClick={() => {
                  handleNavigation("why-choose-us");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Why Choose Us
              </motion.button>
              <motion.button
                variants={menuItemVariants}
                onClick={() => {
                  handleNavigation("testimonials");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Testimonials
              </motion.button>
              <motion.button
                variants={menuItemVariants}
                onClick={() => {
                  handleNavigation("contact");
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </motion.button>
              <motion.button
                variants={menuItemVariants}
                onClick={() => setDarkMode(!darkMode)}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <div className="flex items-center space-x-2">
                  {darkMode ? (
                    <>
                      <FaSun className="w-5 h-5 text-gray-200" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon className="w-5 h-5 text-gray-700" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
