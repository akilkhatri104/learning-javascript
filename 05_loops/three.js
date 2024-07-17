const coding = ["py","js","cpp","java"]
// coding.forEach((item) => {console.log(item);})

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)// Here we are passing the function's refference,we are not executing the function (i.e passing parameters in () )

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        lang: "JavaScript",
        extention:"js"
    },
    {
        lang: "C++",
        extention:"cpp"
    },
    {
        lang: "python",
        extention:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lang,item.extention);
} )