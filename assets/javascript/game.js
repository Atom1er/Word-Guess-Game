var indication =["Capital of landlocked country in West Africa called Burkina Faso", "Country of Colonel Gaddafi, it is a contry in North Africa, bordered by the Mediterranean Sea to the north,"]
var question = ["what is the main City?", "what is the name of this contry?"]
var word = ["OUAGADOUGOU", "LIBYAN"];
var GuessWord1 = word[0].split("");
var GuessWord2 = word[1].split("");
var win = 0;
var lost = 0;
var userGuess = document.getElementById("answer");
var Question = document.getElementById("Question");
var indic = document.getElementById("hint");
var score = document.getElementById("win");
var lost = document.getElementById("lost");
var life = document.getElementById("live");
var f =0;
var t =0;
var l=10;
var KeyName;


var ran = Math.floor(Math.random() * word.length);
// for (var p=0; p<l; p++){
Result();
if(ran == 0 && l>0){
    Question.innerText=(question[0]);
    indic.innerText=(indication[0]);
    var Ans = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    userGuess.innerText = (Ans);
    document.addEventListener('keypress', (event) => {
        KeyName = event.key.toUpperCase();
        // userGuess.innerText = (KeyName);
        Result();
        if(KeyName=='A'){
            // alert('cool');
            Ans[2]=["A"];
            Ans[4]=["A"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        } else if(KeyName == 'D'){
            Ans[5]=["D"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        }else if(KeyName == 'G'){
            Ans[3]=["G"];
            Ans[8]=["G"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        }else if(KeyName == 'O'){
            Ans[0]=["O"];
            Ans[6]=["O"];
            Ans[9]=["O"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        } else if(KeyName == 'U'){
            Ans[1]=["U"];
            Ans[7]=["U"];
            Ans[10]=["U"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        } else{
            f++;
            Result();
        }
    });
    
}


//2nd word

else if(ran == 1 && l>0){
    Question.innerText=(question[1]);
    indic.innerText=(indication[1]);
    var Ans = ["_", "_", "_", "_", "_", "_"]
    userGuess.innerText = (Ans);
    document.addEventListener('keypress', (event) => {
        KeyName = event.key.toUpperCase();
        // userGuess.innerText = (KeyName);
        Result();
        if(KeyName=='A'){
            // alert('cool');
            Ans[4]=["A"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        } else if(KeyName == 'B'){
            Ans[2]=["B"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        }else if(KeyName == 'I'){
            Ans[1]=["I"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        }else if(KeyName == 'L'){
            Ans[0]=["L"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        } else if(KeyName == 'N'){
            Ans[5]=["N"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        }else if(KeyName == 'Y'){
            Ans[3]=["Y"];
            userGuess.innerText = (Ans);
            t++;
            Result();
        } else{
            f++;
            Result();
        }
    });
}

function Result(){
    var l=10;
    l=l-f;
    life.innerText = ('You have '+ l +' tentatives remaining');
    score.innerText = ('You found '+ t +' letters');
    lost.innerText = ('You missed '+ f +' letters');
}




