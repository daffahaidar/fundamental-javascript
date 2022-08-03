const data = {
  name: "Daffa",
  greeting: (myName) => {
    return `Hello ${myName}`;
  },
};
console.log(data.greeting(data.name));
