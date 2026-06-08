# ITDInvestech Company Website

Minimal static site: **contact form email** + **S3/CloudFront deploy**.

## What is included

- Contact form → `submitWebsiteContact` on the LMS API → `support@itdinvestech.co.za`
- GitHub Actions deploy to S3 + CloudFront on push to `main`

## Development

```bash
npm install
npm run dev
```

Set `VITE_GRAPHQL_ENDPOINT` in `.env.development` (see `.env.example`).

## Production build

```bash
npm run build:production
```

## Deployment (S3 + CloudFront)

Pushes to **`main`** run **Deploy website to S3 and CloudFront**.

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | IAM user for deploy |
| `AWS_SECRET_ACCESS_KEY` | IAM secret |
| `AWS_REGION` | e.g. `af-south-1` |
| `WEBSITE_S3_BUCKET` | S3 bucket (or `S3_BUCKET`) |
| `WEBSITE_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |

See [`.github/aws-deploy-iam-policy.example.json`](.github/aws-deploy-iam-policy.example.json).

Production API: `https://lms-api.itdinvestech.co.za/graphql/` (`.env.production`).
