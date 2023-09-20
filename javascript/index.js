function updateTime() {
  let losAngelesELement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesELement.querySelector(".date");
  let losAngelesTime = losAngelesELement.querySelector(".time");
  let losAngelesActualTime = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesActualTime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesActualTime.format(
    `h:mm:ss [<small>]A[</small>]`
  );

  let romeElement = document.querySelector("#rome");
  let romeDate = romeElement.querySelector(".date");
  let romeTime = romeElement.querySelector(".time");
  let romeActualTime = moment().tz("Europe/Rome");
  romeDate.innerHTML = romeActualTime.format("MMMM Do YYYY");
  romeTime.innerHTML = romeActualTime.format(`h:mm:ss [<small>]A[</small>]`);
}
updateTime();
setInterval(updateTime, 1000);
