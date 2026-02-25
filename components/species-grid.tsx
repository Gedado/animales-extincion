import { animals } from "@/lib/animals-data";
import { AnimalCard } from "./animal-card";

export function SpeciesGrid() {
  return (
    <section id="especies" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Conoce a las especies
          </span>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Animales al Borde de la Extincion
          </h2>
          <p className="max-w-2xl text-muted-foreground leading-relaxed text-pretty">
            Estas cinco especies representan la fragilidad de la vida en nuestro
            planeta. Cada una enfrenta amenazas unicas que ponen en riesgo su
            existencia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal, index) => (
            <AnimalCard key={animal.id} animal={animal} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
