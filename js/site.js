
//Step ONE - controller accept requests
function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Check to see if user enter integers between 1 and 100
    if (Number.isInteger(startValue) && Number.isInteger(endValue) && startValue >= 1 && startValue <= 100 && endValue >= 1 && endValue <= 100) {
    

    displayValues(startValue, endValue);
    } else {
        Swal.fire("Oops!","Please enter integers between 1 and 100.")
    }

}


//Final Step - view
function displayValues(start, end) {
    
    //first get the ol element from the page
    element = document.getElementById("results");
    element.innerHTML = "";
    
for (let i = start; i <= end; i++) {
    
    //next create a new div element
    let item = document.createElement("div");

    if (i % 2 === 0) {
        item.classList.add("boldItem");
    } else {
        
    }


    //add classes to the li element
       item.classList.add("col");
    
    //set the message for the li element
    item.innerHTML = i;

    //add the new item to the list
    element.appendChild(item);
}

    
 
   

    

}