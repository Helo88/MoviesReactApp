const obj ={
    counter:2
};

const obj2={
...obj,
counter :obj.counter > 0 ? obj.counter-1 : 0
}

console.log(JSON.stringify(obj2))