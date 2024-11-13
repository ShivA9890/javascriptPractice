const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#results");

    if(isNaN(height) || height<0){
        result.innerHTML = "Give valid Height"
    }
    else if(isNaN(weight) || weight<0){
            result.innerHTML = "Give valid Weight"
        }
    else{
        const bmi = (weight /((height**2)/10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi}`
        let comment = document.querySelector("#comment");
        if(bmi <= 18.6){
            comment.innerHTML = "You are under Weight"
        }else if (bmi > 18.6 && bmi <= 24.9){
            comment.innerHTML = "Your weight is in normal Range"
        }else{
            comment.innerHTML = "You are OverWeight"
        }
    }
})