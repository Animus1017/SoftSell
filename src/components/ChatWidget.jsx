import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { chatWithAI } from "../utils/chat";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How long does the process take?",
    "What documents do I need?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await chatWithAI(userMessage);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.markdown },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Custom components for ReactMarkdown
  const markdownComponents = {
    p: ({ children }) => <p className="text-xs sm:text-sm">{children}</p>,
    a: ({ href, children }) => {
      // Check if the link is internal (starts with /) or external
      if (href?.startsWith("/")) {
        return (
          <Link to={href} className="text-blue-500 hover:underline">
            {children}
          </Link>
        );
      }
      // For external links, use anchor tag with security attributes
      return (
        <a
          href={href}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc pl-4 text-xs sm:text-sm">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-4 text-xs sm:text-sm">{children}</ol>
    ),
    li: ({ children }) => <li className="text-xs sm:text-sm">{children}</li>,
    code: ({ children }) => (
      <code className="bg-gray-200 dark:bg-gray-600 rounded px-1 text-xs">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-200 dark:bg-gray-600 rounded p-2 text-xs overflow-x-auto">
        {children}
      </pre>
    ),
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-[280px] sm:w-[320px] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-2 flex items-center justify-between">
              <div className="flex items-center space-x-1.5">
                <FaRobot size={16} />
                <h3 className="font-semibold text-xs sm:text-sm">
                  AI Assistant
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-[300px] sm:h-[350px] overflow-y-auto p-2 space-y-2">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-lg p-2 text-xs sm:text-sm ${
                      message.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <ReactMarkdown components={markdownComponents}>
                        {message.content}
                      </ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Example Questions */}
            <div className="p-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-1 mb-2">
                {exampleQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => setInput(question)}
                    className="flex items-center space-x-1 text-[10px] sm:text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-1.5 py-0.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span>{question}</span>
                  </button>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSubmit} className="flex space-x-1.5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane size={12} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
