document.getElementById("btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

document.getElementById("btn1").addEventListener("click", function () {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const sMerah = document.getElementById("sMerah");
const sHijau = document.getElementById("sHijau");
const sBiru = document.getElementById("sBiru");

function ubahWarna() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

sMerah.addEventListener("input", ubahWarna);
sHijau.addEventListener("input", ubahWarna);
sBiru.addEventListener("input", ubahWarna);
