import { FaMoneyBillWave, FaLock, FaBolt, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Best Market Value",
      description:
        "We offer competitive prices based on current market rates and license demand.",
      icon: (
        <FaMoneyBillWave className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      title: "Secure Process",
      description:
        "Your data is protected with enterprise-grade security and encryption.",
      icon: <FaLock className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Fast Payment",
      description:
        "Receive your payment within 48 hours of accepting our offer.",
      icon: <FaBolt className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Expert Support",
      description:
        "Our team of software licensing experts is here to help you every step of the way.",
      icon: (
        <FaHeadset className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      ),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Why Choose SoftSell
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            We make selling software licenses simple, secure, and profitable
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full transform transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
