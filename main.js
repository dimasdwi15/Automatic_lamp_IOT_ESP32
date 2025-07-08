const endpoint = "http://192.168.1.12";

function getLamp1() {
   fetch(endpoint + "/lamp1", {
      method: "GET"
   }).then(response => response.text()).then(result => {
      if (result == "ON") {
         lampSatu.style.backgroundColor = "blue";
         lampSatuImage.src = "./assets/lampu_on.png";
         lampSatu.innerText = "ON";
      } else {
         lampSatu.style.backgroundColor = "red";
         lampSatuImage.src = "./assets/lampu_off.png";
         lampSatu.innerText = "OFF";
      }
   });
}

function getLamp1() {
   fetch(endpoint + "/lamp1", {
      method: "GET"
   }).then(response => response.text()).then(result => {
      if (result == "ON") {
         lampSatu.style.backgroundColor = "blue";
         lampSatuImage.src = "./assets/lampu_on.png";
         lampSatu.innerText = "ON";
      } else {
         lampSatu.style.backgroundColor = "red";
         lampSatuImage.src = "./assets/lampu_off.png";
         lampSatu.innerText = "OFF";
      }
   });
}


function getLamp2() {
   fetch(endpoint + "/lamp2", {
      method: "GET"
   }).then(response => response.text()).then(result => {
      if (result == "ON") {
         lampDua.style.backgroundColor = "blue";
         lampDuaImage.src = "./assets/lampu_on.png";
         lampDua.innerText = "ON";
      } else {
         lampDua.style.backgroundColor = "red";
         lampDuaImage.src = "./assets/lampu_off.png";
         lampDua.innerText = "OFF";
      }
   });
}


function getLamp3() {
   fetch(endpoint + "/lamp3", {
      method: "GET"
   }).then(response => response.text()).then(result => {
      if (result == "ON") {
         lampTiga.style.backgroundColor = "blue";
         lampTigaImage.src = "./assets/lampu_on.png";
         lampTiga.innerText = "ON";
      } else {
         lampTiga.style.backgroundColor = "red";
         lampTigaImage.src = "./assets/lampu_off.png";
         lampTiga.innerText = "OFF";
      }
   });
}


function setLamp1() {
   fetch(endpoint + "/lamp1", {
      method: "POST"
   }).then(response => response.text()).then(() => location.reload());

}

function setLamp2() {
   fetch(endpoint + "/lamp2", {
      method: "POST"
   }).then(response => response.text()).then(() => location.reload());
}

function setLamp3() {
   fetch(endpoint + "/lamp3", {
      method: "POST"
   }).then(response => response.text()).then(() => location.reload());
}

function setLamp4() {
   lampEmpat.style.backgroundColor = "red"
   lampEmpatImage.src = "assets/lampu_on.png"
}


getLamp1();
getLamp2();
getLamp3();