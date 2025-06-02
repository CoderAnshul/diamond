import React from 'react'

const ServicesGrid = () => {
  const services = [
    {
      title: "SHOWROOMS",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Jewelry showroom with display cases and seating area"
    },
    {
      title: "APPOINTMENTS",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Hand trying on engagement ring during consultation"
    },
    {
      title: "CUSTOM RINGS",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Craftsperson working on custom jewelry with tools"
    },
    {
      title: "GET IN TOUCH",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Jewelry consultation with rings on display tray"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
          Receive custom engagement ring guidance from our expert team in person and online.
        </p>
      </div>

      {/* Services Grid - Responsive Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {services.map((service, index) => (
          <div key={service.title} className="group cursor-pointer">
            {/* Service Image Container */}
            <div className="relative overflow-hidden bg-gray-100 mb-4">
              {/* Different aspect ratios for different screen sizes to match your images */}
              <div className="aspect-[4/5] md:aspect-[2/1] lg:aspect-[4/5]">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Service Title with Arrow */}
            <div className="flex items-center justify-between px-1">
              <h3 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">
                {service.title}
              </h3>
              <svg
                className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesGrid