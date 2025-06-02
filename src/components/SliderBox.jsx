"use client"

import { useState, useRef, useEffect } from "react"

const SliderBox = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const sliderRef = useRef(null)

  const ringStyles = [
    {
      name: "BEZEL",
      image: "/images/home-slide-one/one.webp",
    },
    {
      name: "SOLITAIRE",
      image: "/images/home-slide-one/two.webp",
    },
    {
      name: "TRILOGY",
      image: "/images/home-slide-one/three.jpg",
    },
    {
      name: "HALO",
      image: "/images/home-slide-one/four.webp",
    },
    {
      name: "TOI ET MOI",
      image: "/images/home-slide-one/five.jpg",
    },
  ]

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4) // lg: show all 4
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3) // md: show 3
      } else {
        setItemsPerView(1) // sm: show 1
      }
    }

    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])

  const maxSlides = Math.max(0, ringStyles.length - itemsPerView)

  const nextSlide = () => {
    if (currentSlide < maxSlides) {
      setCurrentSlide((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
  }

  const slideWidth = 100 / itemsPerView

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
          Shop By Category
        </h1>
        <p className="text-gray-600 text-xs">
          Explore engagement rings, women's wedding rings, men's wedding rings and fine jewellery.
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * slideWidth}%)`,
          }}
        >
          {ringStyles.map((style, index) => (
            <div key={style.name} className="flex-shrink-0 px-3" style={{ width: `${slideWidth}%` }}>
              <div className="group cursor-pointer ">
                {/* Ring Image Container */}
                <div className="aspect-[3/4] md:aspect-[4/5] bg-gray-100 overflow-hidden mb-4 relative transition-transform duration-300 ease-in-out hover:scale-105">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${style.image})`,
                      backgroundPosition:
                        index === 0 ? "0% 0%" : index === 1 ? "33.33% 0%" : index === 2 ? "66.66% 0%" : "100% 0%",
                    }}
                  />
                </div>

                {/* Style Name */}
                <div className="flex items-center justify-start gap-4">
                  <h3 className="text-xs font-semibold text-gray-900 tracking-wide">{style.name}</h3>
                   <svg
                        className="w-5 h-4 text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {/* Arrow with tail */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        <line x1="0" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Show based on slide position */}
        {currentSlide < maxSlides && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {currentSlide > 0 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default SliderBox
