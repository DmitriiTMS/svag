import { useParams } from 'react-router-dom';
import { trpc } from '../../lib/trpc';

export const OneIdea = () => {
  const { id } = useParams();

  const { data, error, isLoading, isError } = trpc.getIdea.useQuery({
    id: id!,
  });

  if (isLoading) {
    return <p>...Loading</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (!data.id) {
    return <span>Idea not found</span>;
  }

  return (
    <div>
      <h2>Idea {id}</h2>
      <p>Description</p>
    </div>
  );
};
