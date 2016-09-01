/*
 Using the example data set,
 compute the average age difference between mothers and children (the age of the mother when the child is born).
 Note that not all the mothers mentioned in the data are themselves present in the array.
 You can create a helper object, which will make it easy to find a person’s object from their name.
 */

var myData = JSON.parse(ANCESTRY_FILE);

/**
 * return the position of the object if the name is equal
 * */
function getPosition(targetArr, motherName){
    for (var i=0; i< targetArr.length-1; i++) {
        if (targetArr[i].name === motherName){
            return i;
    }
    }
    return -1;
}

/**
 * returns mothers average age from an array of objects
 * */
function getMotherAverageAge(data){
    var sumOfAge = 0,
        position,
        counter = 0;

    for (var i=0; i < data.length-1; i++){
        if(data[i].mother != null) {
            position = getPosition(data, data[i].mother);
            if (position != -1) {
                sumOfAge += data[i].born - data[position].born;
                counter++;
            }
        }
    }

    if (counter) {
        console.log("There are " + counter + " mothers found in the array");
        return (sumOfAge / counter).toFixed(2);
    }
    else
        return 0;
}

document.write("The mothers Average Age is: " + getMotherAverageAge(myData));


