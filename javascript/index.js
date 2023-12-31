function updateTime() {
  let losAngelesELement = document.querySelector("#los-angeles");
  if (losAngelesELement) {
    let losAngelesDate = losAngelesELement.querySelector(".date");
    let losAngelesTime = losAngelesELement.querySelector(".time");
    let losAngelesActualTime = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesActualTime.format("MMMM Do YYYY");
    losAngelesTime.innerHTML = losAngelesActualTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }

  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDate = romeElement.querySelector(".date");
    let romeTime = romeElement.querySelector(".time");
    let romeActualTime = moment().tz("Europe/Rome");
    romeDate.innerHTML = romeActualTime.format("MMMM Do YYYY");
    romeTime.innerHTML = romeActualTime.format(`h:mm:ss [<small>]A[</small>]`);
  }
  let seoulElement = document.querySelector("#seoul");
  if (seoulElement) {
    let seoulDate = seoulElement.querySelector(".date");
    let seoulTime = seoulElement.querySelector(".time");
    let seoulActualTime = moment().tz("Asia/Seoul");
    seoulDate.innerHTML = seoulActualTime.format("MMMM Do YYYY");
    seoulTime.innerHTML = seoulActualTime.format(
      `h:mm:ss [<small>]A[</small>]`
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            `h:mm:ss [<small>]A[</small>]`
          )}</div>
        </div>`;
  let goBack = document.querySelector("#goBack");
  goBack.innerHTML = `<a href="/">Return</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
