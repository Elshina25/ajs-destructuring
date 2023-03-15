export default function destructuring(player) {
    const { special } = obj;
    let array = [];

    for (let prop of special) {
        const {
            id,
            name,
            icon,
            description = 'Описание недоступно'
        } = prop;
        array.push({
            id,
            name,
            icon,
            description
        })
    }
    return array;
}