let myNumber;
let numberOfGuesses = 0;

function loadNumber() {
    myNumber = Math.floor(Math.random() * 100) + 1;
    // alert(myNumber)
}

function check() {

    numberOfGuesses++;
    let guess = document.getElementById("myGuess").value;

    if (parseInt(guess) === parseInt(myNumber)) {
        BackGroundChange();
        //document.getElementById("rabbit").style.visibility = "visible";
        setTimeout(function() {
            alert("You are the winner ! You guest after " + numberOfGuesses + " times!");
        },20);
        
        setTimeout(function() {
            if (confirm("You wanna play again?")) {
                document.location.reload();
            } else {
                window.close();
            }
        },30)
        
        

    } else if (parseInt(guess) > parseInt(myNumber)) {
        let reaction = "I am thinking about lower number";
        document.getElementById("reaction").innerHTML = reaction;

    } else {
        let reaction = "I am thinking about higher number";
        document.getElementById("reaction").innerHTML = reaction;
    }
    document.getElementById('myGuess').value = '';
    document.getElementById('guessCount').innerHTML = ("This is your test number: " + numberOfGuesses);
}


loadNumber();

function BackGroundChange() {
    let url = "./image/mix.png";

    let div = document.getElementById("container");
    div.style.backgroundImage = `url(${url})`;
    div.style.width = "100%";
    div.style.height = "100%";
    return true;

}