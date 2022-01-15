// var / let / const

// var scope by function

// let const scope  by { }

for (var a = 0; a < 3; a++) {
  console.log(a);
}

console.log(a); // 3 => var

for (let b = 0; b < 3; b++) {
  console.log(b);
}

console.log(b); // not defined => let
