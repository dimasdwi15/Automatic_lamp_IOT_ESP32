const endpoint = "https://7eac7d55-5878-4c7d-8ff4-c3e739f267ba-00-31ob90z8or16t.janeway.replit.dev/";

function getLamp1() {
   fetch(endpoint + "lamp1")
      .then(response => response.text())
      .then(result => {
         lampSatu.style.backgroundColor = result === "ON" ? "blue" : "red";
         lampSatuImage.src = result === "ON" ? "./assets/lampu_on.png" : "./assets/lampu_off.png";
         lampSatu.innerText = result;
      });
}

function getLamp2() {
   fetch(endpoint + "lamp2")
      .then(response => response.text())
      .then(result => {
         lampDua.style.backgroundColor = result === "ON" ? "blue" : "red";
         lampDuaImage.src = result === "ON" ? "./assets/lampu_on.png" : "./assets/lampu_off.png";
         lampDua.innerText = result;
      });
}

function getLamp3() {
   fetch(endpoint + "lamp3")
      .then(response => response.text())
      .then(result => {
         lampTiga.style.backgroundColor = result === "ON" ? "blue" : "red";
         lampTigaImage.src = result === "ON" ? "./assets/lampu_on.png" : "./assets/lampu_off.png";
         lampTiga.innerText = result;
      });
}
function setLamp1() {
   const newState = lampSatu.innerText === "ON" ? "OFF" : "ON";
   fetch(endpoint + "lamp1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newState })
   }).then(() => getLamp1());
}

function setLamp2() {
   const newState = lampDua.innerText === "ON" ? "OFF" : "ON";
   fetch(endpoint + "lamp2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newState })
   }).then(() => getLamp2());
}

function setLamp3() {
   const newState = lampTiga.innerText === "ON" ? "OFF" : "ON";
   fetch(endpoint + "lamp3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newState })
   }).then(() => getLamp3());
}


function setLamp4() {
   lampEmpat.style.backgroundColor = "red";
   lampEmpatImage.src = "assets/lampu_on.png";
}

// Panggil saat halaman pertama dibuka
getLamp1();
getLamp2();
getLamp3();
