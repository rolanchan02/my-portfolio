let Fname;
let Pos;
let idnum;
let rpd;
let numberofdaywork;
let rph;
let otrate;
let numberofdayworkot;


let sss;
let philhealth;
let pagibig;
let tax;
let totaldeduction;
let netincome;
let gross_income;





document.getElementById("CALCULATE").onclick = function(){

    Fname = document.getElementById("Fname").value;
    document.getElementById("name").innerHTML = Fname;

    Pos = document.getElementById("Pos").value;
    document.getElementById("pos").innerHTML = Pos;

    idnum = document.getElementById("idnum").value;
    idnum = Number(idnum);
    document.getElementById("id").innerHTML = idnum;


    rpd = document.getElementById("RPD").value;
    rpd = Number(rpd);
    document.getElementById("rpd").innerHTML = rpd;

    numberofdaywork = document.getElementById("NUMBEROFDAYWORK").value;
    numberofdaywork = Number(numberofdaywork);
    document.getElementById("nodw").innerHTML =  numberofdaywork;

    numberofdayworkot = document.getElementById("NUMBEROFDAYWORKOT").value;
    numberofdayworkot = Number(numberofdayworkot);
    document.getElementById("nodwOT").innerHTML =  numberofdayworkot;

    otrate = document.getElementById("OTRATE").value;
    otrate = Number(otrate);
    document.getElementById("otr").innerHTML =  otrate;

    rph = rpd / 8;

    otrate = rpd * .30 + rph;
    gross_income = (rpd * numberofdaywork) + (otrate * numberofdayworkot);

    tax = gross_income * 0.08;
    sss = gross_income * 0.05;
    pagibig = gross_income * 0.04;
    philhealth = gross_income * 0.02;

    totaldeduction = tax + sss + pagibig + philhealth;
    netincome = gross_income - totaldeduction;

    const total = document.getElementById("totalIncome").innerHTML = "Net income: " + netincome;

}