# NeuraLearn

Complete React + Tailwind frontend for an AI learning platform.

## GitHub Pages

This project is configured for the repository:

`https://github.com/Eklavya0507/new-project`

The Vite base path is:

`/new-project/`

The app uses `HashRouter`, so client-side navigation works correctly on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub deployment

1. Upload the contents of this project to the root of the `new-project` repository.
2. Commit to the `main` branch.
3. Open GitHub repository Settings → Pages.
4. Set the source to **GitHub Actions**.
5. The included workflow in `.github/workflows/deploy.yml` will build and deploy the `dist` folder.

## Important

Do not upload only `index.html`. The `src`, `package.json`, Vite config, Tailwind config, and GitHub Actions workflow are all required.
