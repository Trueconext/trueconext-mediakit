# 🚀 TUTORIAL COMPLETO: GitHub Pages (Principio a Fin)

## 📋 Índice
1. [Preparación](#1-preparación)
2. [Agregar Imágenes](#2-agregar-imágenes)
3. [Crear Repositorio GitHub](#3-crear-repositorio-github)
4. [Subir Archivos](#4-subir-archivos)
5. [Configurar GitHub Pages](#5-configurar-github-pages)
6. [Deploy del Sitio](#6-deploy-del-sitio)
7. [Configurar Dominio Custom](#7-configurar-dominio-custom)
8. [Verificación Final](#8-verificación-final)

---

## 1. Preparación

### 1.1 Requisitos Previos

Antes de empezar, asegúrate de tener:

- ✅ Cuenta de GitHub (crear en [github.com](https://github.com))
- ✅ Node.js instalado ([descargar aquí](https://nodejs.org))
- ✅ Tu proyecto descargado de Figma Make
- ✅ Las 2 imágenes de Valeria listas

### 1.2 Verificar Node.js

Abre la terminal/CMD y ejecuta:

```bash
node --version
npm --version
```

Si ves números (ej: `v20.10.0`), ¡está instalado! ✅

Si no, instala Node.js desde [nodejs.org](https://nodejs.org) (versión LTS).

---

## 2. Agregar Imágenes

### 2.1 Ubicación

Descarga tu proyecto de Figma Make y descomprímelo. Luego:

```
valevzgmediakit/
└── public/  ← Abre esta carpeta
```

### 2.2 Copiar Imágenes

Arrastra estas 2 imágenes a la carpeta `public`:

1. **valeria-photo.jpg** - Foto principal (800x1000px, máx 500KB)
2. **valeria-logo.png** - Logo (500x100px, máx 100KB, fondo transparente)

⚠️ **Los nombres deben ser EXACTOS** (minúsculas, sin espacios)

### 2.3 Verificar

La carpeta `public` debe verse así:

```
public/
├── .gitkeep
├── README.md
├── placeholder-info.txt
├── valeria-photo.jpg  ← Tu foto
└── valeria-logo.png   ← Tu logo
```

---

## 3. Crear Repositorio GitHub

### 3.1 Ir a GitHub

1. Ve a [github.com](https://github.com)
2. Inicia sesión
3. Haz clic en el **botón verde "New"** (arriba izquierda)
   - O click en tu foto de perfil → "Your repositories" → "New"

### 3.2 Configurar Repositorio

Llena el formulario así:

| Campo | Valor |
|-------|-------|
| **Repository name** | `valevzgmediakit` |
| **Description** | Media Kit profesional para ValeriaVZG |
| **Visibility** | ✅ Public (DEBE ser público) |
| **Initialize** | ❌ NO marcar nada |

4. Haz clic en **"Create repository"**

### 3.3 Guardar URL

Copia la URL de tu repositorio. Será algo como:

```
https://github.com/TU-USUARIO/valevzgmediakit
```

---

## 4. Subir Archivos

Tienes **2 opciones**. Elige la que prefieras:

### 🌐 OPCIÓN A: Interfaz Web (Sin Terminal)

#### Paso 1: Preparar Archivos
1. Abre la carpeta de tu proyecto
2. Selecciona **TODOS** los archivos y carpetas
3. Créalos en un .zip (opcional, para subir más rápido)

#### Paso 2: Subir a GitHub
1. En tu repositorio vacío, verás una página de inicio
2. Busca el link **"uploading an existing file"**
3. Haz clic en él
4. Arrastra TODOS los archivos del proyecto
5. Espera a que se suban (puede tardar 2-3 minutos)
6. En "Commit message", escribe: `Initial commit - ValeriaVZG Media Kit`
7. Click en **"Commit changes"**

---

### 💻 OPCIÓN B: Terminal/Git (Recomendado)

#### Paso 1: Abrir Terminal en el Proyecto

**En Windows:**
- Abre la carpeta del proyecto
- Shift + Click derecho → "Abrir en Terminal" o "Abrir ventana de PowerShell aquí"

**En Mac:**
- Abre la carpeta del proyecto
- Click derecho → "New Terminal at Folder"

#### Paso 2: Ejecutar Comandos

Copia y pega estos comandos **UNO POR UNO**:

```bash
# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Crear commit
git commit -m "Initial commit - ValeriaVZG Media Kit"

# Crear rama main
git branch -M main

# Conectar con GitHub (REEMPLAZA TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/valevzgmediakit.git

# Subir archivos
git push -u origin main
```

⚠️ **Reemplaza `TU-USUARIO`** con tu nombre de usuario de GitHub

#### Paso 3: Autenticación

Si te pide usuario y contraseña:
- **Usuario:** Tu nombre de usuario de GitHub
- **Contraseña:** Usa un **Personal Access Token** (no tu contraseña)
  - Crear token: GitHub → Settings → Developer settings → Personal access tokens

---

## 5. Configurar GitHub Pages

### 5.1 Instalar Dependencias

En la terminal del proyecto, ejecuta:

```bash
npm install
```

Esto descargará todas las librerías necesarias. Puede tardar 2-3 minutos.

### 5.2 Construir Proyecto

```bash
npm run build
```

Esto crea una carpeta `dist` con los archivos optimizados.

### 5.3 Activar GitHub Pages (Método 1: Automático)

Ejecuta:

```bash
npm run deploy
```

Este comando:
- ✅ Construye el proyecto
- ✅ Crea una rama `gh-pages`
- ✅ Sube los archivos
- ✅ Publica automáticamente

⏱️ **Espera 2-5 minutos**

### 5.4 Activar GitHub Pages (Método 2: Manual)

Si prefieres hacerlo manualmente:

1. Ve a tu repositorio en GitHub
2. Click en **"Settings"** (arriba a la derecha)
3. En el menú izquierdo, busca **"Pages"**
4. En **"Source"**, selecciona:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
5. Click en **"Save"**
6. Espera 2-5 minutos

---

## 6. Deploy del Sitio

### 6.1 Verificar que Funcionó

1. En Settings → Pages, verás un mensaje:
   ```
   Your site is live at https://TU-USUARIO.github.io/valevzgmediakit/
   ```

2. Haz clic en ese link (o cópialo en el navegador)

3. ¡Deberías ver tu media kit! 🎉

### 6.2 Si No Funciona

**Problema:** Página en blanco

**Solución:**
1. Verifica que `vite.config.ts` tenga:
   ```typescript
   base: '/valevzgmediakit/',
   ```

2. Vuelve a hacer deploy:
   ```bash
   npm run deploy
   ```

**Problema:** Imágenes rotas

**Solución:**
- Verifica que las imágenes estén en `/public/` con los nombres exactos
- Asegúrate de que se subieron a GitHub

---

## 7. Configurar Dominio Custom

### 7.1 Agregar Dominio en GitHub

1. Ve a Settings → Pages
2. En **"Custom domain"**, escribe uno de estos:
   - **Opción A (Subdominio):** `valevzgmediakit.trueconext.com`
   - **Opción B (Dominio raíz):** `trueconext.com`
3. Click en **"Save"**
4. ⚠️ NO marques "Enforce HTTPS" todavía

### 7.2 Configurar DNS

Ve a tu proveedor de dominio (donde compraste trueconext.com):

#### Para Subdominio (valevzgmediakit.trueconext.com) ✅ Recomendado

Agrega un registro **CNAME**:

| Tipo | Nombre | Valor |
|------|--------|-------|
| CNAME | valevzgmediakit | TU-USUARIO.github.io |

#### Para Dominio Raíz con Path (/valevzgmediakit)

⚠️ **Complicado:** GitHub Pages no soporta paths en dominios custom directamente.

**Soluciones:**
1. Usa subdominio (más fácil)
2. Usa Cloudflare Workers/Pages para redirect
3. Usa tu servidor web principal con reverse proxy

### 7.3 Esperar Propagación

⏱️ **Tiempo:** 5 minutos a 48 horas (usualmente 15-30 minutos)

Verifica en: [whatsmydns.net](https://whatsmydns.net)

### 7.4 Activar HTTPS

Después de que el dominio funcione:

1. Ve a Settings → Pages
2. ✅ Marca **"Enforce HTTPS"**
3. Click "Save"

---

## 8. Verificación Final

### 8.1 Checklist Completo

- [ ] El sitio carga en: `https://TU-USUARIO.github.io/valevzgmediakit/`
- [ ] Las imágenes se ven correctamente
- [ ] Los links de redes sociales funcionan
- [ ] El toggle de idioma (ES/EN) funciona
- [ ] El formulario de contacto funciona
- [ ] El fondo interactivo responde al cursor
- [ ] Es responsive (se ve bien en móvil)
- [ ] (Opcional) El dominio custom funciona

### 8.2 URLs Finales

- **GitHub Pages:** `https://TU-USUARIO.github.io/valevzgmediakit/`
- **Dominio Custom (subdominio):** `https://valevzgmediakit.trueconext.com`
- **Dominio Custom (path):** Requiere configuración adicional

---

## 9. Actualizar en el Futuro

### 9.1 Hacer Cambios

1. Edita los archivos localmente
2. Prueba localmente con: `npm run dev`
3. Abre: `http://localhost:5173`

### 9.2 Publicar Cambios

```bash
# Opción A: Solo deploy (si ya hiciste commit)
npm run deploy

# Opción B: Commit + Deploy
git add .
git commit -m "Descripción de cambios"
git push origin main
npm run deploy
```

⏱️ Espera 2-3 minutos y los cambios estarán en vivo.

---

## 10. Comandos de Referencia Rápida

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Deploy a GitHub Pages
npm run deploy

# Ver status de Git
git status

# Commit cambios
git add .
git commit -m "Tu mensaje"

# Subir a GitHub
git push origin main
```

---

## 11. Solución de Problemas

### Problema: "npm: command not found"
**Solución:** Instala Node.js desde [nodejs.org](https://nodejs.org)

### Problema: "Permission denied"
**Solución:** En Mac/Linux, usa `sudo npm install -g gh-pages`

### Problema: Las imágenes no se ven
**Solución:** 
1. Verifica que estén en `/public/`
2. Nombres exactos: `valeria-photo.jpg`, `valeria-logo.png`
3. Re-deploy: `npm run deploy`

### Problema: Página 404
**Solución:**
1. Verifica que GitHub Pages esté activado
2. Usa la rama `gh-pages` como fuente
3. Espera 5 minutos más

### Problema: Cambios no se reflejan
**Solución:**
1. Limpia cache del navegador (Ctrl + Shift + R)
2. Verifica que hiciste `npm run deploy`
3. Espera 2-3 minutos

### Problema: "Failed to deploy"
**Solución:**
1. Verifica tu conexión a internet
2. Asegúrate de tener permisos en el repositorio
3. Ejecuta: `git remote -v` para verificar la URL

---

## 12. Recursos Útiles

### Documentación
- [GitHub Pages Docs](https://docs.github.com/pages)
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)

### Herramientas
- [TinyPNG](https://tinypng.com) - Optimizar imágenes
- [Squoosh](https://squoosh.app) - Comprimir imágenes
- [Remove.bg](https://remove.bg) - Quitar fondos
- [Canva](https://canva.com) - Crear logos

### Verificación
- [WhatsMyDNS](https://whatsmydns.net) - Verificar DNS
- [PageSpeed Insights](https://pagespeed.web.dev) - Velocidad del sitio

---

## 📞 ¿Necesitas Ayuda?

Si te atascas en algún paso:

1. **Lee el error completo** (copia el mensaje)
2. **Toma un screenshot** de tu pantalla
3. **Dime en qué paso estás** (número del tutorial)
4. **Envíame la información** y te ayudo específicamente

---

## 🎉 ¡Felicidades!

Si llegaste hasta aquí, tu media kit debería estar en vivo. 

**Comparte el link:** `https://TU-USUARIO.github.io/valevzgmediakit/`

¡Éxito con ValeriaVZG! 🚀💜

---

© 2025 TrueConext - Tutorial creado para ValeriaVZG Media Kit
