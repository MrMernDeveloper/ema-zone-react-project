const array = [
    { name: 'rakib', id: 1 },
    { name: 'sakib', id: 2 },
    { name: 'alim', id: 3 },
    { name: 'raju', id: 4 },
]

const selected = { name: 'rakib', id: 1 };
const exists = array.find(single => single.id === selected.id);
console.log(exists);