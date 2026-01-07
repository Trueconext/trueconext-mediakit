# 🚀 ValeriaVZG Media Kit - HTML Puro

Media kit profesional para ValeriaVZG - **100% HTML/CSS/JavaScript** (sin build tools).

## ✅ Super Simple - Solo 3 Pasos

### 1️⃣ Agregar Imágenes

Crea una carpeta llamada `images` y pon estas 2 imágenes ahí:

```
valevzgmediakit/
├── index.html
├── styles.css
├── script.js
└── images/              ← Crear esta carpeta
    ├── valeria-photo.jpg   ← Tu foto
    └── valeria-logo.png    ← Tu logo
```

**Nombres exactos:**
- `valeria-photo.jpg` - Foto principal (800x1000px)
- `valeria-logo.png` - Logo (500x100px, fondo transparente)

---

### 2️⃣ Subir a GitHub

#### Método Simple (Sin Terminal):

1. Ve a [github.com](https://github.com) e inicia sesión
2. Click en **"New"** (botón verde) para crear repositorio
3. Nombre: `valevzgmediakit`
4. Visibilidad: **Public** ✅
5. Click **"Create repository"**
6. Click **"uploading an existing file"**
7. Arrastra TODOS los archivos:
   - `index.html`
   - `styles.css`
   - `script.js`
   - Carpeta `images/` con las 2 imágenes
8. Click **"Commit changes"**

---

### 3️⃣ Activar GitHub Pages

1. En tu repositorio, click en **"Settings"**
2. En el menú izquierdo, click en **"Pages"**
3. En **"Source"**, selecciona:
   - Branch: **`main`**
   - Folder: **`/ (root)`**
4. Click **"Save"**
5. ⏱️ Espera 2-5 minutos
6. Verás: "Your site is live at `https://TU-USUARIO.github.io/valevzgmediakit/`"

---

## 🎉 ¡Listo!

Tu sitio estará en vivo en:

```
https://TU-USUARIO.github.io/valevzgmediakit/
```

---

## 🌐 Para Usar Dominio Custom (trueconext.com)

### Opción A: Subdominio (Recomendado)

1. En tu proveedor de DNS, agrega:
   - **Tipo:** CNAME
   - **Nombre:** valevzgmediakit
   - **Valor:** TU-USUARIO.github.io

2. En GitHub Pages Settings:
   - **Custom domain:** `valevzgmediakit.trueconext.com`
   - Click **"Save"**

3. Espera 15-30 minutos para propagación DNS

4. Tu sitio estará en: `https://valevzgmediakit.trueconext.com`

---

### Opción B: Ruta (/valevzgmediakit)

⚠️ **No soportado directamente por GitHub Pages**

Necesitarías:
- Configurar un servidor proxy/redirect en tu dominio principal
- O usar Cloudflare Workers
- O usar tu servidor web principal

**Recomendación:** Usa la Opción A (subdominio) - es mucho más simple.

---

## 📧 Configurar Email del Formulario

El formulario actualmente es un mock. Para que funcione de verdad:

### Opción 1: Formspree (Más Fácil)

1. Ve a [formspree.io](https://formspree.io)
2. Crea cuenta gratis
3. Crea un nuevo form
4. Copia el endpoint que te dan
5. En `index.html`, cambia:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
6. Reemplaza `YOUR_FORM_ID` con tu ID real

### Opción 2: EmailJS

1. Ve a [emailjs.com](https://www.emailjs.com)
2. Sigue su tutorial de setup
3. Modifica `script.js` con su código

---

## 📁 Estructura del Proyecto

```
valevzgmediakit/
├── index.html       ← Página principal
├── styles.css       ← Estilos (dark/morado)
├── script.js        ← JavaScript (interactividad)
├── images/          ← Tus imágenes
│   ├── valeria-photo.jpg
│   └── valeria-logo.png
└── README.md        ← Este archivo
```

---

## ✨ Características

- ✅ **100% HTML/CSS/JS** - Sin React, sin npm, sin build
- ✅ **Bilingüe** - Toggle ES/EN
- ✅ **Fondo interactivo** - Sigue cursor/tap
- ✅ **Responsive** - Se ve bien en móvil
- ✅ **Stats reales** - 1.7M TikTok, 1.3M IG, 730K YT
- ✅ **Formulario contacto** - Listo para conectar
- ✅ **Estilo TrueConext** - Dark/morado/pink

---

## 🎨 Personalizar Colores

En `styles.css`, busca estos colores y cámbialos:

```css
/* Morado */
#a855f7

/* Rosa */
#ec4899

/* Fondo oscuro */
#0a0015, #1a0033
```

---

## 🔧 Actualizar Contenido

### Cambiar Estadísticas

En `index.html`, busca:

```html
<div class="stat-number">1.7M</div>
```

Y cambia el número.

### Cambiar Textos

En `index.html`, busca los atributos `data-es` y `data-en`:

```html
<p data-es="Texto en español" data-en="Text in English">
```

---

## 🆘 Solución de Problemas

### Las imágenes no se ven

**Causa:** Nombres incorrectos o carpeta mal ubicada

**Solución:**
- Verifica que la carpeta se llame `images` (minúscula, sin s al final)
- Verifica nombres exactos: `valeria-photo.jpg` y `valeria-logo.png`
- Asegúrate de haber subido la carpeta `images` a GitHub

### El sitio muestra 404

**Causa:** GitHub Pages no está activado

**Solución:**
- Ve a Settings → Pages
- Verifica que Source esté en `main` y `/ (root)`
- Espera 5 minutos más

### El formulario no envía emails

**Causa:** Es un mock, necesitas configurar un servicio

**Solución:**
- Usa Formspree (ver sección arriba)
- O configura EmailJS
- O agrega `mailto:` directo

---

## 📊 Stats de ValeriaVZG

- **TikTok:** 1.7M seguidores
- **Instagram:** 1.3M seguidores
- **YouTube:** 730K suscriptores

---

## 🎯 Ventajas de Esta Versión

✅ **No necesitas:**
- Node.js
- npm
- Terminal
- Build commands
- Conocimientos de React

✅ **Solo necesitas:**
- Navegador web
- Cuenta de GitHub
- Tus 2 imágenes

---

## 📞 Contacto

**Email:** admin@trueconext.com  
**Website:** [trueconext.com](https://trueconext.com)

---

## 📄 Licencia

© 2025 TrueConext - Todos los derechos reservados

---

¡Éxito con tu media kit! 🚀💜
