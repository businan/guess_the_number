let myNumber;
let numberOfGuesses = 0;

function loadNumber() {
   myNumber = Math.floor(Math.random() * 5) + 1;
   alert(myNumber)
}

function check() {
    numberOfGuesses++;
    let guess = document.getElementById("myGuess").value;
    
    if (parseInt(guess) === parseInt(myNumber)) {

        alert("You are the winner ! You guest after " + numberOfGuesses + " times!");
        document.location.reload();
    } else if (parseInt(guess) > parseInt(myNumber)){
        let reaction = "I am thinking about lower number";
        document.getElementById("reaction").innerHTML = reaction;
        
    }else {
        let reaction = "I am thinking about higher number";
        document.getElementById("reaction").innerHTML = reaction;
    }
    document.getElementById('myGuess').value = '';
    document.getElementById('guessCount').innerHTML = ("This is your test number: " + numberOfGuesses);
}


loadNumber();