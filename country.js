const countriesContainer = document.querySelector(".countries");
const getCapital = document.querySelector("#capital");
const capitalBtn = document.querySelector(".capital-btn");
const displayCountry = document.querySelector(".display-country");

const render = function (data) {
  const html = `
    <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
    <h3 class="capital__name"><span class="capital">${getCapital.value}</span>  is the capital city of</h3>

    <h3 class="country__name"> ${data.name}</h3>

    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
   
        </div>
        </article>
        `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};


const getCountry1 = async function () {
 const res= await fetch(`https://restcountries.com/v2/capital/${getCapital.value}`)
    const data = await res.json()
     console.log("🚀 ~ file: country.js:33 ~ getCountry1 ~ data:", data)
     render(data[0]);
  getCapital.value = "";
};
capitalBtn.addEventListener("click", () => {
  getCountry1();
});
