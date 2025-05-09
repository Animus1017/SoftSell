import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const chatWithAI = async (message) => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Gemini API key is missing. Please check your .env file");
      throw new Error("Gemini API key is not configured");
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Create chat session with correct message format
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: "You are a helpful AI assistant for a software license marketplace called Credex. Your role is to help users understand how to sell their software licenses. Keep your responses concise, friendly, and focused on the topic of software license trading. If you're not sure about something, be honest and suggest contacting customer support.",
            },
          ],
        },
      ],
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;

    // Return an object with both the raw text and markdown content
    return {
      text: response.text(),
      markdown: response.text(), // Gemini's responses are already in a format suitable for markdown
    };
  } catch (error) {
    console.error("Chat Error:", {
      name: error.name,
      message: error.message,
      status: error.status,
    });

    if (error.message.includes("API key")) {
      throw new Error(
        "Please check your Gemini API key configuration in .env file"
      );
    } else if (error.message.includes("network")) {
      throw new Error("Network error. Please check your internet connection");
    } else {
      throw new Error(`API Error: ${error.message}`);
    }
  }
};
