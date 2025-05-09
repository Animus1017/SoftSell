import { useState } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`h-screen w-screen box-border p-0 m-0 overflow-x-hidden ${
        darkMode ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      <div className="dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;
