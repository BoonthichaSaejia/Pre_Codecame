class parrot{
    constructor(name,color,numLegs){
        this.name=name
        this.color=color
        this.numLegs=numLegs
    }
}
talky=new parrot("talky","pink",2)
let ownProps=[];
for (let property in talky){
    if (object1.hasOwnProperty(property)){
        ownProps.push(property)
    }

}


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

function parrot(name){
      this.name=name
  }
parrot.prototype.numLegs = 2;