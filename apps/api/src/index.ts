import fastify from 'fastify';

import { buildApp } from './app';

void (async function () {
  const app = await buildApp();

  app.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
