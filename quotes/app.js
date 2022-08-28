

var requestOptions = {
    method: 'GET',
    Headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',

  };
  
  fetch("https://api.gameofthronesquotes.xyz/v1/characters", requestOptions)
    .then(response => response.json())
    .then(char => {
    

        console.log(char[5].house.name)
        
        
            for (let c in char) {

                const charContainerEl = document.getElementById('char-container')

 //   Hvis 1 div  let charID = c;
 //               let newCharEl = document.createElement('div');
 //
 //               newCharEl.className = "character";
 //               newCharEl.innerHTML = char[c].name;
 //               document.body.appendChild(newCharEl);

                function returnChars(char) {
                    return "<div class =\"characters\">" + char.map(char => `
                        <div id="${char.slug}">
                           <h1>${char.name}</h1>
                           <p>${char.quotes[0]}</br></p>
                        </div>
                       `).join('') + "</div>";
                }
                charContainerEl.innerHTML = returnChars(char);

            }


    })
    .catch(error => console.log('error', error));


 //   JSON
 //   {
 //       "name": "Jon Snow",
 //       "slug": "jon",
 //       "house": {
 //           "slug": "stark",
 //           "name": "House Stark of Winterfell"
 //       },
 //       "quotes": [
 //           "If I fall, don't bring me back.",
 //           "There is only one war that matters. The Great War. And it is here.",
 //           "Love is the death of duty.",
 //           "Everything before the word \"but\" is horseshit.",
 //           "The war is not over. And I promise you, friend, the true enemy won't wait out the storm. He brings the storm."
 //       ]
 //   }