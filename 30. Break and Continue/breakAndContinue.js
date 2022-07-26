// break usage in loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // if i === 5, looping will be stopped
  }
  alert(i);
}

// continue usage in loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // when i === 5, 5 will be skipped
  }
  alert(i);
}
