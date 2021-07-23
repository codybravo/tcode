const nlist = [];
var editvar = "";

function pushList() {
    var newtemp = clutter();
    // Adding new name in the list.
    if (document.getElementById("btn").innerHTML === "enter") {
        if (nlist.length < 5 ){
            if (newtemp===false) {
                nlist.push(document.getElementById('text1').value);
                sortList();
                document.getElementById("text1").value = "";
            }else {
                alert("Name already exist.");
            }
        }else {
            alert("List is full.");
        }
    // Editing Name
    }else if (document.getElementById("btn").innerHTML === "Save"){
        if (newtemp === false){
            nlist[editvar] = document.getElementById("text1").value;
            sortList();
        }else {
            alert("Name already exist.");
        }
        document.getElementById("btn").innerHTML = "enter";
    }
    document.getElementById("text1").focus();
}

// Checking redundant name in array.
function clutter() {
    var clut = false;
    for (var i=0;i<nlist.length;i++) {
        if (nlist[i]===document.getElementById('text1').value) {
            clut = true;
            break;
        }
    }
    return clut;
} 

// Edit name function.
function editList(num) {
    document.getElementById("text1").focus();
    document.getElementById("text1").value = nlist[num];
    document.getElementById("btn").innerHTML =  "Save";
    editvar = num; 
}

// Deleting name from array.
function popList(n) {
    nlist.splice(n,1);
    sortList();
}

// Displaying name in screen
function sortList(){
    for (var i=1;i<6;i++) {
        if (i<=nlist.length) {
            document.getElementById("student"+i).innerHTML = (i)+". "+nlist[i-1];
        } else {
            document.getElementById("student"+i).innerHTML = (i)+". "+"Student"+(i);
        }  
    }
} 

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('btn').click();
        return false;
    }
    return true;
}