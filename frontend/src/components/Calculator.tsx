import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

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
    setError(null)
    setResult(null)

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
      console.log(`Sending request to /api/multiply/${n1}/${n2}`)
      
      const response = await fetch(`/api/multiply/${n1}/${n2}`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data: MultiplyResponse = await response.json()
      console.log('Response received:', data)
      
      setResult(data)
    } catch (err) {
      console.error('Calculation error:', err)
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
    <Card className="w-full max-w-lg mx-auto modern-card animate-pulse-glow">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <CardTitle className="text-2xl font-semibold text-foreground">
          Multiplier
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Enter two numbers to calculate their product
        </p>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Input Fields */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="num1" className="block text-sm font-medium text-foreground">
              First Number
            </label>
            <Input
              id="num1"
              type="number"
              placeholder="Enter first number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              onKeyPress={handleKeyPress}
              className="input-modern text-lg h-12"
              disabled={isLoading}
            />
          </div>
          
          <div className="flex justify-center py-2">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted">
              <svg
                className="w-4 h-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="num2" className="block text-sm font-medium text-foreground">
              Second Number
            </label>
            <Input
              id="num2"
              type="number"
              placeholder="Enter second number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              onKeyPress={handleKeyPress}
              className="input-modern text-lg h-12"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleCalculate}
            disabled={isLoading}
            className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base"
          >
            {isLoading ? (
              <>
                <svg className="w-5 h-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculating...
              </>
            ) : (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculate
              </>
            )}
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            disabled={isLoading}
            className="px-8 h-12 text-base"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset
          </Button>
        </div>

        {/* Results */}
        {result && (
          <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800 animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-800">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-green-800 dark:text-green-200">Success</span>
              </div>
              <div className="text-2xl font-bold text-green-800 dark:text-green-200 mb-3">
                {result.operation}
              </div>
              <div className="text-5xl font-bold text-green-900 dark:text-green-100 mb-4">
                {result.result.toLocaleString()}
              </div>
              <div className="text-sm text-green-700 dark:text-green-300">
                {result.message}
              </div>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 animate-fade-in">
            <div className="flex items-center gap-3 text-red-800 dark:text-red-200 mb-2">
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-800">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-semibold">Error</span>
            </div>
            <div className="text-red-700 dark:text-red-300 ml-11">
              {error}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="text-center pt-6 border-t border-border">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Press Enter to calculate</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Powered by Rust</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}