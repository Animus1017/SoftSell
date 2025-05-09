import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SoftSell made selling our unused Microsoft licenses incredibly easy. The process was smooth, and we received payment within 48 hours.",
      author: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      quote:
        "We had several Adobe licenses we no longer needed. SoftSell provided a fair valuation and handled the entire process professionally.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Digital Innovations",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Trusted by businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <FaQuoteLeft className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full ring-2 ring-blue-600/20"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
