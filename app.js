//Hent API via FETCH
var requestOptions = {
  method: "GET",
  Headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
};

fetch("https://thronesapi.com/api/v2/Characters", requestOptions)
  .then((response) => response.json())
  .then((char) => {

    //Sorter alfabetisk
    char.sort( function( a, b ) {
        a = a.fullName.toLowerCase();
        b = b.fullName.toLowerCase();
    
        return a < b ? -1 : a > b ? 1 : 0;
    });

    //fyll ut SELECT boksene med navn fra API
    for (let c in char) {
      const dropDownEl = document.getElementById("character-drop");

      let newCharEl = document.createElement("option");
      newCharEl.className = "character-option";
      newCharEl.innerHTML = char[c].fullName;
      newCharEl.value = char[c].id;

      dropDownEl.appendChild(newCharEl);
    }

    //Standard informasjon for første valgte
    charName = document.getElementById("char-name");
    charImg = document.getElementById("char-img");
    charTitle = document.getElementById("char-title");
    charFamily = document.getElementById("char-family");
    document.getElementById("char-name").innerHTML = char[0].fullName;

    charName.innerHTML = char[0].fullName;
    charTitle.innerHTML = 'Title: ' + char[0].title;
    charFamily.innerHTML = 'Family: ' + char[0].family;
    charImg.style.background = "url(" + char[0].imageUrl + ")";

    //Endre informasjon ettersom SELECT OPTION endres med event listener
    document
      .getElementById("character-drop")
      .addEventListener("change", function () {
        //Sjekk at det fungerer
        console.log("You selected: ", this.value);
        //Endre verdier
        charName.innerHTML = char[this.value].fullName;
        charTitle.innerHTML = 'Title: ' + char[this.value].title;
        charFamily.innerHTML = 'Family: ' + char[this.value].family;
        charImg.style.background = "url(" + char[this.value].imageUrl + ")";
      });
  })
  .catch((error) => console.log("error", error));

//   JSON
// {
//    "id": 0,
//    "firstName": "Daenerys",
//    "lastName": "Targaryen",
//    "fullName": "Daenerys Targaryen",
//    "title": "Mother of Dragons",
//    "family": "House Targaryen",
//    "image": "daenerys.jpg",
//    "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg"
//  }
