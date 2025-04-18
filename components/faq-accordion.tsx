"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "¿Cuánto tiempo tarda en generarse mi ilustración?",
      answer:
        "Normalmente, tu ilustración estará lista en menos de 10 minutos. Si eliges la opción de entrega rápida, la recibirás en aproximadamente 3-5 minutos.",
    },
    {
      question: "¿Qué tipo de fotos funcionan mejor?",
      answer:
        "Las fotos con buena iluminación, donde se vea claramente el rostro y con un fondo simple suelen dar los mejores resultados. Evita fotos borrosas o muy oscuras.",
    },
    {
      question: "¿Puedo solicitar modificaciones  Evita fotos borrosas o muy oscuras.",
    },
    {
      question: "¿Puedo solicitar modificaciones a mi ilustración?",
      answer:
        "Sí, ofrecemos una revisión gratuita si no estás satisfecho con el resultado. Simplemente responde al correo con tu ilustración indicando los cambios que deseas.",
    },
    {
      question: "¿En qué formato recibiré mi ilustración?",
      answer:
        "Recibirás tu ilustración en formato JPG de alta calidad. Si seleccionas la opción de alta resolución, también recibirás una versión en PNG con fondo transparente.",
    },
    {
      question: "¿Puedo usar mi ilustración comercialmente?",
      answer:
        "Las ilustraciones son para uso personal. Si necesitas derechos comerciales, contáctanos para obtener una licencia especial.",
    },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Preguntas frecuentes</h2>
        <p className="text-gray-600 mt-2">Todo lo que necesitas saber sobre nuestro servicio</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 className="font-medium">{faq.question}</h3>
              <ChevronDown
                className={`h-5 w-5 text-violet-600 transition-transform ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 pt-0 border-t text-gray-600">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
