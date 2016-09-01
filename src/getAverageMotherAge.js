/**
 * Created by tomer_c on 9/1/2016.
 */
/*
 Using the example data set,
 compute the average age difference between mothers and children (the age of the mother when the child is born).
 Note that not all the mothers mentioned in the data are themselves present in the array.
 You can create a helper object, which will make it easy to find a person’s object from their name.
 */

var myData = JSON.parse(ANCESTRY_FILE);

/**
 * returns mothers average age from an array of objects
 * */
function getMotherAverageAge(data){
    var sumOfAge = 0,
        position,
        counter = 0,
        dataMap = {};

    for (var i=0; i <= data.length-1; i++) {
        //var id = "ID";
        if(data[i].mother != null) {
            //id += i;
            dataMap[data[i].mother] = i;
            //dataMap[id] = i
        }
    }

    for (var j=0; j <= data.length-1; j++) {
        // check if the data map has the name in one of its keys, if so then sum her age
        if(dataMap.hasOwnProperty(data[j].name)) {
            position = dataMap[data[j].name];
            sumOfAge += data[position].born - data[j].born;
            counter++;
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


