import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdAssessment } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Upload License",
      description:
        "Submit your software license details through our secure platform.",
      icon: (
        <FaCloudUploadAlt className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      title: "Get Valuation",
      description: "Receive a fair market value assessment within 24 hours.",
      icon: (
        <MdAssessment className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      title: "Get Paid",
      description: "Accept our offer and receive payment within 48 hours.",
      icon: (
        <FaMoneyBillWave className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Selling your software licenses has never been easier. Follow these
            simple steps to get started.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full min-h-[300px] flex flex-col"
              >
                <div className="flex flex-col items-center text-center flex-grow">
                  <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full transform transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-11 transform -translate-y-1/2">
                  <FaArrowRight className="w-12 h-12 text-blue-400 transform transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
