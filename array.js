// console.log("Hello!");

// let stu = {name: "Yemi", gender: "male"}

// const arr = [1, 2, 3, "Yem", true, { name: "Peter", age: 12 }, false];

// console.log(arr);
// console.log(arr.length);

// arr[0] = 12
// console.log(arr);
// console.log(arr[arr.length-1]);


// const x = [0,1,2,3,4,5]
// const y = [...x]

// console.log(x);
// console.log(y);
// x[1] = true
// console.log(x);
// console.log(y);

// y.push(100)
// console.log(x);
// console.log(y);

// console.log(x.length);


const matrix = [[1,5], [16,10], [12,15], [3,7]]

const sortMatrix = (matrix) => {
    if(typeof matrix != 'object') return matrix
    else {
        matrix.sort((a,b)=> a[0] - b[0])
        return matrix
    }
}



// console.log(sortMatrix(matrix));

// let name = "Super Man and Bat Man".split("Man")
// console.log(name);

// const Person: STRUCT 
//     name: String
//     age: Number
//     END_STRUCT

// const person = Person

// person.name = "Manny"
// person.age = 32

// console.log(person);

// const arr = [12]


// arr["SOD1213323"] = {name: "Remi"}
// arr.push(13)
// arr[12] = 0
// arr.push(90)

// console.log(arr[0]);
// console.log(arr["SOD1213323"]);
// console.log(arr[1]);
// console.log(arr);


const text = "I am made in God image"
const vowels = ['a','e','i','o','u']

console.log(text.length);
console.log(text.split(" ").length);

const filterArr = (v)=> {
    for (var vowel of vowels){
        if(vowel == v) return true
    }
    return false
}

let splitted_text = text.toLowerCase().split("")



console.log(splitted_text.filter(filterArr).length)
