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
  const response = await fetch("/api/time?x=" + count , {
    method: "GET"
  });
  div2.innerHTML = response;
  count = 0;
}

function action(){
    count++;

    let H = Math.floor(count / 3600 % 24)
    let M = Math.floor(count / 60 % 60)
    let S = Math.floor(count % 60)
    let h = ('00' + H).slice(-2);
    let m = ('00' + M).slice(-2);
    let s = ('00' + S).slice(-2);
    div1.innerHTML = h+":"+m+":"+s;
}
