const accountId = 123456
let accountEmail = "akil@email.com"
var accountPassword = "123@abc"
accountCity = "Bodeli"
let accountState

// accountId = 789 //not allowed
accountEmail = "ak@email.com"
accountPassword = "456@def"
accountCity = "Waghodia"

/*
prefer let over var
because of block scope issues
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])