const Eventday = document.getElementById("Eventday");

function DateUpdate() {
    const eventDay = new Date("2024-06-07");
    const currentDate = new Date();

    const DifferenceinTime = eventDay.getTime() - currentDate.getTime();

    const Day = Math.floor(DifferenceinTime / (1000 * 60 * 60 * 24));
    const Hour = Math.floor((DifferenceinTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Minute = Math.floor((DifferenceinTime % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((DifferenceinTime % (1000 * 60)) / 1000);

    Eventday.textContent = `Days: ${Day}, Hours: ${Hour} ,Minutes: ${Minute}, Seconds: ${Seconds}`;
}

setInterval(DateUpdate, 1000);

var typed = new Typed(".feast", {
    strings: ["Before The Feast", "Before The Feast", "Before The Feast"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});


