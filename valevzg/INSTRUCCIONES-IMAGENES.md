# 📸 GUÍA VISUAL: DÓNDE SUBIR TUS IMÁGENES

## 🎯 Resumen Rápido

Necesitas **2 imágenes** para que el media kit funcione correctamente.

---

## 📂 PASO 1: Ubicación de la Carpeta

```
valevzgmediakit/          ← Carpeta raíz del proyecto
├── public/               ← AQUÍ VAN LAS IMÁGENES ✅
│   ├── valeria-photo.jpg ← Imagen 1
│   └── valeria-logo.png  ← Imagen 2
├── components/
├── styles/
└── ...
```

---

## 🖼️ IMAGEN 1: valeria-photo.jpg

### ¿Dónde aparece?
En la **sección Hero** (primera pantalla), lado izquierdo.

### ¿Qué debe ser?
- Una foto profesional de Valeria
- Vertical u orientación retrato
- Bien iluminada
- Alta calidad

### Especificaciones Técnicas:
- **Nombre exacto:** `valeria-photo.jpg` (minúsculas, sin espacios)
- **Formato:** JPG o PNG
- **Tamaño recomendado:** 800px de ancho × 1000px de alto
- **Peso máximo:** 500KB (optimizar en TinyPNG.com si es mayor)

### Ejemplo de foto ideal:
```
┌─────────────────┐
│                 │
│                 │
│   FOTO DE       │
│   VALERIA       │
│   BAILANDO      │
│   O POSANDO     │
│                 │
│                 │
└─────────────────┘
  (Vertical)
```

---

## 🎨 IMAGEN 2: valeria-logo.png

### ¿Dónde aparece?
En la **sección Hero** (primera pantalla), lado derecho, arriba del nombre "VALEVZG".

### ¿Qué debe ser?
- El logo o firma de ValeriaVZG
- Puede ser texto estilizado, monograma, o símbolo
- Fondo **transparente** (PNG)

### Especificaciones Técnicas:
- **Nombre exacto:** `valeria-logo.png` (minúsculas, sin espacios)
- **Formato:** PNG (con transparencia)
- **Tamaño recomendado:** 500px de ancho × 100-150px de alto
- **Peso máximo:** 100KB
- **Fondo:** Transparente

### Ejemplo de logo ideal:
```
┌─────────────────────────────┐
│  ValeriaVZG  ✨  (o tu logo) │
└─────────────────────────────┘
     (Horizontal, fondo transparente)
```

---

## ✅ CHECKLIST: Antes de Subir

- [ ] Las imágenes tienen los nombres **EXACTOS**: `valeria-photo.jpg` y `valeria-logo.png`
- [ ] La foto está en formato JPG o PNG
- [ ] El logo está en formato PNG con fondo transparente
- [ ] Las imágenes están optimizadas (menos de 500KB cada una)
- [ ] Las coloqué en la carpeta `/public/` (NO en otra carpeta)

---

## 🚀 CÓMO SUBIRLAS

### Opción A: En tu Computadora (Antes de GitHub)

1. **Descarga el proyecto** desde Figma Make
2. **Abre la carpeta** del proyecto
3. **Busca la carpeta** `public`
4. **Arrastra las 2 imágenes** a esa carpeta
5. **Verifica los nombres** exactos
6. **Listo** - ahora sube todo a GitHub

### Opción B: Directamente en GitHub (Después de Subir)

1. Ve a tu repositorio: `github.com/TU-USUARIO/valevzgmediakit`
2. Haz clic en la carpeta **`public`**
3. Haz clic en **"Add file" → "Upload files"**
4. **Arrastra las 2 imágenes**
5. Escribe "Add ValeriaVZG images" en el commit
6. Haz clic en **"Commit changes"**
7. Espera 2 minutos
8. Ejecuta `npm run deploy` en tu terminal

---

## 🆘 SI NO TIENES LOGO

Si no tienes un logo diseñado, puedo:

1. **Eliminar esa sección** y solo mostrar texto
2. **Crear un logo simple** con texto estilizado
3. **Usar solo iniciales** (VVZ)

¡Avísame qué prefieres!

---

## 🎨 HERRAMIENTAS GRATUITAS

### Para Optimizar Imágenes:
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app

### Para Crear Logo Simple:
- **Canva**: https://canva.com (plantillas gratis)
- **Remove.bg**: https://remove.bg (quitar fondo)

### Para Redimensionar:
- **ILoveIMG**: https://iloveimg.com/resize-image

---

## ❓ PREGUNTAS FRECUENTES

### P: ¿Qué pasa si uso otros nombres?
**R:** El sitio mostrará una imagen rota 🚫. Los nombres deben ser exactos.

### P: ¿Puedo usar JPG para el logo?
**R:** Sí, pero no tendrá fondo transparente. Se verá mejor con PNG.

### P: ¿Qué pasa si mis imágenes son muy grandes?
**R:** El sitio cargará lento. Optimízalas primero en TinyPNG.

### P: ¿Puedo cambiar las imágenes después?
**R:** ¡Sí! Solo sube las nuevas con los mismos nombres y ejecuta `npm run deploy`.

---

## 📞 ¿NECESITAS AYUDA?

Si tienes las imágenes pero no sabes cómo optimizarlas, renombrarlas o subirlas, **envíamelas y yo las preparo** 👍

¡Éxito! 🚀
