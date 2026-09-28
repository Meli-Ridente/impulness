# Impulness — web (React + Vite)

## Arrancar
```bash
npm install
npm run dev        # desarrollo → http://localhost:5173
npm run build      # genera /dist listo para subir
npm run preview    # probar el build en local
```
Requiere Node 18 o superior.

## Dónde tocar cada cosa
| Qué | Dónde |
|---|---|
| Textos y estructura de cada sección | `src/sections/*.jsx` (los textos ES/EN están en `t("es", "en")`) |
| Estilos de cada sección | `src/sections/*.css` |
| Colores, tipografías, botones (sistema Nocturne) | `src/styles/global.css` |
| WhatsApp, intensidad de animación, mostrar/ocultar Planes o Reels | `src/config.js` |
| Imágenes de casos y reels | `src/data/imageSlots.js` |
| Título, descripción, SEO, datos estructurados | `index.html` |
| Favicon, imagen para redes, robots, sitemap | `public/` |

## Desplegar
Vercel, Netlify o Cloudflare Pages: conecta el repositorio, comando `npm run build`, carpeta de salida `dist`. Después apunta el dominio impulness.es.

## ANTES de publicar (ver PENDIENTES.md)
Hay texto de relleno, métricas y testimonios ficticios que hay que sustituir.

## Con Docker (sin instalar Node)
```bash
docker compose up                      # desarrollo → http://localhost:5173
docker build -t impulness-web . && docker run -p 8080:80 impulness-web   # versión final → http://localhost:8080
```

## Problemas típicos en Windows
- `npm no se reconoce` → instala Node.js LTS (nodejs.org) y abre una terminal NUEVA.
- `la ejecución de scripts está deshabilitada` → usa `cmd` en vez de PowerShell, o ejecuta
  `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.
