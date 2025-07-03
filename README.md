# 🦀⚛️ Rust + React Full-Stack Calculator

> A high-performance multiplication calculator built with **Rust** backend and **React** frontend, demonstrating modern full-stack development with professional UI/UX design.

## ✅ **Project Overview**

| **Role** | **Language/Technology** | **Function** |
|----------|-------------------------|-------------|
| **Backend** | **Rust (Actix-web)** | Operations, calculations, and database communication |
| **Frontend** | **React + TypeScript** | Website rendering and user interaction |
| **Styling** | **Tailwind CSS** | Page design and styling control |
| **UI Components** | **ShadCN UI** | Modern, ready-to-use components |

---

## 🚀 **Features**

### 🦀 **Backend (Rust + Actix-web)**
- ✅ **Fast & Secure API** - High-performance multiplication processing
- ✅ **CORS Configured** - Seamless frontend communication
- ✅ **Comprehensive Error Handling** - Clear error messages
- ✅ **Request Logging** - Performance monitoring
- ✅ **Organized Structure** - handlers, models, routes

### ⚛️ **Frontend (React + TypeScript)**
- ✅ **Modern Interface** - Professional design
- ✅ **Smooth Interactions** - Loading and error states
- ✅ **Type Safety** - TypeScript for security
- ✅ **Reusable Components** - Clean architecture
- ✅ **Excellent UX** - Keyboard shortcuts support

### 🎨 **Styling (Tailwind CSS v4)**
- ✅ **OKLCH Color System** - Natural gradients
- ✅ **Professional Effects** - Glass effect, gradients
- ✅ **Dark Mode Support** - Complete dark theme
- ✅ **Responsive Design** - Works on all devices
- ✅ **Smooth Animations** - Interactive effects

### 🧩 **UI Components (ShadCN UI)**
- ✅ **Ready-to-use Components** - Button, Input, Card
- ✅ **Consistent Design** - Unified design system
- ✅ **Easy Customization** - Fully customizable
- ✅ **Professional Icons** - Clean SVG icons
- ✅ **Accessibility** - WCAG compliant

---

## 📁 **Project Structure**

```
rust-site/
├── 📁 backend/                    # Rust + Actix-web API
│   ├── Cargo.toml                # Dependencies
│   └── src/
│       ├── main.rs               # Server entry point
│       ├── handlers/
│       │   └── mod.rs            # API handlers
│       ├── models/
│       │   └── mod.rs            # Data models
│       └── routes/
│           └── mod.rs            # Route configuration
├── 📁 frontend/                   # React + TypeScript + Vite
│   ├── package.json              # Node dependencies
│   ├── vite.config.ts            # Vite config with TailwindCSS
│   ├── tailwind.config.js        # Tailwind configuration
│   ├── index.html                # Main HTML file
│   └── src/
│       ├── main.tsx              # React entry point
│       ├── App.tsx               # Main App component
│       ├── index.css             # Global styles (TailwindCSS)
│       ├── components/
│       │   ├── Calculator.tsx    # Main calculator component
│       │   └── ui/               # UI components
│       │       ├── button.tsx    # Button component
│       │       ├── input.tsx     # Input component
│       │       └── card.tsx      # Card component
│       └── lib/
│           └── utils.ts          # Utility functions
└── README.md                     # This file
```

---

## 🚀 **Quick Start**

### Prerequisites
- **Rust** (latest stable version)
- **Node.js** (v18+ recommended)
- **pnpm** (recommended package manager)

### 1. **Clone Repository**
```bash
git clone https://github.com/abdulwahed-sweden/rust-site.git
cd rust-site
```

### 2. **Backend Setup (Rust + Actix-web)**
```bash
# Create backend structure
mkdir -p backend/src/handlers
mkdir -p backend/src/models
mkdir -p backend/src/routes

# Navigate to backend
cd backend

# Initialize Cargo project
cargo init --name backend

# Copy all backend files from project artifacts
# - Copy Cargo.toml
# - Copy src/main.rs
# - Copy src/handlers/mod.rs
# - Copy src/models/mod.rs
# - Copy src/routes/mod.rs

# Run backend server
cargo run
```

**Backend will run on:** `http://localhost:8080`

### 3. **Frontend Setup (React + TypeScript + Vite)**
```bash
# Navigate to frontend
cd ../frontend

# Initialize Vite project
pnpm create vite@latest . --template react-ts

# Install base dependencies
pnpm install

# Install TailwindCSS and plugins
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @types/node

# Install UI dependencies
pnpm add class-variance-authority clsx tailwind-merge
pnpm add lucide-react

# Copy all frontend files from project artifacts
# - Copy package.json, vite.config.ts, tailwind.config.js
# - Copy index.html, src/main.tsx, src/App.tsx
# - Copy src/index.css, src/components/Calculator.tsx
# - Copy all UI components and utilities

# Run frontend development server
pnpm run dev
```

**Frontend will run on:** `http://localhost:5173`

---

## 🌟 **Standard Flow for Future Projects**

```bash
# 🦀 Backend Setup
cargo new backend
cd backend
mkdir src/{handlers,models,routes}
cargo run

# ⚛️ Frontend Setup  
pnpm create vite@latest frontend -- --template react-ts
cd frontend
pnpm install
pnpm add tailwindcss @tailwindcss/vite
pnpm dlx shadcn@latest init
pnpm run dev
```

---

## 🔌 **API Endpoints**

### Health Check
```
GET /api/health
```
**Response:**
```json
{
  "status": "healthy",
  "message": "🦀 Rust backend is running perfectly!",
  "timestamp": "2025-01-01T00:00:00Z",
  "version": "1.0.0"
}
```

### Multiply Numbers
```
GET /api/multiply/{num1}/{num2}
```
**Example:** `/api/multiply/5/3`

**Response:**
```json
{
  "result": 15,
  "message": "Successfully multiplied 5 and 3",
  "operation": "5 × 3 = 15"
}
```

---

## 🧪 **Testing the Application**

### 1. **Start Backend Server**
```bash
cd backend
cargo run
```
You should see:
```
🦀 Starting Rust Backend Server...
📡 Server running on http://localhost:8080
🔗 API Endpoints:
   GET /api/health
   GET /api/multiply/{num1}/{num2}
```

### 2. **Start Frontend Server**
```bash
cd frontend
pnpm run dev
```
You should see:
```
Local:   http://localhost:5173/
```

### 3. **Test the Application**
- Open `http://localhost:5173` in your browser
- Enter two numbers (e.g., 5 and 3)
- Click "Calculate" or press Enter
- You should see the result: "5 × 3 = 15"

### 4. **Test API Directly**
```bash
# Health check
curl http://localhost:8080/api/health

# Multiply numbers
curl http://localhost:8080/api/multiply/5/3
```

---

## 📊 **Performance & Features**

### 🔥 **Performance**
- **Backend**: Rust - Ultra-fast performance and memory safety
- **Frontend**: React 19 - Latest features and optimizations
- **Styling**: Tailwind CSS - Minimal bundle size
- **Build**: Vite - Lightning-fast development builds

### 🛡️ **Security**
- **Type Safety**: TypeScript in Frontend
- **Memory Safety**: Rust in Backend
- **Input Validation**: Comprehensive input checking
- **Error Handling**: Graceful error management

### 🎯 **User Experience**
- **Intuitive Design** - Easy to use interface
- **Instant Feedback** - Loading states and animations
- **Clear Messages** - Success and error notifications
- **Keyboard Shortcuts** - Enter key for quick calculations

---

## 🔄 **Development Workflow**

### Backend Development
```bash
cd backend
cargo run          # Start development server
cargo check        # Check for compilation errors
cargo clippy       # Lint code
cargo test         # Run tests
cargo build --release  # Build for production
```

### Frontend Development
```bash
cd frontend
pnpm run dev       # Start development server
pnpm run build     # Build for production
pnpm run preview   # Preview production build
pnpm run lint      # Lint code
```

---

## 🚀 **Production Deployment**

### Backend
```bash
cd backend
cargo build --release
./target/release/backend
```

### Frontend
```bash
cd frontend
pnpm run build
# Serve the dist/ folder with any web server
```

---

## 🎨 **Design System**

### Color Scheme
- **Primary**: Professional blue tones
- **Secondary**: Subtle grays
- **Success**: Green variants
- **Error**: Red variants
- **Background**: Gradient with glass effects

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, accessible
- **Code**: Monospace for technical elements

### Components
- **Cards**: Modern with glass effect
- **Buttons**: Professional with hover states
- **Inputs**: Clean with focus indicators
- **Icons**: Consistent SVG icons

---

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 **Author**

**Abdulwahed** - Senior Full-Stack Developer & AI Systems Architect

- **Expertise**: Rust, React, TypeScript, AI Integration
- **Focus**: High-performance applications, modern UI/UX
- **Specialization**: Full-stack development, system architecture

---

## 🔗 **Links**

- **Repository**: [https://github.com/abdulwahed-sweden/rust-site](https://github.com/abdulwahed-sweden/rust-site)
- **Backend Documentation**: [Actix-web](https://actix.rs/)
- **Frontend Documentation**: [React](https://react.dev/)
- **Styling Documentation**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)

---

## 🎉 **Project Status**

### ✅ **Completed**
- [x] Backend API with Rust + Actix-web
- [x] Frontend with React + TypeScript
- [x] Modern UI with Tailwind CSS + ShadCN
- [x] Professional design system
- [x] Error handling and validation
- [x] Development workflow setup

### 🚀 **Ready for Production**
- **Backend**: `http://localhost:8080`
- **Frontend**: `http://localhost:5173`
- **API**: `/api/multiply/{num1}/{num2}`

---

**🎯 This project demonstrates modern full-stack development with cutting-edge technologies and professional design patterns.**

**Built with ❤️ using Rust + React + TypeScript + Tailwind CSS**