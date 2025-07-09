const endpoint = "https://iot-lamp-9e13b-default-rtdb.asia-southeast1.firebasedatabase.app/";

function getLamp(nomor, element, imageElement) {
  fetch(endpoint + `lamp${nomor}.json`)
    .then(res => res.text())
    .then(result => {
      const status = result.replace(/"/g, "");
      element.style.backgroundColor = status === "ON" ? "blue" : "red";
      imageElement.src = status === "ON" ? "./assets/lampu_on.png" : "./assets/lampu_off.png";
      element.innerText = status;
    });
}

function setLamp(nomor, element, imageElement) {
  const newState = element.innerText === "ON" ? "OFF" : "ON";
  fetch(endpoint + `lamp${nomor}.json`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newState)
  }).then(() => getLamp(nomor, element, imageElement));
}

// Contoh penggunaan (pastikan variabel lampSatu, lampSatuImage, dll sudah diinisialisasi sebelumnya)
function getLamp1() { getLamp(1, lampSatu, lampSatuImage); }
function getLamp2() { getLamp(2, lampDua, lampDuaImage); }
function getLamp3() { getLamp(3, lampTiga, lampTigaImage); }

function setLamp1() { setLamp(1, lampSatu, lampSatuImage); }
function setLamp2() { setLamp(2, lampDua, lampDuaImage); }
function setLamp3() { setLamp(3, lampTiga, lampTigaImage); }

function setLamp4() {
  const current = lampEmpat.innerText;
  const newState = current === "ON" ? "OFF" : "ON";
  lampEmpat.style.backgroundColor = newState === "ON" ? "blue" : "red";
  lampEmpatImage.src = newState === "ON" ? "assets/lampu_on.png" : "assets/lampu_off.png";
  lampEmpat.innerText = newState;
}

function toggleAll() {
  const newState = (lampSatu.innerText === "ON" &&
                    lampDua.innerText === "ON" &&
                    lampTiga.innerText === "ON" &&
                    lampEmpat.innerText === "ON") ? "OFF" : "ON";

  const headers = { "Content-Type": "application/json" };
  const body = JSON.stringify(newState);

  fetch(endpoint + "lamp1.json", { method: "PUT", headers, body }).then(() => getLamp1());
  fetch(endpoint + "lamp2.json", { method: "PUT", headers, body }).then(() => getLamp2());
  fetch(endpoint + "lamp3.json", { method: "PUT", headers, body }).then(() => getLamp3());

  lampEmpat.style.backgroundColor = newState === "ON" ? "blue" : "red";
  lampEmpatImage.src = newState === "ON" ? "assets/lampu_on.png" : "assets/lampu_off.png";
  lampEmpat.innerText = newState;

  const toggleBtn = document.getElementById("toggleAllButton");
  toggleBtn.innerText = newState === "ON" ? "TURN ALL OFF" : "TURN ALL ON";
  toggleBtn.style.backgroundColor = newState === "ON" ? "red" : "blue";
}

// Jalankan saat load
getLamp1();
getLamp2();
getLamp3();
