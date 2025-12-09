## Magical 3D Birthday Wish Site

This project is a personalized 3D birthday experience built with **React + Vite + TypeScript**, **Three.js / React-Three-Fiber**, **GSAP animations**, **Bootstrap**, and **Howler** for audio.

It includes:

- A 3D flower garden that bursts upward when the **“Open Your Gift 🎁”** button is clicked
- Floating rainy clouds with soft pastel styling and neon highlights
- A memories gallery with sliding cards
- A final message page with confetti and a **“Send a Wish Back 💌”** button

### Personalizing for Her

- Replace her main photo: `public/assets/images/her-photo.jpg`
- Replace memory photos: `public/assets/images/memory-1.jpg`, `memory-2.jpg`, `memory-3.jpg`
- Replace background piano music: `public/assets/audio/background-piano.mp3`
- Replace chime SFX: `public/assets/audio/gift-chime.mp3`

For a quick check of where these are used, search in the `LandingPage`, `GalleryPage`, and `AudioManager` components.

### Running Locally

```bash
npm install
npm run dev
```

Open the printed localhost URL in your browser.

### Building for Production

```bash
npm run build
```

The static production build will be in the `dist` folder.

### Deploying to Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. Go to the Vercel dashboard and create a **New Project**.
3. Import your repository and select it.
4. Framework preset: choose **Vite** (or **Other** with the following values):
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

Vercel will build and host your site. Any future `git push` to the main branch will automatically trigger a new deployment.

