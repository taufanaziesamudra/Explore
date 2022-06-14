const time = new Date()
document.getElementById("time").innerHTML = "Time Right Now Is: "
  + time.getHours() + ":" + time.getMinutes()
  + ":" + time.getSeconds()

document.getElementById("create").addEventListener
  ("click", tampilkan_komentar);

function tampilkan_komentar() {
  const commet = document.getElementById("comment").ariaValueMax;

  document.getElementById("gol").innerHTML = commet
}