const nameList = document.getElementById("nameList");
const order = document.getElementById("order");
const output = document.getElementById("output");
const resetButton = document.getElementById("resetButton");
const fieldList = document.getElementById("fieldList");
// const orderTable = document.getElementById("order-table");
const orderTable = document.getElementById("order-table").getElementsByTagName("tbody")[0];

let selectedNames = [];
let numberList = [];
let selectedFields = [];
let currentNumber = 1;
let currentRow;

function convertToChineseNum(num) {
    const chineseNumList = ['一棒 ', '二棒 ', '三棒 ', '四棒 ', '五棒 ', '六棒 ', '七棒 ', '八棒 ', '九棒 ', '十棒 ', '十一棒 '];
    return chineseNumList[num-1];
}

  
nameList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const nameElement = event.target;
      const name = nameElement.textContent;
      const numberElement = nameElement.querySelector(".number");
  
      if (selectedNames.includes(name)) {
        selectedNames = selectedNames.filter((n) => n !== name);
        const number = numberList[selectedNames.indexOf(name)];
        numberList = numberList.filter((n) => n !== number);
        numberElement.textContent = convertToChineseNum(currentNumber);
        currentNumber++;
      } else {
        selectedNames.push(name);
        numberList.push(currentNumber);
        numberElement.textContent = convertToChineseNum(currentNumber);
        currentNumber++;
      }
      nameElement.classList.toggle("selected");
      
      const row = document.createElement("tr");
      const numCol = document.createElement("td");
      const nameCol = document.createElement("td");
      numCol.textContent = convertToChineseNum(numberList[numberList.length - 1]);
      nameCol.textContent = name;
      row.appendChild(numCol);
      row.appendChild(nameCol);
      orderTable.appendChild(row);
      currentRow = row; 
    }
});

fieldList.addEventListener("click", (event) =>{
  if (event.target.tagName === "LI") {
    const fieldElement = event.target;
    const field = fieldElement.textContent;

    if (selectedFields.includes(field)) {
      selectedNames = selectedNames.filter((n) => n !== field);
      const number = numberList[selectedNames.indexOf(field)];
      numberList = numberList.filter((n) => n !== number);

    } else {
      selectedFields.push(field);
    }
    fieldElement.classList.toggle("selected");

    if (currentRow) {
      // 使用 currentRow 更新內容
      const fieldCol = document.createElement("td");
      fieldCol.textContent = field;
      currentRow.appendChild(fieldCol);
    }
  }
});

order.addEventListener("click", () => {
  const selectedCount = selectedNames.length;
  if (selectedCount < 10) {
    alert(`Please select at least 10 names. Currently selected: ${selectedCount}`);
  } else {
    /*
    output.innerHTML = `<p>Order</p><ul><li>${selectedNames.join("</li><li>")}</li></ul>`;
    var html = '<p>Order</p><ul>';
    */
  
    var html = '<ul class="orderUl">';
    for (var i = 0; i < selectedNames.length; i++) {
      var name = selectedNames[i].replace(/\s/g,'');
      if(name ==="魏靖諺34"|| name ==="林威志25" || name ==="黃耀寬88"){
        html += '<li class="orderList "><div class="flex song"><p>' + selectedNames[i] + '   <span class = "cyan"> '+ selectedFields[i] + '</p><audio class="" src="music/'+ name +'.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第二打席</p><audio src="music/'+ name +'_2.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div> </li>';
      }else if(name === "朱耕緯3"){
        html += '<li class="orderList "><div class="flex song"><p>' + selectedNames[i] + '   <span class = "cyan"> '+selectedFields[i] +'</p><audio class="" src="music/'+ name +'.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第二打席</p><audio src="music/'+ name +'_2.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第三打席</p><audio src="music/'+ name +'_3.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div> </li>';
      }
      else if(name === "施士翊99"){
        html += '<li class="orderList "><div class="flex song"><p>' + selectedNames[i] +  '   <span class = "cyan"> '+ selectedFields[i] +'</p><audio class="" src="music/'+ name +'.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第二打席</p><audio src="music/'+ name +'_2.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第三打席</p><audio src="music/'+ name +'_3.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第四打席</p><audio src="music/'+ name +'_4.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div> </li>';
      }
      else if(name === "莊維德15"|| name === "何晏吉27" || name === "曾裕祐28" || name === "陳宗翰46" || name === "李承諭56" || name === "謝秉廷89" || name === "黃聖堯97") {
        html += '<li class="orderList song"><p>' + selectedNames[i] + '   <span class = "cyan"> '+ selectedFields[i] + '</span></p><audio class="" src="music/musicgang.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio> </li>';
      }
      else{
        html += '<li class="orderList song"><p>' + selectedNames[i] + '   <span class = "cyan"> '+ selectedFields[i] + '</p><audio class="" src="music/'+ name +'.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio> </li>';
      }
      
    }
    html += '</ul>';
    if(ul.style.display === "flex") {
        ul.style.display = "none";
        field.style.display = "none";
    } else {
        ul.style.display = "flex";
        field.style.display = "flex";
    }
    if(table.style.display === "table"){
      table.style.display = "none";
    } else{
      table.style.display = "table"
    }
    output.innerHTML = html;
  }
});

resetButton.addEventListener("click", () => {
    const selectedElements = nameList.querySelectorAll(".selected");
    const selectedElements2 = fieldList.querySelectorAll(".selected");
    for (let element of selectedElements) {
      element.classList.remove("selected");
      element.querySelector(".number").textContent = "";
    }
    for (let element of selectedElements2) {
      element.classList.remove("selected");
    }
    selectedNames = [];
    numberList = [];
    selectedFields = [];
    currentNumber = 1;
    const tbody = document.getElementsByTagName("tbody")[0];
    const rows = tbody.getElementsByTagName("tr");
    tbody.innerHTML = "";
    output.innerHTML = "";
  });


var listButton = document.getElementById("buttonId");
var ul = document.getElementById("nameList");
var field =document.getElementById("fieldList");
var table =document.getElementById("order-table");


listButton.addEventListener("click", function(){
    if(ul.style.display === "none") {
        ul.style.display = "flex";
        field.style.display = "flex";
    } else {
        ul.style.display = "none";
        field.style.display = "none";
    }
    if(table.style.display === "none"){
      table.style.display = "table";
    } else{
      table.style.display = "none"
    }
});

var chanceButton = document.getElementById("buttonChanceSong");
var divChance = document.getElementById("listChanceSong");

chanceButton.addEventListener("click", function(){
    if(divChance.style.display === "none") {
        divChance.style.display = "block";
    } else {
        divChance.style.display = "none";
    }
});

var changeButton = document.getElementById("buttonChangeSong");
var divChange= document.getElementById("listChangeSong");

changeButton.addEventListener("click", function(){
    if(divChange.style.display === "none") {
      divChange.style.display = "block";
    } else {
      divChange.style.display = "none";
    }
});