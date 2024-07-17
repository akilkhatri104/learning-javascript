const nums = [1,2,3]

// const initial = 0
// const sum = nums.reduce( (acc,current) => acc+current,
//                         initial )
// console.log(sum);

const shoppingcart = [
    {
        coursename:"JS_Course",
        price:1999
    },
    {
        coursename:"Python_Course",
        price:999
    },
    {
        coursename:"MobileDev_Course",
        price:1599
    }
    
]

const totalCost = shoppingcart.reduce( (acc,item) => (acc+item.price),0)
console.log(totalCost);