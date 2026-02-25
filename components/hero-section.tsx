import { ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">
            Cada Jorge cuenta, ni uno menos
          </span>
        </div>

        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          Especies en{" "}
          <span className="text-primary">Peligro</span>{" "}
          de Extincion
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
          Cada dia, especies unicas desaparecen de nuestro planeta para siempre.
          Conoce a los animales que luchan por sobrevivir y descubre como podemos
          proteger la biodiversidad de la Tierra.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#especies"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
          >
            Explorar Especies
            <ArrowDown size={16} />
          </Link>
          <Link
            href="#acerca"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Saber mas
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
              41,000+
            </span>
            <span className="text-xs text-muted-foreground md:text-sm">
              Especies amenazadas
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
              1,000x
            </span>
            <span className="text-xs text-muted-foreground md:text-sm">
              Tasa de extincion
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-3xl font-bold text-primary md:text-4xl">
              ~1M
            </span>
            <span className="text-xs text-muted-foreground md:text-sm">
              En riesgo total
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
}
