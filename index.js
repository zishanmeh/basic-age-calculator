document.querySelector(".calcButton").addEventListener("click", () => {

    //userBirthDate
    let userInput = document.querySelector("#userBirth");
    let userBirthDate = new Date(userInput.value);
    let userBirthDay = userBirthDate.getDate();
    let userBirthMonth = userBirthDate.getMonth() + 1; // Months are zero-based, so add 1
    let userBirthYear = userBirthDate.getFullYear();


    // currentDate
    let today = new Date();
    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1; // Months are zero-based, so add 1
    let todayYear = today.getFullYear();

    //total month 
    let totalMonth = 12;

    //calculate age

    if(userBirthDate){

// Validate birth year
if (userBirthYear > todayYear){
    document.querySelector(".showDate").innerHTML = `Birth year cannot be in the future.`;
    return;
}
// Validate birth month
if (userBirthYear === todayYear && userBirthMonth > todayMonth){
    document.querySelector(".showDate").innerHTML = `Birth month cannot be in the future.`;
    return;
}
// Validate birth Day
if (userBirthYear === todayYear && userBirthMonth === todayMonth && userBirthDay > todayDay){
    document.querySelector(".showDate").innerHTML = `Birth day cannot be in the future.`;
    return;
}

let calculateYear =  todayYear - userBirthYear;

//validate day 
if (userBirthYear === todayYear && userBirthMonth === todayMonth & userBirthDay < todayDay){
    calculateYear = 0;
    userBirthMonth = 0;
    userBirthDay = todayDay - userBirthDay;
    document.querySelector(".showDate").innerHTML = `You are ${calculateYear} years ${userBirthMonth} month and ${userBirthDay} days old`;
    return;
}
if (userBirthYear === todayYear && userBirthMonth === todayMonth & userBirthDay === todayDay){
    document.querySelector(".showDate").innerHTML = "You just born today 😁";
    return;
}

    
if (userBirthMonth > todayMonth){
    calculateYear --;
    userBirthMonth = totalMonth - (userBirthMonth - todayMonth);
} else if(userBirthMonth < todayMonth){
    userBirthMonth = todayMonth - userBirthMonth;
}

if (userBirthDay > todayDay){
    userBirthDay = todayDay
} else if (userBirthDay < todayDay){
    userBirthDay = todayDay - userBirthDay;
}


    } else{
        document.querySelector(".showDate").innerHTML = "Please enter your valid birthdate."
        return;
    }
    
    document.querySelector(".showDate").innerHTML = `You are ${calculateYear} years ${userBirthMonth} month and ${userBirthDay} days old`;

});
