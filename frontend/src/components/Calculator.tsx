import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Calculator as CalculatorIcon, Loader2, AlertCircle, CheckCircle } from 'lucide-react'

interface MultiplyResponse {
  result: number
  message: string
  operation: string
}

export const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('')
  const [num2, setNum2] = useState<string>('')
  const [result, setResult] = useState<MultiplyResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleCalculate = async () => {
    // Clear previous states
    setError(null)
    setResult(null)

    // Validation
    if (!num1 || !num2) {
      setError('Please enter both numbers')
      return
    }

    const n1 = parseInt(num1)
    const n2 = parseInt(num2)

    if (isNaN(n1) || isNaN(n2)) {
      setError('Please enter valid numbers')
      return
    }

    setIsLoading(true)

    try {
      console.log(`🔄 Sending request to /api/multiply/${n1}/${n2}`)
      
      const response = await fetch(`/api/multiply/${n1}/${n2}`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data: MultiplyResponse = await response.json()
      console.log('✅ Response received:', data)
      
      setResult(data)
    } catch (err) {
      console.error('❌ Calculation error:', err)
      setError(
        err instanceof Error 
          ? `Failed to calculate: ${err.message}` 
          : 'Failed to calculate. Please check if the backend server is running on localhost:8080'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setNum1('')
    setNum2('')
    setResult(null)
    setError(null)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate()
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-2xl glass-effect animate-fade-in">
      <CardHeader className="text-center pb-4">
        <CardTitle className="flex items-center justify-center gap-3 text-3xl text-gray-800">
          <CalculatorIcon className="w-8 h-8 text-blue-600" />
          Multiplier
        </CardTitle>
        <p className="text-sm text-gray-600 mt-2">
          Enter two numbers to multiply them together
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="num1" className="block text-sm font-medium text-gray-700 mb-2">
              First Number
            </label>
            <Input
              id="num1"
              type="number"
              placeholder="Enter first number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full text-lg"
              disabled={isLoading}
            />
          </div>
          
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-400">×</span>
          </div>
          
          <div>
            <label htmlFor="num2" className="block text-sm font-medium text-gray-700 mb-2">
              Second Number
            </label>
            <Input
              id="num2"
              type="number"
              placeholder="Enter second number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full text-lg"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleCalculate}
            disabled={isLoading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <CalculatorIcon className="w-5 h-5 mr-2" />
                Calculate
              </>
            )}
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            disabled={isLoading}
            className="px-6 py-3"
          >
            Reset
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="p-6 bg-green-50 rounded-lg border border-green-200 animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-800">Success!</span>
              </div>
              <div className="text-2xl font-bold text-green-800 mb-2">
                {result.operation}
              </div>
              <div className="text-4xl font-bold text-green-900 mb-3">
                {result.result.toLocaleString()}
              </div>
              <div className="text-sm text-green-700">
                {result.message}
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="p-6 bg-red-50 rounded-lg border border-red-200 animate-fade-in">
            <div className="flex items-center gap-2 text-red-800 mb-2">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">Error</span>
            </div>
            <div className="text-red-700">
              {error}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t">
          <p>💡 Press Enter to calculate quickly</p>
          <p className="mt-1">🦀 Powered by Rust backend</p>
        </div>
      </CardContent>
    </Card>
  )
}