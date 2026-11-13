# Vantroxia Labs LTD — Marketing Site

Official marketing website for **Vantroxia Labs LTD** (`vantroxialabs.com`), showcasing the company's software engineering studio and live products (**GymMateHub** and **AegisRemit**).

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Lucide Icons
- Nginx multi-stage Docker container (configured for Dokploy / Traefik)

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Docker

```bash
docker build -t vantroxialabs-site .
docker run -p 8080:80 vantroxialabs-site
```

## Deployment (Dokploy)

See [`vantroxia-vps/docs/dokploy-rebuild.md`](../vantroxia-vps/docs/dokploy-rebuild.md). Configure `DOKPLOY_URL`, `DOKPLOY_API_KEY`, and `DOKPLOY_APP_ID` in GitHub repository secrets/variables for `.github/workflows/deploy-staging.yml`.

