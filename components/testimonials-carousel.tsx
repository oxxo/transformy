"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  avatar?: string
  avatarFallback: string
  avatarColor: string
  text: string
  rating: number
  date: string
  image?: string
  style?: string
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "María G.",
      avatarFallback: "MG",
      avatarColor: "from-violet-400 to-purple-400",
      text: "¡Increíble! Convertí mi foto en estilo Ghibli y quedó espectacular. El proceso fue súper fácil y rápido. Definitivamente lo recomendaría a cualquiera que quiera un recuerdo especial.",
      rating: 5,
      date: "Hace 2 días",
      image: "/anime-transformation.png",
      style: "Ghibli",
    },
    {
      id: 2,
      name: "Juan P.",
      avatarFallback: "JP",
      avatarColor: "from-blue-400 to-cyan-400",
      text: "Regalé una ilustración en estilo Anime a mi novia y le encantó. La calidad es impresionante, parece hecho por un artista profesional. El servicio al cliente también fue excelente.",
      rating: 5,
      date: "Hace 1 semana",
      image: "/minimalist-transformation.png",
      style: "Anime",
    },
    {
      id: 3,
      name: "Laura S.",
      avatarFallback: "LS",
      avatarColor: "from-pink-400 to-rose-400",
      text: "He probado varios servicios similares y este es, sin duda, el mejor. La calidad y el tiempo de entrega son excelentes. Ya he pedido tres ilustraciones diferentes y todas son perfectas.",
      rating: 5,
      date: "Hace 3 días",
      image: "/forest-spirit-glade.png",
      style: "Watercolor",
    },
    {
      id: 4,
      name: "Carlos M.",
      avatarFallback: "CM",
      avatarColor: "from-amber-400 to-orange-400",
      text: "Convertí una foto familiar en estilo acuarela y ahora está enmarcada en nuestra sala. ¡Todos los visitantes preguntan por ella! Definitivamente volveré a usar este servicio.",
      rating: 4,
      date: "Hace 2 semanas",
      image: "/whimsical-forest-path.png",
      style: "Watercolor",
    },
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute top-0 left-0 w-32 h-32 bg-violet-100 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full filter blur-3xl opacity-70 -z-10"></div>

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Lo que dicen nuestros clientes</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Miles de personas ya han transformado sus fotos en obras de arte digital
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
            onHoverStart={() => setAutoplay(false)}
            onHoverEnd={() => setAutoplay(true)}
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={`Ejemplo de estilo ${testimonials[currentIndex].style}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      Estilo {testimonials[currentIndex].style}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonials[currentIndex].rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-violet-200 rotate-180" />
                        <p className="text-gray-700 italic mb-6 pl-4">{testimonials[currentIndex].text}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={testimonials[currentIndex].avatar || "/placeholder.svg"} />
                          <AvatarFallback
                            className={`bg-gradient-to-r ${testimonials[currentIndex].avatarColor} text-white`}
                          >
                            {testimonials[currentIndex].avatarFallback}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{testimonials[currentIndex].name}</p>
                          <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
                        </div>
                      </div>
                      <div className="text-sm text-violet-600 font-medium">Cliente verificado</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 bg-white shadow-lg rounded-full z-10"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white shadow-lg rounded-full z-10"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-violet-600" : "bg-gray-300"
              } transition-colors`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
