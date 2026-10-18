# Deploy to Cloudflare Workers

This profile is built as static assets and served through a Cloudflare Worker.

1. From the workspace root, authenticate Wrangler with your Cloudflare account:

   ```sh
   pnpm --filter @workspace/venom-profile exec wrangler login
   ```

2. Build and deploy:

   ```sh
   pnpm --filter @workspace/venom-profile run deploy:cloudflare
   ```

Wrangler publishes the built site from `dist/public` and prints the Worker URL.
The deployment can also be previewed locally with:

```sh
pnpm --filter @workspace/venom-profile run preview:cloudflare
```

The project does not need a database or server-side secrets for this page.
