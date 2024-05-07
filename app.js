const inp = document.getElementById("cal-number");
const result = document.getElementById("result");

function clickBtn(el) {
    console.log(el.innerText);
    const exp = `${inp.value}${el.innerText}`;
    inp.value = exp;
    if (['+', '-', '*', '/', '='].includes(el.innerText)) return; {
        result.value = eval(exp);
        //here we have used eval() to evalute the expression
    }

}

function reset() {
    inp.value = "";
    result.value = "";
}