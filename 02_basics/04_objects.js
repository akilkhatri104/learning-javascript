// const appUser = new Object() //- singleton object
const appUser = {} // - non-singleton object

appUser.id = "123abc"
appUser.name = "Akil"
appUser.isLoggedIn = false

// console.log(appUser);

const regularUser = {
    email:"user@email.com",
    fullname: {
        userfullname:{
            firstname: "Akil",
            lastname: "Khatri"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);
// console.log(obj1);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));

// console.log(appUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

console.log(course.courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);


