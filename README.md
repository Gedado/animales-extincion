# Especies en Peligro de Extincion

Sitio web educativo y estatico que presenta informacion detallada sobre 5 especies animales en peligro de extincion. Construido con **Next.js 16**, exportado como HTML estatico y listo para desplegarse en **GitHub Pages**, **Azure Static Web Apps** o cualquier servidor de archivos estaticos.

---

## Tabla de Contenidos

- [Descripcion General](#descripcion-general)
- [Especies Incluidas](#especies-incluidas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalacion Local](#instalacion-local)
- [Scripts Disponibles](#scripts-disponibles)
- [Generacion del Build Estatico](#generacion-del-build-estatico)
- [Despliegue en GitHub Pages](#despliegue-en-github-pages)
- [Despliegue en Azure Static Web Apps](#despliegue-en-azure-static-web-apps)
- [Arquitectura y Componentes](#arquitectura-y-componentes)
- [Sistema de Diseno](#sistema-de-diseno)
- [Fuentes de Datos](#fuentes-de-datos)
- [Licencia](#licencia)

---

## Descripcion General

El sitio cuenta con dos tipos de paginas:

1. **Home (`/`)** - Pagina principal con hero section, estadisticas globales de la UICN, grilla de tarjetas de las 5 especies y seccion informativa sobre conservacion.
2. **Detalle de especie (`/especie/[id]/`)** - Pagina individual de cada animal con imagen hero, estadisticas (poblacion, ubicacion, habitat, peso, esperanza de vida), descripcion completa, amenazas, esfuerzos de conservacion, dato curioso y galeria de imagenes con lightbox interactivo.

Toda la navegacion es fluida entre paginas con un navbar responsive y un footer compartido.

---

## Especies Incluidas

| Especie | Nombre Cientifico | Estado UICN | Poblacion Estimada |
|---|---|---|---|
| Leopardo de Amur | *Panthera pardus orientalis* | En Peligro Critico | ~120 individuos |
| Vaquita Marina | *Phocoena sinus* | En Peligro Critico | ~10 individuos |
| Orangutan de Sumatra | *Pongo abelii* | En Peligro Critico | ~13,846 individuos |
| Gorila de Montana | *Gorilla beringei beringei* | En Peligro | ~1,063 individuos |
| Tortuga Carey | *Eretmochelys imbricata* | En Peligro Critico | ~20,000 hembras anidadoras |

---

## Tecnologias Utilizadas

| Tecnologia | Version | Proposito |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework React con export estatico |
| [React](https://react.dev/) | 19.2.4 | Libreria de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.3 | Tipado estatico |
| [Tailwind CSS](https://tailwindcss.com/) | 4.2.0 | Framework de estilos utilitarios |
| [Lucide React](https://lucide.dev/) | 0.564.0 | Iconografia |
| [next/image](https://nextjs.org/docs/app/api-reference/components/image) | - | Optimizacion de imagenes |
| [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | - | Carga optimizada de fuentes |

### Fuentes Tipograficas

- **DM Sans** - Fuente principal (body text, navegacion, etiquetas)
- **Playfair Display** - Fuente serif para titulos y encabezados

---

## Estructura del Proyecto

```
/
├── app/
│   ├── globals.css              # Estilos globales y tokens de diseno (Tailwind v4)
│   ├── layout.tsx               # Layout raiz (fuentes, metadata SEO, viewport)
│   ├── page.tsx                 # Pagina Home
│   └── especie/
│       └── [id]/
│           └── page.tsx         # Pagina de detalle de cada especie (generada estaticamente)
│
├── components/
│   ├── navbar.tsx               # Barra de navegacion responsive con menu movil
│   ├── hero-section.tsx         # Seccion hero del home con estadisticas globales
│   ├── species-grid.tsx         # Grilla de tarjetas de especies
│   ├── animal-card.tsx          # Tarjeta individual de cada especie
│   ├── about-section.tsx        # Seccion informativa sobre conservacion
│   ├── animal-detail.tsx        # Contenido completo de la pagina de detalle
│   ├── image-gallery.tsx        # Galeria de imagenes con lightbox interactivo
│   ├── stat-badge.tsx           # Badge de estadistica reutilizable
│   ├── footer.tsx               # Pie de pagina
│   └── ui/                      # Componentes base de shadcn/ui
│
├── lib/
│   ├── animals-data.ts          # Datos de las 5 especies (tipos + contenido)
│   └── utils.ts                 # Utilidades (funcion cn para clases CSS)
│
├── public/
│   └── images/                  # Imagenes de todas las especies
│       ├── leopardo-amur-hero.jpg
│       ├── leopardo-amur-2.jpg
│       ├── leopardo-amur-3.jpg
│       ├── vaquita-hero.jpg
│       ├── vaquita-2.jpg
│       ├── vaquita-3.jpg
│       ├── orangutan-hero.jpg
│       ├── orangutan-2.jpg
│       ├── orangutan-3.jpg
│       ├── gorila-hero.jpg
│       ├── gorila-2.jpg
│       ├── gorila-3.jpg
│       ├── tortuga-hero.jpg
│       ├── tortuga-2.jpg
│       └── tortuga-3.jpg
│
├── next.config.mjs              # Configuracion de Next.js (output: 'export', trailingSlash)
├── tsconfig.json                # Configuracion de TypeScript
├── postcss.config.mjs           # Configuracion de PostCSS
├── package.json                 # Dependencias y scripts
└── README.md                    # Este archivo
```

---

## Requisitos Previos

Antes de comenzar, asegurate de tener instalado:

- **Node.js** >= 18.18.0 (recomendado: 20.x o superior)
- **pnpm** >= 8.0 (gestor de paquetes por defecto)

Para verificar tu instalacion:

```bash
node --version
pnpm --version
```

Si no tienes pnpm instalado:

```bash
npm install -g pnpm
```

---

## Instalacion Local

1. **Clonar el repositorio:**

```bash
git clone https://github.com/<tu-usuario>/<tu-repositorio>.git
cd <tu-repositorio>
```

2. **Instalar dependencias:**

```bash
pnpm install
```

3. **Ejecutar en modo desarrollo:**

```bash
pnpm dev
```

4. **Abrir en el navegador:**

Visita [http://localhost:3000](http://localhost:3000)

---

## Scripts Disponibles

| Script | Comando | Descripcion |
|---|---|---|
| `dev` | `pnpm dev` | Inicia el servidor de desarrollo con HMR (Hot Module Replacement) |
| `build` | `pnpm build` | Genera el build estatico en la carpeta `/out` |
| `start` | `pnpm start` | Sirve la carpeta `/out` localmente con `serve` |
| `lint` | `pnpm lint` | Ejecuta ESLint sobre el proyecto |

---

## Generacion del Build Estatico

El proyecto esta configurado con `output: 'export'` en `next.config.mjs`, lo que significa que al ejecutar el build se genera un directorio `/out` con archivos HTML, CSS y JS completamente estaticos.

```bash
# Generar el build estatico
pnpm build

# Previsualizar localmente el sitio estatico
pnpm start
```

Esto genera la siguiente estructura en `/out`:

```
out/
├── index.html                     # Pagina Home
├── especie/
│   ├── leopardo-de-amur/
│   │   └── index.html             # Detalle del Leopardo de Amur
│   ├── vaquita-marina/
│   │   └── index.html             # Detalle de la Vaquita Marina
│   ├── orangutan-de-sumatra/
│   │   └── index.html             # Detalle del Orangutan de Sumatra
│   ├── gorila-de-montana/
│   │   └── index.html             # Detalle del Gorila de Montana
│   └── tortuga-carey/
│       └── index.html             # Detalle de la Tortuga Carey
├── images/                        # Imagenes estaticas
├── _next/                         # Assets generados por Next.js (JS, CSS)
└── ...
```

Las paginas de especie se generan estaticamente en tiempo de build gracias a la funcion `generateStaticParams()` que itera sobre la lista de animales.

### Configuracion Clave en next.config.mjs

```javascript
const nextConfig = {
  output: 'export',        // Genera HTML estatico en /out
  trailingSlash: true,     // Cada ruta genera un directorio con index.html
  images: {
    unoptimized: true,     // Necesario para export estatico (no hay servidor de imagenes)
  },
}
```

---

## Despliegue en GitHub Pages

### Opcion 1: Despliegue manual

1. Generar el build:

```bash
pnpm build
```

2. Subir el contenido de `/out` a la rama `gh-pages`:

```bash
# Desde la raiz del proyecto
npx gh-pages -d out
```

3. En tu repositorio de GitHub, ir a **Settings > Pages** y configurar:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/ (root)`

### Opcion 2: GitHub Actions (CI/CD automatico)

Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Despues de subir este archivo, ve a **Settings > Pages** y cambia la fuente a **GitHub Actions**.

> **Nota sobre basePath:** Si tu repositorio NO es `<usuario>.github.io` y se sirve desde un subdirectorio (ej. `https://usuario.github.io/mi-repo/`), deberas agregar `basePath: '/mi-repo'` en `next.config.mjs` y actualizar las rutas de imagenes en `animals-data.ts` para incluir el prefijo.

---

## Despliegue en Azure Static Web Apps (Free Tier)

El proyecto ya incluye todos los archivos necesarios para desplegar en Azure Static Web Apps en la version gratuita:

- `staticwebapp.config.json` - Configuracion de rutas, fallback 404, headers de cache y MIME types
- `.github/workflows/azure-static-web-apps.yml` - Workflow de CI/CD automatico

### Paso a paso

1. **Sube tu repositorio a GitHub** (si aun no lo has hecho):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repositorio>.git
git push -u origin main
```

2. **Crea el recurso en Azure Portal:**
   - Ve a [Azure Portal](https://portal.azure.com/) > **Crear un recurso** > busca **Static Web App**
   - Plan: **Free**
   - Region: la mas cercana a tu audiencia
   - Fuente de despliegue: **GitHub**
   - Autoriza Azure para acceder a tu cuenta de GitHub
   - Selecciona tu **organizacion**, **repositorio** y **rama** (`main`)

3. **Configura los valores de build en Azure (MUY IMPORTANTE):**

| Campo | Valor |
|---|---|
| Build Presets | `Custom` |
| App location | `/` |
| Api location | *(dejar completamente vacio)* |
| Output location | `out` |

4. **Obtener el deployment token:**
   - Azure creara el recurso y un workflow automatico. **Elimina** el workflow que Azure genera automaticamente (tu repositorio ya incluye uno optimizado en `.github/workflows/azure-static-web-apps.yml`).
   - Ve a tu recurso de Static Web App en Azure > **Overview** > **Manage deployment token** > copia el token.

5. **Agregar el secret en GitHub:**
   - Ve a tu repositorio en GitHub > **Settings** > **Secrets and variables** > **Actions** > **New repository secret**
   - Nombre: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Valor: el token que copiaste de Azure

6. **Haz push para desplegar:**

```bash
git add .
git commit -m "Deploy to Azure"
git push origin main
```

El workflow de GitHub Actions se ejecutara automaticamente: instalara dependencias con pnpm, generara el build estatico en `/out`, copiara el `staticwebapp.config.json` al output, y lo subira a Azure.

### Archivo staticwebapp.config.json (ya incluido)

Este archivo es **critico** para que Azure maneje correctamente las rutas de las 5 especies. Incluye:

- **Rutas explicitas** para cada especie (rewrite de `/especie/X` a `/especie/X/index.html`)
- **Navigation fallback** a `index.html` para rutas no encontradas
- **Override 404** que redirige a la Home en lugar de mostrar error
- **Cache headers** globales para optimizar carga
- **MIME types** para todos los formatos de archivo usados

### Troubleshooting en Azure

| Problema | Solucion |
|---|---|
| Pagina en blanco al navegar a una especie | Verifica que `staticwebapp.config.json` este en la carpeta `out/` despues del build. El workflow ya lo copia automaticamente. |
| Error 404 en rutas de especie | Asegurate de que `trailingSlash: true` esta en `next.config.mjs` |
| Imagenes no cargan | Confirma que la carpeta `images/` esta dentro de `out/` despues del build |
| El workflow falla en GitHub Actions | Revisa que el secret `AZURE_STATIC_WEB_APPS_API_TOKEN` este configurado correctamente |
| Error "app_location not found" | Verifica que `skip_app_build: true` esta en el workflow y `app_location` apunta a `out` |

---

## Arquitectura y Componentes

### Flujo de Datos

```
animals-data.ts (datos estaticos)
        │
        ├──> page.tsx (Home)
        │       ├──> HeroSection (estadisticas globales)
        │       ├──> SpeciesGrid
        │       │       └──> AnimalCard (x5)
        │       └──> AboutSection
        │
        └──> especie/[id]/page.tsx (Detalle)
                ├──> generateStaticParams() (genera las 5 rutas)
                └──> AnimalDetail
                        ├──> StatBadge (x5)
                        └──> ImageGallery (lightbox interactivo)
```

### Componentes Principales

| Componente | Tipo | Descripcion |
|---|---|---|
| `Navbar` | Client | Navegacion fija con menu hamburguesa en movil |
| `HeroSection` | Server | Hero con titulo, estadisticas UICN y CTAs |
| `SpeciesGrid` | Server | Contenedor de la grilla de tarjetas |
| `AnimalCard` | Client | Tarjeta interactiva con imagen, estado y preview |
| `AboutSection` | Server | Informacion sobre conservacion con tarjetas de caracteristicas |
| `AnimalDetail` | Server | Pagina completa de detalle con todas las secciones |
| `ImageGallery` | Client | Galeria con lightbox, navegacion y indicadores |
| `StatBadge` | Server | Badge reutilizable para mostrar estadisticas con icono |
| `Footer` | Server | Pie de pagina con enlaces y creditos |

### Modelo de Datos

La interfaz `Animal` en `lib/animals-data.ts` define la estructura de cada especie:

```typescript
interface Animal {
  id: string;              // Slug para la URL (ej: "leopardo-de-amur")
  name: string;            // Nombre comun
  scientificName: string;  // Nombre cientifico en italica
  status: string;          // Estado de conservacion UICN
  population: string;      // Poblacion estimada actual
  location: string;        // Region geografica
  habitat: string;         // Tipo de habitat
  weight: string;          // Rango de peso
  lifespan: string;        // Esperanza de vida
  heroImage: string;       // Ruta de imagen principal
  gallery: string[];       // Rutas de imagenes para la galeria
  shortDescription: string;// Descripcion breve (para tarjetas)
  description: string;     // Descripcion completa
  threats: string[];       // Lista de amenazas principales
  conservation: string;    // Esfuerzos de conservacion
  funFact: string;         // Dato curioso
}
```

---

## Sistema de Diseno

### Paleta de Colores

El sitio utiliza un tema oscuro inspirado en la naturaleza, definido mediante design tokens CSS en `globals.css`:

| Token | Descripcion | Uso |
|---|---|---|
| `--background` | Verde muy oscuro | Fondo general del sitio |
| `--foreground` | Crema claro | Texto principal |
| `--primary` | Dorado ambar | Acentos, CTAs, titulos destacados |
| `--card` | Verde oscuro | Fondo de tarjetas y contenedores |
| `--muted-foreground` | Gris verdoso | Texto secundario y descripciones |
| `--accent` | Verde bosque | Acentos secundarios (conservacion) |
| `--destructive` | Rojo alarma | Estados de peligro y amenazas |
| `--border` | Verde oscuro sutil | Bordes y separadores |

### Tipografia

- **Titulos y encabezados:** Playfair Display (serif) - Clase `font-serif`
- **Texto general:** DM Sans (sans-serif) - Clase `font-sans`

### Responsive Design

El sitio es completamente responsive con breakpoints de Tailwind:

- **Mobile** (< 768px): Layout de una columna, menu hamburguesa
- **Tablet** (768px - 1024px): Grilla de 2 columnas para tarjetas
- **Desktop** (> 1024px): Grilla de 3 columnas, layout completo con sidebar

---

## Fuentes de Datos

Toda la informacion sobre las especies es factual y esta basada en datos publicos de:

- [Lista Roja de la UICN](https://www.iucnredlist.org/) - Estado de conservacion y poblaciones
- [WWF](https://www.worldwildlife.org/) - Informacion sobre amenazas y conservacion
- [CITES](https://cites.org/) - Regulaciones de comercio internacional

> Los datos contenidos en el sitio son de caracter educativo e informativo.

---

## Licencia

Este proyecto es de uso educativo. Las imagenes fueron generadas por IA y no representan fotografias reales de los animales.
