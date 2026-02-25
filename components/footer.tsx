import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-primary-foreground"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="font-serif text-base font-bold text-foreground">
            Vida Salvaje
          </span>
        </Link>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Informacion educativa sobre especies en peligro de extincion.
          Datos obtenidos de la Lista Roja de la UICN, WWF y organizaciones
          de conservacion reconocidas.
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link
            href="/#especies"
            className="transition-colors hover:text-primary"
          >
            Especies
          </Link>
          <Link
            href="/#acerca"
            className="transition-colors hover:text-primary"
          >
            Acerca de
          </Link>
        </div>
        <p className="text-xs text-muted-foreground/60">
          {"Datos basados en informacion publica de la UICN y WWF. Sitio con fines educativos."}
        </p>
      </div>
    </footer>
  );
}
