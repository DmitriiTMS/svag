export const App = () => {
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

  return (
    <div>
      <h1>Ideas</h1>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h3>{idea.name}</h3>
            <p>{idea.description}</p>
          </div>
        );
      })}
    </div>
  );
};
