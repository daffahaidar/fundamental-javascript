// getter and setter
const person = {
  firstName: "Daffa",
  lastName: "Haidar",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

person.fullName = "Dedi Yusuf";
console.table(person);

person.fullName = "Nani Yuhaeni";
console.table(person);

person.fullName = "Daffa haidar";
console.table(person);
