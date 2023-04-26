export const Profile = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.tag}>{item.username}</li>
      ))}
    </ul>
  );
};
