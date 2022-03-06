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
  document.getElementById("s_btn").disabled =false;
  document.getElementById("w_btn").disabled =true;
  document.getElementById("f_btn").disabled =true;
  count = 0;
}

function action(){
    count=count+10;

    let H = count % 60000 / 1000;
    let M = count % 3600000 / 60000;
    let S = count % 60;
    let h = ('00' + H).slice(-2);
    let m = ('00' + M).slice(-2);
    let s = ('00' + S).slice(-2);
    div1.innerHTML = h+":"+m+":"+s;
}