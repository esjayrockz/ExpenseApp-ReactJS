class Person{
  constructor(name = 'Anonymous',age = 0){
    this.name = name;
    this.age = age;
  }

  getGreeting(){
    return `${this.name} is ${this.age} year(s) old.`;
  }

  getGreet(){
    return `Hi I'm ${this.name}.`;
  }

}

class Student extends Person{

  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getGreeting(){
    let desc = super.getGreeting();
    this.hasMajor() ? desc += ` Their major is ${this.major}.` : desc = desc;
    return desc;
  }
}

class ComputerScienceStudent extends Student{

  constructor(name, age, major, concentration){
    super(name, age, major);
    this.concentration = concentration;
  }
  hasConcentration(){
    return !!this.concentration;
  }
  getGreeting(){
    let desc = super.getGreeting();
      if(this.hasConcentration()){
        desc += ` Their concentration is ${this.concentration}.`;
      }
    return desc;
  }
}

class Traveller extends Person{
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getGreet(){
    let greet = super.getGreet();
    if(this.hasHomeLocation()){
    greet+= ` I'm visiting from ${this.homeLocation}`;
  }
    return greet;
  }

}


const me = new ComputerScienceStudent('Suvajit Chakrabarty', 27, 'ComputerScience', 'AI');
console.log(me.getGreeting());

const other = new ComputerScienceStudent();
console.log(other.getGreeting());
