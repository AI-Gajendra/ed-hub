"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Tilt from 'react-parallax-tilt';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 5,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 4,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 3,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 5,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 4,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 5,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    id: 5,
    name: "John Doe",
    image: "/johnProfile.png",
    rating: 4,
    text: "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
]

export default function Testimonials() {
  const [cardsToShow, setCardsToShow] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(cardsToShow)
  const [isAnimating, setIsAnimating] = useState(false)

  const totalCards = testimonials.length
  const duplicatedSlides = [
    ...testimonials.slice(-cardsToShow),
    ...testimonials,
    ...testimonials.slice(0, cardsToShow),
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else {
        setCardsToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Reset index to avoid out-of-bounds when screen size changes
    setCurrentIndex(cardsToShow)
  }, [cardsToShow])

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    setIsAnimating(false)
    if (currentIndex >= totalCards + cardsToShow) {
      setCurrentIndex(cardsToShow)
    } else if (currentIndex === 0) {
      setCurrentIndex(totalCards)
    }
  }

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Testimonials</h2>
            <p className="text-xl text-gray-700">Don&apos;t just take our word for it.</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row">
          {/* Rating Section */}
          <div className="md:w-1/4 mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <div className="text-xl font-bold text-gray-900 mb-2">EXCELLENT</div>
            <br />
            <div className="text-sm text-gray-600 mb-2">Based on 7 reviews</div>
            <Image src="/Google_logo.png" alt="Google" width={80} height={30} className="h-6 w-auto object-contain" />
          </div>

          {/* Slider Section */}
          <div className="md:w-3/4 overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out`}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(-${(100 / duplicatedSlides.length) * currentIndex}%)`,
                width: `${(duplicatedSlides.length / cardsToShow) * 100}%`,
              }}
            >
              {duplicatedSlides.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-4"
                  style={{ width: `${100 / duplicatedSlides.length}%` }}
                >
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={false}
                    glareMaxOpacity={0.45}
                    tiltAngleYInitial={60}
                    scale={1.02}
                  >
                    <div className="bg-[#8FDDAA] rounded-3xl p-6 h-full">
                      <div className="flex items-center mb-4">
                        <div className="relative w-12 h-12 mr-3 rounded-full overflow-hidden border-3 border-[#F9326F]">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-black">{testimonial.name}</h3>
                        </div>
                      </div>
                      <p className="text-black">{testimonial.text}</p>
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}