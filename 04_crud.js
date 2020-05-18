const dm = require('./mysql-module.js');

/* console.log("Writing DB");
let image = "https://placeimg.com/100/100/any";
let name = "유강남";
let birthday = "911004";
let gender = "남자";
let job = "야구선수";
let params = [image, name, birthday, gender, job];
dm.addCustomer(params, function() {
    console.log("Wrote 1 record");
}); */

console.log("Reading DB");
dm.getCustomers(function(users) {
    console.log(users);
});