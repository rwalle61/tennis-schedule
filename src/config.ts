/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
// Don't destructure process.env because: https://github.com/vercel/next.js/pull/20869/files
// `yarn dev` sets NODE_ENV to 'development'
// `yarn test` sets NODE_ENV to 'test'
// `yarn build` sets NODE_ENV to 'production'
export const IS_PROD_ENV = process.env.NODE_ENV === 'production';
// export const IS_PROD_ENV = true;
// export const IS_PROD_ENV = false;

// console.log('[config.ts] process.env.NODE_ENV', process.env.NODE_ENV, '\n');
// console.log('[config.ts] IS_PROD_ENV', IS_PROD_ENV, '\n');

export const reallyCall3rdParties = (): boolean => IS_PROD_ENV;
