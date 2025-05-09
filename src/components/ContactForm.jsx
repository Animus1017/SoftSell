import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheckCircle } from "react-icons/fa";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const licenseTypes = [
    "Microsoft Office",
    "Adobe Creative Cloud",
    "Autodesk",
    "VMware",
    "Other",
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Ready to sell your software licenses? Contact us today.
          </p>
        </div>

        {submitSuccess ? (
          <div className="bg-green-50 dark:bg-green-900 rounded-lg p-8 text-center transform transition-all duration-500 ease-in-out">
            <div className="mb-4">
              <FaCheckCircle className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">
              Thank you for your message!
            </h3>
            <p className="text-green-700 dark:text-green-300 mb-6">
              We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700 outline-none transition-colors duration-200"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className={`relative mt-1 block w-full rounded-lg shadow-sm transition-colors duration-200 px-4 py-3 outline-none bg-gray-100 ${
                        errors.name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`relative mt-1 block w-full rounded-lg shadow-sm transition-colors duration-200 px-4 py-3 outline-none bg-gray-100 ${
                        errors.email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Company
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <input
                      type="text"
                      id="company"
                      {...register("company", {
                        required: "Company name is required",
                      })}
                      className={`relative mt-1 block w-full rounded-lg shadow-sm transition-colors duration-200 px-4 py-3 outline-none bg-gray-100 ${
                        errors.company
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                      placeholder="Acme Inc."
                    />
                  </div>
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="licenseType"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    License Type
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <select
                      id="licenseType"
                      {...register("licenseType", {
                        required: "Please select a license type",
                      })}
                      className={`relative mt-1 block w-full rounded-lg shadow-sm transition-colors duration-200 px-4 py-3 outline-none bg-gray-100 ${
                        errors.licenseType
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                    >
                      <option value="">Select a license type</option>
                      {licenseTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.licenseType && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.licenseType.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className={`relative mt-1 block w-full rounded-lg shadow-sm transition-colors duration-200 px-4 py-3 outline-none bg-gray-100 ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  } dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                  placeholder="Tell us about your software licenses..."
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
