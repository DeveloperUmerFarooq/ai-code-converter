# 🚀 AI Code Converter

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.6-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC.svg)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.1.18-5A0FC8.svg)](https://daisyui.com/)
[![CodeMirror](https://img.shields.io/badge/CodeMirror-6.x-000000.svg)](https://codemirror.net/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A sleek, modern web application that leverages the power of AI to seamlessly convert code between multiple programming languages. Built with cutting-edge technologies for an unparalleled developer experience.

![AI Code Converter Logo](./public/Logo.png)

## ✨ Features

- **🤖 AI-Powered Conversion**: Utilizes advanced GPT-5-nano model via Puter.ai API for accurate code translation
- **🎨 Beautiful UI**: Stunning gradient backgrounds and responsive design with Tailwind CSS and DaisyUI
- **📝 Dual Code Editors**: Side-by-side input and output editors powered by CodeMirror with syntax highlighting
- **🌍 Multi-Language Support**: Convert between JavaScript, Python, Java, C++, and PHP
- **📱 Responsive Design**: Optimized for desktop and mobile devices
- **⚡ Real-time Editing**: Live code editing with instant syntax highlighting
- **🔄 One-Click Conversion**: Simple button to transform your code instantly
- **⏳ Loading States**: Visual feedback during AI processing

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Styling**: Tailwind CSS 4.1.13 + DaisyUI 5.1.18
- **Code Editor**: CodeMirror 6.x with language extensions
- **AI Integration**: Puter.ai Chat API (GPT-5-nano)
- **Language Support**:
  - JavaScript
  - Python
  - Java
  - C++
  - PHP

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Puter.ai account for API access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-code-converter.git
   cd ai-code-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
npm run preview
```

## 📖 Usage

1. **Select Input Language**: Choose the source programming language from the dropdown
2. **Enter Your Code**: Type or paste your code in the left editor
3. **Select Output Language**: Choose the target language for conversion
4. **Convert**: Click the "Convert" button to initiate AI-powered translation
5. **View Results**: The converted code appears in the right editor with syntax highlighting

### Example

```javascript
// Input (JavaScript)
function greet(name) {
    return `Hello, ${name}!`;
}

// Output (Python)
def greet(name):
    return f"Hello, {name}!"
```

## 🔧 Configuration

### Environment Setup

This application uses Puter.ai's AI API. Ensure you have:

1. A Puter.ai account
2. API access configured in your environment

The app integrates directly with Puter.ai's browser-based API, so no additional configuration is needed beyond having the Puter.ai environment available.

## 🌟 Supported Languages

| Language | Extension | Status |
|----------|-----------|--------|
| JavaScript | `.js` | ✅ Full Support |
| Python | `.py` | ✅ Full Support |
| Java | `.java` | ✅ Full Support |
| C++ | `.cpp` | ✅ Full Support |
| PHP | `.php` | ✅ Full Support |

## 🏗️ Project Structure

```
ai-code-converter/
├── public/
│   └── Logo.png
├── src/
│   ├── components/
│   │   ├── CodeBox.jsx
│   │   ├── Logo.jsx
│   │   └── SectionHeader.jsx
│   ├── lib/
│   │   └── Languages.js
│   ├── utils/
│   │   └── languages.json
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

### Development Guidelines

- Follow React best practices
- Use meaningful commit messages
- Ensure code passes ESLint checks
- Test on multiple browsers and devices

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Puter.ai](https://puter.com/) for providing the AI API
- [CodeMirror](https://codemirror.net/) for the excellent code editor
- [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/) for beautiful styling
- [Vite](https://vitejs.dev/) for lightning-fast development

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Check the [Puter.ai documentation](https://docs.puter.com/) for API details

---

<div align="center">
  <p>Made with ❤️ and AI</p>
  <p>Transform your code, elevate your workflow 🚀</p>
</div>
