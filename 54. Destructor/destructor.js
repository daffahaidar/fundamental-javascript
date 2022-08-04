// without destructor in array
{
  const names = ["Daffa", "Haidar", "Nabil", "Zufar", "Ganteng"];
  let firstName = names[0];
  let middleName = names[1];
  let lastName = names[2];

  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
  console.info(others);
}

// using desctructor in array
{
  const names = ["Daffa", "Haidar", "Nabil", "Zufar", "Ganteng"];
  let [firstName, middleName, lastName, ...others] = names;

  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
  console.info(others);
}

// without destructor in object
{
  const person = {
    name: "Daffa",
    age: 20,
    address: "Jakarta",
  };
  let name = person.name;
  let age = person.age;
  let address = person.address;

  console.info(name);
  console.info(age);
  console.info(address);
}

// using destructor in object
{
  const person = {
    firstName: "Daffa",
    lastName: "Nabil",
    address: {
      street: "Jalan Belum Ada",
      city: "Jakarta",
      country: "Indonesia",
    },
    hobby: "Game",
    channel: "Daffa Haidar Studio",
  };

  let {
    firstName,
    lastName,
    address: { city, street, country },
    ...others
  } = person;
  console.info(firstName);
  console.info(lastName);
  console.info(city);
  console.info(street);
  console.info(country);
  console.info(others);
}

// using destructoring in function
{
  function displayPerson({ firstName, middleName, lastName }) {
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
  }

  const person = {
    firstName: "Daffa",
    middleName: "Haidar",
    lastName: "Nabil",
  };

  displayPerson(person);
}

{
  function sum([first, second]) {
    return first + second;
  }

  console.info(sum([1, 1]));
  console.info(sum([10, 10]));
}

// asign default value in destructoring
{
  const names = ["Daffa", "Zufar", "Ganteng"];
  const [firstName, middleName = "Haidar", lastName = "Nabil"] = names;

  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

{
  const person = {
    firstName: "Daffa",
    middleName: "Zufar",
    lastName: "Nabil",
  };

  let { firstName, middleName = "Haidar", lastName } = person;
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

// in destructoring we can change the name of variable
{
  const person = {
    firstName: "Daffa",
    middleName: "Zufar",
    lastName: "Nabil",
  };

  let {
    firstName: namaDepan,
    middleName: namaTengah = "Haidar",
    lastName: namaBelakang,
  } = person;
  console.info(namaDepan);
  console.info(namaTengah);
  console.info(namaBelakang);
}
