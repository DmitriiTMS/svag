import { useParams } from 'react-router-dom';

export const OneIdea = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Idea {id}</h2>
      <p>Description</p>
    </div>
  );
};
