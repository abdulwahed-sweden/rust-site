import { Calculator } from './components/Calculator'
import './index.css'

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🦀 Rust × React Calculator
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            A high-performance multiplication calculator built with Rust backend and React frontend
          </p>
        </header>
        
        <main className="flex justify-center mb-12">
          <Calculator />
        </main>
        
        <footer className="text-center text-white/80">
          <div className="max-w-lg mx-auto glass-effect rounded-lg p-6">
            <p className="text-sm">
              Built with ❤️ using <strong>Rust + Actix-web</strong> backend and <strong>React + TypeScript + Vite</strong> frontend
            </p>
            <div className="mt-2 text-xs opacity-75">
              Backend: localhost:8080 | Frontend: localhost:5173
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App