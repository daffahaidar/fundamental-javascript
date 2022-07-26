// infinit loop
for (;;) {
  alert("Infinit loop");
}

// not recommended for loop
let i;
for (i = 0; i < 10; ) {
  alert(i);
  i++;
}

// simple for loop (recommended)
for (let i = 0; i < 10; i++) {
  alert(i);
}
