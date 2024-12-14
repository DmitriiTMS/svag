import { Link } from 'react-router-dom';
import { trpc } from '../../lib/trpc';
import { getOneIdea } from '../../lib/routes';

export const AllIdeasPage = () => {
  const { data, error, isLoading, isError } = trpc.getIdeas.useQuery();

  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Ideas</h1>
      {data &&
        data.ideas.map((idea) => {
          return (
            <div key={idea.nick}>
              <Link to={getOneIdea({ id: idea.nick })}>
                <h3>{idea.name}</h3>
              </Link>

              <p>{idea.description}</p>
            </div>
          );
        })}
    </div>
  );
};
