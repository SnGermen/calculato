function chngColor() {
  let hexnum = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexcode = "";

  for (let i = 0; i < 6; i++) {
    let randomIndx = Math.floor(Math.random() * hexnum.length);
    hexcode += hexnum[randomIndx];
  }

  document.getElementById("hex-color").innerHTML = hexcode;

  document.body.style.background = "#" + hexcode;
}
