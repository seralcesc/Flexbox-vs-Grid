# 📊 Flexbox vs. CSS Grid | Estudio Práctico de Maquetación Responsive

¡Bienvenido a mi repositorio! Este proyecto es un ejercicio práctico desarrollado para el módulo de **Lenguajes de Marcas** en el primer año de **Desarrollo de Aplicaciones Multiplataforma (1º de DAM)**. El objetivo principal es explorar y contrastar de manera profunda las dos especificaciones de maquetación más potentes de la plataforma web moderna de cara a los estándares profesionales de **2026**: CSS Flexbox y CSS Grid.

---

## 🚀 Tecnologías y Estándares Utilizados

Para garantizar la máxima modernidad, velocidad de renderizado y cumplimiento de los **Core Web Vitals**, el proyecto se ha construido utilizando tecnologías web nativas puras, prescindiendo por completo de frameworks pesados o preprocesadores:

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Estándar 2026](https://img.shields.io/badge/Estándar-W3C__2026-6366f1?style=for-the-badge)

---

## 🌟 Características Destacadas del Proyecto

### 1. Sistema Dual Clear/Dark Mode Inteligente (Anti-FOUC)

El proyecto incluye un interruptor interactivo que alterna la apariencia global del sitio entre un tema claro y uno oscuro.

- **Arquitectura de rendimiento:** Para evitar el molesto parpadeo blanco inicial al cargar la página (**FOUC - Flash of Unstyled Content**), se implementó un script síncrono autoejecutable en el `<head>`. Este script lee de forma prioritaria las preferencias en el `localStorage` o el esquema de color del sistema operativo (`prefers-color-scheme`), inyectando el atributo `data-theme` antes de pintar el cuerpo (`<body>`).

### 2. Diseño Fluido con Funciones Avanzadas de CSS

- **Tipografía Adaptativa:** El tamaño base de la fuente responde elásticamente al ancho del dispositivo mediante la función `clamp()`, calculada de manera precisa en base al ancho de la ventana gráfica (`vw`). Esto elimina la necesidad de saturar el código con múltiples breakpoints en Media Queries.
- **Optimización de Renderizado:** La hoja de estilos principal se descarga con prioridad máxima mediante el atributo nativo `fetchpriority="high"`, optimizando directamente el **LCP (Largest Contentful Paint)**.

### 3. Maquetación Profesional Unidimensional vs. Bidimensional

El cuerpo del documento se divide de manera didáctica en dos grandes bloques semánticos:

- **Módulo Flexbox:** Enfocado en la distribución de componentes en un solo eje fluido (unidimensional). Implementa un diseño adaptativo capaz de colapsar en columnas verticales mediante reglas de responsividad en dispositivos móviles.
- **Módulo CSS Grid (Efecto Bento/Masonry):** Un mosaico asimétrico complejo que utiliza la propiedad avanzada `grid-auto-flow: dense` combinada con expansiones de filas y columnas (`span`). Genera un orden jerárquico dinámico y aprovecha el espacio disponible de forma inteligente.

---

## 📁 Estructura del Proyecto

La estructura del código sigue una filosofía modular, limpia y sin anidamientos innecesarios:

```text
├── assets/                  # Activos estáticos (imágenes optimizadas .webp, iconos)
├── index.html               # Estructura del documento (HTML5 Semántico)
├── style.css                # Estilos globales y variables de color (:root)
├── script.js                # Lógica del interruptor de tema y persistencia
├── manifest.webmanifest     # Archivo de configuración PWA
└── README.md                # Documentación del repositorio
```
