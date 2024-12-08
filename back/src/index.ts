import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { trpcRouter } from './trpc';
import cors from 'cors';

const expressApp = express();
expressApp.use(cors());

expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
);

expressApp.listen(4200, () => {
  console.log('start server in port http://localhost:4200');
});
