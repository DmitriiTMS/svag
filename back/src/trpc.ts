import { initTRPC } from '@trpc/server';

import { z } from 'zod';

const ideas = [
  {
    nick: 'cool-idea-nick-1',
    name: 'Idea 1',
    description: 'Description idea 1',
  },
  {
    nick: 'cool-idea-nick-2',
    name: 'Idea 2',
    description: 'Description idea 2',
  },
  {
    nick: 'cool-idea-nick-3',
    name: 'Idea 3',
    description: 'Description idea 3',
  },
  {
    nick: 'cool-idea-nick-4',
    name: 'Idea 4',
    description: 'Description idea 4',
  },
  {
    nick: 'cool-idea-nick-5',
    name: 'Idea 5',
    description: 'Description idea 5',
  },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
  getIdea: trpc.procedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ input }) => {
      const idea = ideas.find((idea) => idea.nick === input.id);
      return { id: idea || null };
    }),
});

export type TrpcRouter = typeof trpcRouter;
