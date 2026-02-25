"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Animal } from "@/lib/animals-data";

interface AnimalCardProps {
  animal: Animal;
  index: number;
}

export function AnimalCard({ animal, index }: AnimalCardProps) {
  return (
    <Link
      href={`/especie/${animal.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(180,140,50,0.1)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={animal.heroImage}
          alt={`Fotografia de ${animal.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-destructive/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
            {animal.status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {animal.name}
          </h3>
          <p className="text-xs italic text-muted-foreground">
            {animal.scientificName}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {animal.shortDescription}
        </p>

        <div className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin size={14} className="text-primary" />
          <span>{animal.location}</span>
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
          <span>Conocer mas</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
