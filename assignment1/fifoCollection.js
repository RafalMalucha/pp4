col = [];

function push(element) {
    col.push(element)
}

function pop() {
    col.shift()
}

// test

push(0)
push(1)
push(2)

console.log(col)

pop()

console.log(col)