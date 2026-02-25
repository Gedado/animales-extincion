import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { animals, getAnimalById } from "@/lib/animals-data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimalDetail } from "@/components/animal-detail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return animals.map((animal) => ({
    id: animal.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const animal = getAnimalById(id);

  if (!animal) {
    return { title: "Especie no encontrada" };
  }

  return {
    title: `${animal.name} - Especies en Peligro`,
    description: animal.shortDescription,
  };
}

export default async function EspeciePage({ params }: PageProps) {
  const { id } = await params;
  const animal = getAnimalById(id);

  if (!animal) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="pt-[72px]">
        <AnimalDetail animal={animal} />
      </div>
      <Footer />
    </>
  );
}
