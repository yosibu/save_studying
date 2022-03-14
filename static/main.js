let count = 0;
let intervalID;
let days;
s_btn.onclick = async () => {
  document.getElementById("w_btn").disabled =false;
  document.getElementById("f_btn").disabled =false;
  document.getElementById("s_btn").disabled =true;
  const day1 = new Date();
  days = day1.toLocaleDateString()
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
  const response = await fetch("/api/time?x=" + count + "&y=" + days, {
    method: "GET"
  });
  const json = await response.json()
  const nankai = json.kiroku.length;
  addData(json.kiroku,json.days,nankai)
  count = 0;
  days = 0;
}

window.onload = function() {
  const response = await fetch("/api/turn", {
    method: "GET"
  });
  const json = await response.json()
  const nankai = json.kiroku.length;
  addData(json.kiroku,json.days,nankai)
}

function action(){
    count++;

    let H = Math.floor(count / 3600 % 24)
    let M = Math.floor(count / 60 % 60)
    let S = Math.floor(count % 60)
    let h = ('00' + H).slice(-2);
    let m = ('00' + M).slice(-2);
    let s = ('00' + S).slice(-2);
    div1.innerHTML =h+":"+m+":"+s;
}

function addTable(niti,jika){
  let table = document.getElementById("kirokuTable")
  let newRow = table.insertRow()

  let newCell = newRow.insertCell()
  let newText = document.createTextNode(niti)
  newCell.appendChild(newText)

  let H = Math.floor(jika / 3600 % 24)
  let M = Math.floor(jika / 60 % 60)
  let S = Math.floor(jika % 60)
  let h = ('00' + H).slice(-2);
  let m = ('00' + M).slice(-2);
  let s = ('00' + S).slice(-2);

  newCell = newRow.insertCell()
  newText = document.createTextNode(h+":"+m+":"+s)
  newCell.appendChild(newText)
}

function addData(kiroku,days,kai){
  let table = document.getElementById("kirokuTable")
  table.deleteTHead();
  let thead = table.createTHead();
  let newRow = thead.insertRow();

  let newCell = newRow.insertCell()
  let newText = document.createTextNode("実施日")
  newCell.appendChild(newText)

  newCell = newRow.insertCell()
  newText = document.createTextNode("実施時間")
  newCell.appendChild(newText)

  for(let i = 0;i < kai; i++){
    addTable(days[i],kiroku[i]);
  }
}