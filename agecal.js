let Input_date = document.getElementById("Dates")
Input_date.max = new Date().toISOString().split("T")[0];
let Btn = document.getElementById("calculate");
let result = document.getElementById("paragraph")

Btn.addEventListener("click", calculateAge)


function calculateAge() {
    let birthday = new Date(Input_date.value);

    let d1 = birthday.getDate();
    let m1 = birthday.getMonth() + 1;
    let y1 = birthday.getFullYear();
    
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();


    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDaysInMonths(y1, m1) + d2 - d1;

    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `you'r age is ${y3} years, ${m3} months and ${d3} days old`;
}

function getDaysInMonths(year, month) {
    return new Date(year, month, 0).getDate()
}