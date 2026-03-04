# LINCOVATE Front Page

This repository contains the source code for the **LINCOVATE** front page, a lightweight React app built with [Vite](https://vite.dev/) and a minimal configuration. The project began as the default React + Vite template, and has been adapted to host the landing page for the LINCOVATE initiative.

## 🚧 What Has Happened So Far

1. **Project Initialization**
   - Generated using `npm create vite@latest` with the `react` template.
   - Renamed the default Git branch to `main` (`git branch -M main`).

2. **File & Component Structure**
   - Added `src/components` folder with three presentational components: `Navbar.jsx`, `Footer.jsx`, and `LinkCard.jsx`.
   - Created `App.jsx` as the root component and global styles in `index.css`.
   - Configured entry point in `main.jsx` to render the application.
   - Assets subfolder available for future images or media.

3. **Configuration and Tooling**
   - ESLint configuration defined in `eslint.config.js`.
   - Basic `package.json` with dependencies and scripts for `dev`, `build`, and `preview`.
   - Vite configuration file (`vite.config.js`) left mostly default.

4. **Ongoing Development**
   - The front page currently presents basic navigation and link card components.
   - Future work may include adding styles, responsive design, and additional content.

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the site.

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
lincovate/
├─ public/             # Static assets served by Vite
├─ src/                # Application source code
│  ├─ assets/          # Images and media
│  ├─ components/      # Reusable React components
│  │  ├─ Footer.jsx
│  │  ├─ Navbar.jsx
│  │  └─ LinkCard.jsx
│  ├─ App.jsx          # Root component
│  ├─ index.css        # Global styles
│  └─ main.jsx         # Entry point
├─ eslint.config.js    # Linting setup
├─ package.json        # Dependencies & scripts
├─ vite.config.js      # Vite build config
└─ README.md           # This document
```

---

## 🛠 Notes & Future Enhancements

- Consider adding TypeScript and stricter linting as project grows.
- Add unit or integration tests when more logic is introduced.
- Update documentation with any significant architectural changes.

---

## ⚖️ License

Based on the official Vite React template. All additional code is public domain unless otherwise noted.

---

Feel free to open issues or contribute enhancements!
