# 🚀 Cloudflare Deploy Guide
### Venom Profile · 3 Easy Steps

---

## ① Build command
*Builds your website*

```
pnpm --filter @workspace/venom-profile run build:cloudflare
```

---

## ② Deploy command
*Publishes your website live on the internet*

```
cd artifacts/venom-profile && npx wrangler deploy
```

---

## ③ Preview command
*Only used for testing, but it must be filled in*

```
cd artifacts/venom-profile && npx wrangler versions upload
```

---

## ✅ Checklist

- [ ] Root `package.json` has `"packageManager": "pnpm@10.18.0"`
- [ ] Cloudflare Variables has `PNPM_VERSION = 10.18.0`
- [ ] All three commands are pasted in their own fields
- [ ] The red "Required" label has disappeared
- [ ] You have tapped the blue **Deploy** button

---

## 🌐 Your link after deploying

```
https://venom-profile.your-subdomain.workers.dev
```

It appears at the end of the build log, or in Cloudflare under **Workers & Pages → venom-profile → Visit**.

---

If the build fails, paste the full log here and I'll tell you what to fix.
