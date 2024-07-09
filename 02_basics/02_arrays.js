let marvel_heros = ["ironman","spiderman","thor"]
let dc_heros = ["batman","superman","flash"]

// console.log("Before:");
// console.log(marvel_heros);
// console.log(dc_heros);
// console.log();

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(concat_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// console.log("After:");
// console.log(marvel_heros);
// console.log(dc_heros);

// const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Akil"));
// console.log(Array.from("Akil"));
// console.log(Array.from({name:"Akil",age:18})); //interesting: in case of objects, we need to specify if we want it to convert the keys or the values to be converted to array, if it is not able to do so it will always return empty array [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
