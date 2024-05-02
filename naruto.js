let input1 = document.querySelector(".hobby");
let input2 = document.querySelector(".power");
let button = document.querySelector("button");
let results = document.querySelector(".results");



button.addEventListener("click", function () {
    console.log("button check")
    let answer1 = input1.value;
    console.log(answer1)
    let answer2 = input2.value;
    console.log(answer2)




    if (answer1 <= "Pranks" && answer2 === "Fox") {


        console.log("naruto");
        results.innerHTML = "You are naruto";




    }


    if (answer1 >= "Train" && answer2 === "Thunder") {


        console.log("naruto");
        results.innerHTML = "You are sasuke";
    }
    if (answer1 > "Hunt" && answer2 === "Fire") {


        console.log("naruto");
        results.innerHTML = "You are madara";


    }
    if (answer1 <  "Fight" && answer2 === "Strength") {


        console.log("naruto");
        results.innerHTML = "You are rock lee";
    }
});

