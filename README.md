# PHP Monolith to Serverless Node.js on AWS

This repo is a reference migration project showing how to move from a legacy PHP monolithic app to AWS Serverless (Node.js + Lambda).

## Structure
- `legacy-php/` → Sample legacy PHP endpoints (monolith)
- `lambda-services/` → Independent Node.js Lambdas (Auth, Orders, Reports)
- `infra/` → Serverless framework config

## Deployment
1. Install Serverless framework: `npm install -g serverless`
2. Run `sls deploy` from `infra/`
3. Invoke APIs via API Gateway endpoint

