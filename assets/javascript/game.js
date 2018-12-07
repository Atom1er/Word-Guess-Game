  
   //WordLibrary, random word to be Guess 
        var indication = ["I am a landlocked country in West Africa, my capital is called OUAGADOUGOU", "Country of Colonel Gaddafi, it is a contry in North Africa, bordered by the Mediterranean Sea to the north", "From BigCats: I am the King of jungle", "zone of transition in Africa between the Sahara to the north and the Sudanian Savanna to the south"];
        var question = ["what is the name of this Country?", "what is the name of this contry?", "What is my name?", "What is the name of this place?"];
        var word = ["BURKINA", "LIBYAN", "LION", "SAHEL"];
        var userkey = document.getElementById("answer");
        var lost = document.getElementById("lost");
        var indic = document.getElementById("hint");
        var score = document.getElementById("win");
        var life = document.getElementById("live");
        var l = 10;
        var m = 0;
        var w = 0;
        var correct = [];
        var incorrect =[];
        var ran = Math.floor(Math.random() * word.length);
        var randomWord = word[ran];
        let actualWord  = randomWord.split('');
        
    console.log(actualWord);

    var Underscor = [];
    var Underscore  = () => {
        for (let i = 0; i < actualWord.length; i++) {
               Underscor.push('_');         
        }
        return Underscor;
    }
    console.log(Underscore());
    userkey.innerHTML = Underscor;
    lost.innerHTML = ("You have missed " +m);
    life.innerHTML = (l + " remaining attempt");

    for(var q = 0; q < word.length; q++){
        if(ran == q){
        Question.innerText=(question[q]);
        indic.innerText=(indication[q]);
        }

    }

    document.addEventListener("keypress", (event) => {
        let UserEnt = String.fromCharCode(event.keyCode);
        let UserGuess = UserEnt.toUpperCase();
        UserGuess.toUpperCase();
        // console.log(UserGuess);
        if(actualWord.indexOf(UserGuess) > -1){
            correct.push(UserGuess);
            Underscor[actualWord.indexOf(UserGuess)] = UserGuess;
            userkey.innerHTML = Underscor;
            // console.log(correct);
            if(Underscor.join(',') == actualWord) {
                alert("Congratulation You Got It!!!");
                w++;
            }
            console.log(Underscor);
        } else{
            incorrect.push(UserGuess);
            console.log(incorrect);
            m++;
            l-= 1;
            life.innerHTML = (l + " remaining attempt");
            lost.innerHTML = ("You have missed " +m);
        }
        if(l<1){
            alert("Game Over");
            var tryagain =prompt("Try again?");
            if(tryagain){
                location.reload(true);
            }
        }
        
    })




