//initialize grade bounds
var maxGrade = document.getElementsByName("max")[0].value;
var aPlusGrade = document.getElementsByName("A+")[0].value;
var aGrade = document.getElementsByName("A")[0].value;
var aMinusGrade = document.getElementsByName("A-")[0].value;
var bPlusGrade = document.getElementsByName("B+")[0].value;
var bGrade = document.getElementsByName("B")[0].value;
var bMinusGrade = document.getElementsByName("B-")[0].value;
var cPlusGrade = document.getElementsByName("C+")[0].value;
var cGrade = document.getElementsByName("C")[0].value;
var cMinusGrade = document.getElementsByName("C-")[0].value;
var dGrade = document.getElementsByName("D")[0].value;
var fGrade = document.getElementsByName("F")[0].value;

//array to hold the grades
const grades = [];
//variable to store value from new grade box
var input = document.getElementsByName("gradeInput")[0];

//listener to grab value from text box when enter is pressed
var submit = document.getElementById("grade");
submit.addEventListener("keypress", function(evt){
    if (evt.key === "Enter"){
        evt.preventDefault();
        if (parseFloat(input.value) >= parseFloat(fGrade) && parseFloat(input.value) <= parseFloat(maxGrade)){
            grades.push(parseFloat(input.value));
            updateGraph();
            input.value = '';
        }
        else{
            alert("Invalid Grade");
            input.value = '';
        }
    }
})

//add listener to change bounds button
var button = document.querySelector('input[value="Change Bounds"');
button.addEventListener('click', function(evt){
    evt.preventDefault();
    changeBounds();
})

//function to change the lower bounds of each letter grade
function changeBounds(){
    if (checkBounds() === true){
        maxGrade = document.getElementsByName("max")[0].value;
        aPlusGrade = document.getElementsByName("A+")[0].value;
        aGrade = document.getElementsByName("A")[0].value;
        aMinusGrade = document.getElementsByName("A-")[0].value;
        bPlusGrade = document.getElementsByName("B+")[0].value;
        bGrade = document.getElementsByName("B")[0].value;
        bMinusGrade = document.getElementsByName("B-")[0].value;
        cPlusGrade = document.getElementsByName("C+")[0].value;
        cGrade = document.getElementsByName("C")[0].value;
        cMinusGrade = document.getElementsByName("C-")[0].value;
        dGrade = document.getElementsByName("D")[0].value;
        fGrade = document.getElementsByName("F")[0].value;
        updateGraph();
    }
    else{
        alert("Invalid Bounds");
    }
}

//function to check if bounds are valid
function checkBounds(){
    var checkMax = parseFloat(document.getElementsByName("max")[0].value);
    var checkAP = parseFloat(document.getElementsByName("A+")[0].value);
    var checkA = parseFloat(document.getElementsByName("A")[0].value);
    var checkAM = parseFloat(document.getElementsByName("A-")[0].value);
    var checkBP = parseFloat(document.getElementsByName("B+")[0].value);
    var checkB = parseFloat(document.getElementsByName("B")[0].value);
    var checkBM = parseFloat(document.getElementsByName("B-")[0].value);
    var checkCP = parseFloat(document.getElementsByName("C+")[0].value);
    var checkC = parseFloat(document.getElementsByName("C")[0].value);
    var checkCM = parseFloat(document.getElementsByName("C-")[0].value);
    var checkD = parseFloat(document.getElementsByName("D")[0].value);
    var checkF = parseFloat(document.getElementsByName("F")[0].value);
    if (checkMax > checkAP && checkAP > checkA && checkA > checkAM
        && checkAM > checkBP && checkBP > checkB && checkB > checkBM
        && checkBM > checkCP && checkCP > checkC && checkC > checkCM
        && checkCM > checkD && checkD > checkF){
            return true;
    }
    else{
        return false;
    }
}

//function to update our histogram after changing lower bounds
function updateGraph(){
    var apBar = "";
    var aBar = "";
    var amBar = "";
    var bpBar = "";
    var bBar = "";
    var bmBar = "";
    var cpBar = "";
    var cBar = "";
    var cmBar = "";
    var dBar = "";
    var fBar = "";
    for (var i = 0; i < grades.length; i++){
        if (grades[i] <= maxGrade){
            if (grades[i] >= aPlusGrade && grades[i] <= maxGrade){
                apBar += "&nbsp&nbsp";
                document.getElementById("aPlusName").innerHTML = apBar;
            }
            else if (grades[i] >= aGrade){
                aBar += "&nbsp&nbsp";
                document.getElementById("aName").innerHTML = aBar;
            }
            else if (grades[i] >= aMinusGrade){
                amBar += "&nbsp&nbsp";
                document.getElementById("aMinusName").innerHTML = amBar;
            }
            else if (grades[i] >= bPlusGrade){
                bpBar += "&nbsp&nbsp";
                document.getElementById("bPlusName").innerHTML = bpBar;
            }
            else if (grades[i] >= bGrade){
                bBar += "&nbsp&nbsp";
                document.getElementById("bName").innerHTML = bBar;
            }
            else if (grades[i] >= bMinusGrade){
                bmBar += "&nbsp&nbsp";
                document.getElementById("bMinusName").innerHTML = bmBar;
            }
            else if (grades[i] >= cPlusGrade){
                cpBar += "&nbsp&nbsp";
                document.getElementById("cPlusName").innerHTML = cpBar;
            }
            else if (grades[i] >= cGrade){
                cBar += "&nbsp&nbsp";
                document.getElementById("cName").innerHTML = cBar;
            }
            else if (grades[i] >= cMinusGrade){
                cmBar += "&nbsp&nbsp";
                document.getElementById("cMinusName").innerHTML = cmBar;
            }
            else if (grades[i] >= dGrade){
                dBar += "&nbsp&nbsp";
                document.getElementById("dName").innerHTML = dBar;
            }
            else{
                fBar += "&nbsp&nbsp";
                document.getElementById("fName").innerHTML = fBar;
            }
        }
    }
}


