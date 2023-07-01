var hashMap = {};
hashMap["rock"] = 1;
hashMap["paper"] = 2;
hashMap["scissors"] = 3;
function playerOne(){
    var optionLength = document.querySelectorAll(".option").length;
    for (i = 0; i < optionLength; i++){
        var button = document.querySelectorAll(".option")[i];
        button.addEventListener("click", function(){
            var link = this.getAttribute("src");
            document.querySelector("#p1img").setAttribute("src", link);
            var playerTwoValue = playerTwo();
            var p1value = hashMap[this.getAttribute("alt")];
            winnerCalculator(p1value,playerTwoValue);
    
        });
    }
}
function playerTwo(){
    var playerTwo = Math.floor(Math.random() *3)+1;
    console.log(playerTwo);
    if (playerTwo === 1){        
        console.log("This works");
        document.querySelector("#p2img").setAttribute("src", "images/rock.png");
    }
    else if (playerTwo === 2){
        console.log("This works");
        document.querySelector("#p2img").setAttribute("src", "images/paper.webp");
    }
    else if (playerTwo === 3){
        document.querySelector("#p2img").setAttribute("src", "images/scissors.png");
    }
    return playerTwo;
}
function winnerCalculator(num1, num2){
    if (num1 === num2){
        document.querySelector("#finaltext").innerHTML = "DRAW!";
    }
    if (num1 === 1){
        if (num2 === 2){
            document.querySelector("#finaltext").innerHTML = "YOU LOST!";
            var audio = new Audio("sounds/fart.mp3");
            audio.play();
        }
        else if (num2 === 3){
            document.querySelector("#finaltext").innerHTML = "YOU WON!";
            var audio = new Audio("sounds/celebrate.mp3");
            audio.play();
        }
    }
    else if (num1 === 2){
        if (num2 === 1){
            document.querySelector("#finaltext").innerHTML = "YOU WON!";
            var audio = new Audio("sounds/celebrate.mp3");
            audio.play();
        }
        else if (num2 === 3){
            document.querySelector("#finaltext").innerHTML = "YOU LOST!";
            var audio = new Audio("sounds/fart.mp3");
            audio.play();
        }
    }
    else if (num1 === 3){
        if (num2 === 1){
            document.querySelector("#finaltext").innerHTML = "YOU LOST!";
            var audio = new Audio("sounds/fart.mp3");
            audio.play();
        }
        else if (num2 === 2){
            document.querySelector("#finaltext").innerHTML = "YOU WON!";
            var audio = new Audio("sounds/celebrate.mp3");
            audio.play();
        }
    }
}
playerOne();