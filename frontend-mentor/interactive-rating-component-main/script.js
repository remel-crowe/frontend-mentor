const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you")
const submitBtn = document.getElementById("submit")
const rateBtn = document.getElementById("rate")
const rating = document.getElementById("rating")
const numbers = document.querySelectorAll(".btn")


submitBtn.addEventListener("click", () => {
    thankYou.classList.remove("hidden");
    mainContainer.style.display = "none";
})


rateBtn.addEventListener("click", () => {
    thankYou.classList.add("hidden");
    mainContainer.style.display = "block"
})


numbers.forEach((number) => {
    number.addEventListener("click", () => {
        rating.innerHTML = (number.innerHTML);
    })
})
