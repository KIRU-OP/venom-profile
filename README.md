# Venom Profile

Personal profile website for Venom / Krishna.

## Deploy to Cloudflare Workers

From the repository root, install dependencies:

```sh
pnpm install
```

On the first deploy, sign in to your Cloudflare account:

```sh
pnpm --filter @workspace/venom-profile exec wrangler login
```

Build and deploy the site:

```sh
pnpm --filter @workspace/venom-profile run deploy:cloudflare
```

Wrangler prints the live Worker URL after a successful deployment.

### Deployment links

- [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [Project deployment instructions](artifacts/venom-profile/CLOUDFLARE.md)
- [GitHub repository](https://github.com/KIRU-OP/venom-profile)

**Live website:** Not deployed yet. Add the `workers.dev` URL printed by Wrangler here after the first deployment.

> Cloudflare Deploy buttons require a public repository. This repository is private, so deploy it using the Wrangler commands above.
