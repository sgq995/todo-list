import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';

async function registerPlugins(app: FastifyInstance) {
  //
}

export async function buildApp(opts?: FastifyServerOptions) {
  const app = fastify(opts);

  await registerPlugins(app);

  app.get('/', async function (request, reply) {
    await reply.send({ hello: 'world' });
  });

  return app;
}
