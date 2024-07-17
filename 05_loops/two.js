const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python"
}

//forin
// for (const key in myObject) {
//     console.log(key+" : " + myObject[key]);   
// }

const programming = ["js","cpp","py"]
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN',"India") 
map.set('USA',"United States") 
map.set('Fr',"France") 
for (const key in map) {
    console.log(key);
}