

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

}Person.prototype.intro = function(){
    console.log("Hi, I am " +this.firstName + this.lastName);
}
function Worker(firstName, lastName, Occupation){
    Person.call(this,firstName, lastName);
    this.Occupation = Occupation;
}
Worker.prototype.job = function(){
    console.log(`Hello, I am ${this.firstName} ${this.lastName} and I work as a ${this.Occupation}`)
}

const p1 = new Person("Macaela", "Stanislas");
const p2 = new Worker("Tom", "Bradly", "Lawyer");

p1.intro();
p2.job()

//https://youtu.be/jnME98ckDbQ?si=PT-BtWvAB591N1Gi