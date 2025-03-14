"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function RandomPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push("https://ptakeemsaifegro.net/4/9083631")
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900">
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold mb-4">loading {countdown} seconds...</h1>
        <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin mx-auto"></div>
      </div>
    </main>
  )
}

