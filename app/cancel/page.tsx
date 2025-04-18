"use client"

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import MainLayout from "../components/main-layout"

export default function CancelPage() {
  return (
    <MainLayout>
      <div className="container max-w-3xl mx-auto py-16 px-4">
        <div className="text-center space-y-8 py-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-600"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Pago cancelado</h1>

          <p className="text-gray-600 text-lg">
            Tu proceso de pago ha sido cancelado. No se ha realizado ningún cargo a tu tarjeta.
          </p>

          <div className="bg-amber-50 p-4 rounded-xl text-amber-800 inline-block mx-auto">
            <div className="flex items-center gap-2 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Si experimentaste algún problema, por favor contáctanos</span>
            </div>
          </div>

          <div className="pt-6">
            <Link href="/">
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full px-6 py-2.5 shadow-md hover:shadow-lg transition-all duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
