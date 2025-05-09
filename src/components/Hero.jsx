import { motion } from "framer-motion";
import useScrollTo from "../hooks/useScrollTo";

const Hero = () => {
  const scrollTo = useScrollTo();

  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-24 sm:mt-32 lg:mt-16"
            >
              <div className="inline-flex space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo("features")}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-lg ring-1 ring-blue-600/20 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
                >
                  What's new
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo("features")}
                  className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <span>Just shipped v1.0</span>
                </motion.button>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Sell Your Software License
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
            >
              Get the best value for your unused software licenses. Our platform
              makes it easy to sell your licenses securely and quickly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("contact")}
                className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-blue-500 hover:to-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
              >
                Get started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("how-it-works")}
                className="group rounded-md border border-blue-600/20 bg-white/5 px-3.5 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-400 shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                Learn more
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
};

export default Hero;
