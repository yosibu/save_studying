let count = 0;
let intervalID;
s_btn.onclick = async () => {
  document.getElementById("w_btn").disabled =false;
  document.getElementById("f_btn").disabled =false;
  document.getElementById("s_btn").disabled =true;
  intervalID = setInterval(action, 1000);
};

w_btn.onclick = async () => {
  clearInterval(intervalID);
  document.getElementById("s_btn").disabled =false;
  document.getElementById("w_btn").disabled =true;
}

f_btn.onclick = async () => {
  clearInterval(intervalID);
  count = 0;
  document.getElementById("s_btn").disabled =flase;
  document.getElementById("w_btn").disabled =true;
  document.getElementById("f_btn").disabled =true;
}

function action(){
    count++;
    div1.innerHTML = count;
}