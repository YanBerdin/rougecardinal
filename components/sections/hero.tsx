"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "L'Art de Raconter",
      subtitle: "Des histoires qui résonnent",
      description: "Découvrez notre dernière création, une œuvre captivante qui explore les méandres de l'âme humaine.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Découvrir le spectacle"
    },
    {
      title: "Saison 2024-2025",
      subtitle: "Une programmation exceptionnelle",
      description: "Quatre créations inédites vous attendent cette saison, mêlant tradition et modernité.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200",
      cta: "Voir la programmation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/spectacles">
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Play className="mr-2 h-5 w-5" />
              Voir la bande-annonce
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}