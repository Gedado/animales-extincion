import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Users,
  TreePine,
  Weight,
  Clock,
  AlertTriangle,
  Shield,
  Lightbulb,
  Images,
} from "lucide-react";
import type { Animal } from "@/lib/animals-data";
import { StatBadge } from "./stat-badge";
import { ImageGallery } from "./image-gallery";

interface AnimalDetailProps {
  animal: Animal;
}

export function AnimalDetail({ animal }: AnimalDetailProps) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden md:h-[70vh]">
        <Image
          src={animal.heroImage}
          alt={`${animal.name} en su habitat natural`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>

            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center rounded-full bg-destructive/90 px-3 py-1 text-xs font-semibold text-foreground">
                {animal.status}
              </span>
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-6xl lg:text-7xl">
                {animal.name}
              </h1>
              <p className="text-lg italic text-muted-foreground">
                {animal.scientificName}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <StatBadge icon={Users} label="Poblacion" value={animal.population} />
            <StatBadge icon={MapPin} label="Ubicacion" value={animal.location} />
            <StatBadge icon={TreePine} label="Habitat" value={animal.habitat} />
            <StatBadge icon={Weight} label="Peso" value={animal.weight} />
            <StatBadge
              icon={Clock}
              label="Esperanza de vida"
              value={animal.lifespan}
            />
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="flex flex-col gap-6 lg:col-span-3">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Acerca de esta especie
              </h2>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                {animal.description}
              </p>

              {/* Fun Fact */}
              <div className="flex gap-4 rounded-xl border border-primary/30 bg-primary/5 p-5">
                <Lightbulb size={24} className="shrink-0 text-primary mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-primary">
                    Dato curioso
                  </span>
                  <p className="text-sm leading-relaxed text-foreground">
                    {animal.funFact}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* Threats */}
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={20} className="text-destructive" />
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Amenazas principales
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {animal.threats.map((threat, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conservation */}
              <div className="flex flex-col gap-4 rounded-xl border border-accent/30 bg-accent/5 p-6">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-accent" />
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Conservacion
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {animal.conservation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-3">
            <Images size={24} className="text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Galeria
            </h2>
          </div>
          <ImageGallery images={animal.gallery} animalName={animal.name} />
        </div>
      </section>

      {/* Back CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Explora mas especies en peligro
          </h2>
          <Link
            href="/#especies"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            <ArrowLeft size={16} />
            Ver todas las especies
          </Link>
        </div>
      </section>
    </main>
  );
}
