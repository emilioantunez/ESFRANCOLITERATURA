# El rincón franco

[![Deploy (pages)](https://github.com/emilioantunez/elrinconfranco/actions/workflows/deploy.yml/badge.svg)](https://github.com/emilioantunez/elrinconfranco/actions/workflows/deploy.yml)
[![Deploy (gh-pages fallback)](https://github.com/emilioantunez/elrinconfranco/actions/workflows/deploy-branch.yml/badge.svg)](https://github.com/emilioantunez/elrinconfranco/actions/workflows/deploy-branch.yml)

**Autor:** Emilio Sebastián Franco  
**Repositorio:** [elrinconfranco](https://github.com/emilioantunez/elrinconfranco.git)

---

## ✨ Sobre el proyecto
**El rincón franco** es un blog literario dedicado a la **poesía, relatos y cuentos**.  
La literatura desde mi verdad. Escrito por **Emilio Sebastián Franco**, este espacio comparte textos originales que exploran sensibilidad, imaginación y verdad personal.

El proyecto tiene como objetivo crear un lugar íntimo y creativo donde los lectores puedan sumergirse en la palabra escrita, al mismo tiempo que se optimiza su visibilidad en la web.

---

## 🚀 Tecnologías
Este blog está pensado para construirse con:
- **HTML5**, **CSS3**, **JavaScript**
- Framework recomendado: **Next.js** o **Astro** (ideal para rendimiento y SEO)  
- Generación estática para mayor velocidad y compatibilidad con GitHub Pages.  
- Integración con **schema.org** y **metadatos SEO** para mejorar el posicionamiento.  

---

## 🌐 Dominio y SEO
El blog se publicará en el subdominio asociado al repositorio:
https://emilioantunez.github.io/elrinconfranco/

### Despliegue
- Producción: https://emilioantunez.github.io/elrinconfranco/
- Workflow: .github/workflows/deploy.yml (deploy a GitHub Pages en push a main)


### Estrategia SEO
- Uso de metaetiquetas personalizadas (title, description, keywords).  
- Rich snippets con **schema.org/Blog** y **schema.org/Person** para vincular al autor.  
- Optimización para indexación en Google, Bing y motores alternativos.  
- URL limpias y estructura clara para mejorar la experiencia del lector.  

Ejemplo de snippet HTML para SEO:

```html
<head>
  <title>El rincón franco - La literatura desde mi verdad</title>
  <meta name="description" content="Blog literario de Emilio Sebastián Franco. Poesía, relatos y cuentos originales con un estilo único y personal.">
  <meta name="keywords" content="poesía, relatos, cuentos, literatura, blog literario, Emilio Sebastián Franco">
  <meta name="author" content="Emilio Sebastián Franco">
</head>

SCHEMA: <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "url": "https://emilioantunez.github.io/elrinconfranco/",
  "name": "El rincón franco",
  "description": "La literatura desde mi verdad. Textos por Emilio Sebastián Franco.",
  "author": {
    "@type": "Person",
    "name": "Emilio Sebastián Franco"
  }
}
</script>
```
