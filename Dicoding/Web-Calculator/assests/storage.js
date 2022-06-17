const CACHE_KEY = "calculation_history";

// Function untuk  mengembalikan nilai boolean
function checkForStorage() {
  return typeof (Storage) !== "undefined";
}

// Function untuk menyimpan data kedalam localStorage
function putHistory(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHE_KEY) === null) {
      historyData = [];
    } else {
      historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    historyData.unshift(data);

    if (historyData.length > 5) {
      historyData.pop();
    }

    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
  }
}


// Function untuk mendapatkan data dari localStorage
function showHistory() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

// Functiin untuk merender data dari riwayat kalkulasi pada tabel HTML
function renderHistory() {
  const historyData = showHistory();
  let historyList = document.querySelector("#historyList");

  // selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
  historyList.innerHTML = "";

  for (let history of historyData) {
    let row = document.createElement('tr');
    row.innerHTML = "<td>" + history.firstNumber + "</td>";
    row.innerHTML += "<td>" + history.operator + "</td>";
    row.innerHTML += "<td>" + history.secondNumber + "</td>";
    row.innerHTML += "<td>" + history.result + "</td>";

    historyList.appendChild(row);
  }
}

// Memanggil fungsi data history muncul ke website
renderHistory();