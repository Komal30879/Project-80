var guestName =[];

function submit(){
        var length_of_guest_names =[];
        var names = document.getElementById("guest_input").value;
        guestName.push(names);

    for (var k=0; k<length_of_guest_names; k++){
        display_guests_array.push("<div id='names'>" + guestName[k] + "</div>");
        document.getElementById("names").innerHTML = dispaly_guests_array;
    }
}

function show(){
    var length_of_guest_names = guestName.length;
    var display_guests_array =[];

    for (var k=0; k<length_of_guest_names; k++){
        display_guests_array.push("<div id='names_vertical'>" + guestName[k] + "</div>");
    }
    document.getElementById("names_vertical").innerHTML = dispaly_guests_array;

}


function sort(){
    names.sort();
    var dispaly_guests_array_sorted = [];
    dispaly_guests_array_sorted.push("<div id= 'sorted_names'>" + names + "</div>")
}

function search(){
    var s = document.getElementById("search_input").value;
    var found = 0;
    var j;

    for(j= 0;j<names.length; j++)
    {
        if(s== names[j]){
            found= found + 1;
        }
    }
    document.getElementById("repeat_names").innerHTML = "Name found " + found + " time/s";
    console.log("Name found " + found + " time/s");
}