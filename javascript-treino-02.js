let person = {
  name: "Bruno",
  age: 31,
  haveChildren: true,
  walk(){
    alert("andando")
  },
  talk(){
    alert("e aí!")
  }
}

document.write(person.name + " " + person.age)
person.talk()
person.walk()