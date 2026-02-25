import { Shield, Leaf, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Proteccion de Habitat",
    description:
      "La conservacion de los ecosistemas naturales es fundamental para la supervivencia de las especies amenazadas.",
  },
  {
    icon: Leaf,
    title: "Desarrollo Sostenible",
    description:
      "Promover practicas que permitan el desarrollo humano sin destruir los recursos naturales del planeta.",
  },
  {
    icon: Heart,
    title: "Programas de Cria",
    description:
      "Los programas de cria en cautiverio ayudan a aumentar las poblaciones de especies al borde de la extincion.",
  },
  {
    icon: Globe,
    title: "Cooperacion Global",
    description:
      "La proteccion de la biodiversidad requiere esfuerzos coordinados entre paises y organizaciones a nivel mundial.",
  },
];

export function AboutSection() {
  return (
    <section id="acerca" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Nuestra mision
            </span>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Por que Importa la Conservacion
            </h2>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              La extincion de especies no es solo una tragedia ecologica, sino
              una amenaza directa para la humanidad. Cada especie que
              desaparece debilita los ecosistemas de los que dependemos para el
              agua, el alimento y el aire que respiramos. Segun la Lista Roja de
              la UICN, mas de 41,000 especies estan actualmente amenazadas.
            </p>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              La tasa actual de extincion es aproximadamente 1,000 veces mayor
              que la tasa natural, impulsada principalmente por la actividad
              humana: destruccion de habitats, cambio climatico, contaminacion y
              caza furtiva.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
