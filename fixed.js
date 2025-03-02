let count = 0;

function showAlert() {
  alert("Board update successfully");
  count++;

  let btn = document.getElementById("dis").innerText;
  let btn1 = parseInt(btn);

  let num = btn1 - count;

  let twoThree = document.getElementById("th").innerText;
  let twoThree1 = parseInt(twoThree);

  let thNum = twoThree1 + count;
  console.log(thNum);
  count = 0;

  document.getElementById("dis").innerText = num;
  document.getElementById("th").innerText = thNum;

  if (btn == 1) {
    alert("Congrates!!! you hava completed all the task.");
  }
}
