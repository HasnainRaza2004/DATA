var student1 = {
    name:"Hasnain Raza",
    fathername :"Muhammad Ashraf",
    rollnumber : "156",
    result : "pass",
    Mobile : "03353733609"
};
var student2 = {
    name:"Ahmed Raza",
    fathername :"Muhammad Arif",
    rollnumber : "234",
    result : "pass",
    Mobile : "03373483373"
};
var student3 = {
    name:"Hasan Raza",
    fathername :"Muhammad farooq",
    rollnumber : "373",
    result : "fail",
    Mobile : "036437336082"
};
var student4 = {
    name:"Noor Muhammad",
    fathername :"Iqbal ",
    rollnumber : "134",
    result : "pass",
    Mobile : "03353733609"
};
var student5 = {
    name:"Muhammad Raza",
    fathername :"shabir",
    rollnumber : "235",
    result : "fail",
    Mobile : "0348329264373"
};

// var studentlist = [student1,student2,student3,student4,student5];
// for(var i=0; i< studentlist; i++){
//     studentlist
// }
 
var studentlist =[student1,student2,student3,student4,student5]
console.log(studentlist)
var studentdata = document.getElementById("studentdata")
for(var i=0; i<studentlist.length; i++){
    var obj = studentlist[i];
console.log(obj)
    studentdata.innerHTML +=
    "<tr><td>" +
    obj.rollnumber +
    "</td><td>" +
    obj.name +
    "</td><td>" +
    obj.fathername +
    "</td><td>" +
    obj.result +
    "</td><td>" +
    obj.Mobile +
    "</td></tr>"


    function searchstd(){
        var inpvalue  = document.getElementById("inpvalue")
        var showrollnumber = document.getElementById("showrollnumber")
        var showname = document.getElementById("showname")
        var showfathername = document.getElementById("showfathername")
        var showresult = document.getElementById("showresult")
        var showmobile = document .getElementById("showmobile")
    

    for(var i=0; i<studentlist.length; i++){
var std = studentlist[i]
if(inpvalue.value == std.rollnumber){
    console.log(std)
    showrollnumber.innerHTML = std.rollnumber;
    showname.innerHTML = std.name;
    showfathername.innerHTML = std.fathername;
    showresult.innerHTML = std.result;
    showmobile.innerHTML = std.Mobile

};
    };
};
};

