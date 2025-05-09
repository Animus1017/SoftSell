# Credex - Software License Marketplace

Credex is a modern web application that facilitates the buying and selling of software licenses. The platform provides a secure and user-friendly interface for license trading with an integrated AI assistant for user support.

## 🚀 Features

### Core Features

- **AI-Powered Chat Assistant**

  - Real-time responses using Google's Gemini AI
  - Markdown support for rich text formatting
  - Smart link handling (internal/external)
  - Example questions for quick interaction
  - Dark mode support

- **Modern UI/UX**
  - Responsive design for all screen sizes
  - Smooth animations using Framer Motion
  - Dark/Light mode support
  - Interactive chat widget
  - Loading states and error handling

### Technical Features

- React-based frontend
- Vite for fast development and building
- Tailwind CSS for styling
- React Router for navigation
- React Markdown for rich text rendering
- Environment variable configuration

## 🎨 Design Choices

### UI/UX Decisions

1. **Chat Widget Design**

   - Floating widget for non-intrusive access
   - Collapsible interface to save screen space
   - Smooth animations for better user experience
   - Example questions for quick interaction
   - Loading indicators for better feedback

2. **Responsive Design**

   - Mobile-first approach
   - Adaptive text sizes (`text-xs sm:text-sm`)
   - Flexible chat window sizing
   - Touch-friendly interface elements

3. **Dark Mode**
   - System preference detection
   - Consistent color scheme
   - Accessible contrast ratios
   - Smooth theme transitions

### Technical Decisions

1. **AI Integration**

   - Chose Google's Gemini AI for:
     - Better performance
     - Cost-effective pricing
     - Rich text support
     - Reliable API

2. **State Management**

   - Local state for chat messages
   - Efficient message updates
   - Proper error handling
   - Loading state management

3. **Security**
   - Environment variables for API keys
   - Secure link handling
   - Input sanitization
   - Error boundary implementation

## 🛠️ Technologies Used

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router
- **Icons**: React Icons
- **AI Integration**: Google Gemini AI
- **Markdown**: React Markdown
