"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  animalName: string;
}

export function ImageGallery({ images, animalName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + images.length) % images.length
      );
    }
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={`Ver imagen ${index + 1} de ${animalName}`}
          >
            <Image
              src={image}
              alt={`${animalName} - Imagen ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full bg-background/80 px-4 py-2 text-xs font-medium text-foreground backdrop-blur-sm">
                Ver imagen
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
          onClick={closeLightbox}
          role="dialog"
          aria-label={`Galeria de imagenes de ${animalName}`}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Cerrar galeria"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:left-8"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="relative mx-16 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-xl md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex]}
              alt={`${animalName} - Imagen ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:right-8"
            aria-label="Siguiente imagen"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
