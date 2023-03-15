export default function destructuring(player) {
  const { special } = player;
  const array = [];

  for (const prop of special) {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = prop;
    array.push({
      id,
      name,
      icon,
      description,
    });
  }
  return array;
}
