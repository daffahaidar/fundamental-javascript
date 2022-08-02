console.info(this);

function sample() {
  console.info(this);

  function inner() {
    console.info(this);
  }

  inner();
}

sample();

const person = {
  name: "Daffa",
  sayHello: function (value) {
    console.info(`Hello ${value} My Name is ${this.name}`);
  },
};

person.sayHello("Haidar");
person.sayHello("Nabil");
