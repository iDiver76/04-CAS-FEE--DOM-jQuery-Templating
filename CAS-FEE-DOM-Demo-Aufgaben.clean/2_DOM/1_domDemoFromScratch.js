// about:blank
document.body.insertAdjacentHTML('beforeend', '<h2>dom demo 1</h2>');
let btnCnt = 0;
function addBtn() {
    document.body.insertAdjacentHTML('beforeend', `<button id="btn${btnCnt++}">click me</button>`);
}
addBtn();
//document.head.insertAdjacentHTML('beforeend', '<title>dom demo 1</title>');
//$0 & $(selector) are chrome console functions
//$0.onclick = function () {console.count('click')}
//$('button').onclick = function () {console.count('clack')}
//$('#btn0').onclick = function () {console.count('clack')}
//$('#btn0').onclick = function () {console.count('clack2', addBtn())}

