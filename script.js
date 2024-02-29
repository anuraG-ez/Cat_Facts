const URL = "https://cat-fact.herokuapp.com/facts";
let factContainer = document.querySelector(".facts-para");
let showBtn = document.querySelector("#sh-btn");



const getFacts = async() =>{
    var counter = Math.floor((Math.random()*5));
    console.log(counter);
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    factContainer.innerText = data[counter].text;
}

showBtn.addEventListener(("click"),getFacts);
