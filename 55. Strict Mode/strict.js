function useStrictMode() {
  "use strict"; // This is a strict mode
  const person = {
    firstName: "Daffa",
  };

  // error
  with (person) {
    console.info(firstName);
  }
}

function withoutStrictMode() {
  const person = {
    firstName: "Daffa",
  };

  with (person) {
    // without strict mode this will not throw error
    console.info(firstName);
  }
}

useStrictMode();
withoutStrictMode();
