"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface CountdownTimerProps {
  initialHours?: number
  initialMinutes?: number
  initialSeconds?: number
  onComplete?: () => void
  className?: string
}

export function CountdownTimer({
  initialHours = 2,
  initialMinutes = 45,
  initialSeconds = 30,
  onComplete,
  className,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          if (onComplete) {
            onComplete()
          }
          clearInterval(timer)
          return prev
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onComplete])

  const formatTime = (value: number) => {
    return String(value).padStart(2, "0")
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Clock className="h-4 w-4" />
      <div className="flex items-center">
        <div className="bg-black/80 text-white px-2 py-1 rounded-md font-mono">{formatTime(timeLeft.hours)}</div>
        <span className="mx-1 font-bold">:</span>
        <div className="bg-black/80 text-white px-2 py-1 rounded-md font-mono">{formatTime(timeLeft.minutes)}</div>
        <span className="mx-1 font-bold">:</span>
        <div className="bg-black/80 text-white px-2 py-1 rounded-md font-mono">{formatTime(timeLeft.seconds)}</div>
      </div>
    </div>
  )
}
