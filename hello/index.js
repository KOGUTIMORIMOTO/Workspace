function saveData1() {
    var inputData1 = document.getElementById('dataInput1').value;
    localStorage.setItem('savedData1', inputData1);

    var inputData1_1 = document.getElementById('dataInput1_1').value;
    localStorage.setItem('savedData1_1', inputData1_1);

    document.getElementById("current_date").innerHTML = Date();
}

function saveData2() {
    var inputData2 = document.getElementById('dataInput2').value;

    localStorage.setItem('savedData2', inputData2);
}

function saveData3() {
    var inputData3 = document.getElementById('dataInput3').value;

    localStorage.setItem('savedData3', inputData3);
}

function saveData4() {
    var inputData4 = document.getElementById('dataInput4').value;

    localStorage.setItem('savedData4', inputData4);
}

document.addEventListener('DOMContentLoaded', function() {
    var savedData1_1 = localStorage.getItem('savedData1_1');
    document.getElementById('dataInput1_1').value = savedData1_1 || 'タイトルなし'; 
});

document.addEventListener('DOMContentLoaded', function() {
    var savedData2_2 = localStorage.getItem('savedData2_2');
    document.getElementById('dataInput2_2').value = savedData2_2 || 'タイトルなし'; 
 });
        
document.addEventListener('DOMContentLoaded', function() {
    var savedData3_3 = localStorage.getItem('savedData3_3');
    document.getElementById('dataInput3_3').value = savedData3_3 || 'タイトルなし'; 
});
        
document.addEventListener('DOMContentLoaded', function() {
    var savedData4_4 = localStorage.getItem('savedData4_4');
    document.getElementById('dataInput4_4').value = savedData4_4 || 'タイトルなし'; 
});