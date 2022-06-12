# Kilburn Grange Tennis Schedule

Because I'm too lazy to check each court individually

## How to use

- Use the `package.json` commands
- Set environment variables using a local `.env` file. This is gitignored. This includes an API key for Google

## Deployment

1. Log in to the AWS account with your user
2. Go to IAM
3. Generate an Access key-pair
4. Add that to your local `.aws/credentials` file as an aws profile in
5. Make sure your terminal session is using that aws profile
6. run `yarn deploy`. (This might deploy a new stack, rather than overwriting the existing one. Not sure why)
