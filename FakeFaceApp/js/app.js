const fakeuserapi = "https://randomuser.me/api/";

const faceimg = document.getElementById("faceimg");
const fakename = document.getElementById("name");
const fakenat = document.getElementById("fakenat");
const fakemail = document.getElementById("mail");
const fakephone = document.getElementById("phone");


const btn = document.getElementById("btn");
function getUser() {
  fetch(fakeuserapi)
    .then((res) => res.json())
    .then((data) => {
      const info = data.results[0];
      const infoname = info.name;

      faceimg.src = `https://thispersondoesnotexist.com/image?t=${new Date().getTime()}`;
      fakename.innerHTML = `${infoname.first} ${infoname.last}`;
      fakemail.innerHTML = `${info.email}`;
      fakephone.innerHTML = `${info.phone} `;
      fakenat.innerHTML = `${data.results[0].location.city} / ${data.results[0].nat}`;

    });
}

btn.addEventListener("click", getUser);
