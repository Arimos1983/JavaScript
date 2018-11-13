var array = ['mika', 'pera', 'jelena', 'iva',];

object = {"name" : "mika"};

var arrayObj = [
    {"name":"mika"},
    {"age" : 21}
]

//es5
function Person(firstName, lastName, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

Person.prototype.move = function(){
    return "run";
}

var osoba = new Person("pera", "peric", 21);

Person.staticVar = "some value";
Person.staticMethod = function(){
    return "some action";
}

function Man(firstName, lastName, gender, occupation){
    Person.call(this, firstName, lastName, gender);
    this.occupation = occupation;
}

John.prototype = Object.create(Person.prototype);
John.prototype.constructor = Jhon;

var jonh = new Man("mitar", "miric", 35, "postman");


//promise
var promise = new Promise(function(resolve, reject) {
    if (true) {
      resolve("all ok");
    }
    else {
      reject(Error("not ok"));
    }
});
promise.then(function(result) {
    console.log(result);
  }, function(err) {
    console.log(err);
});


//callback
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
doHomework('math', function() {
    alert('Finished my homework');
});
  
  