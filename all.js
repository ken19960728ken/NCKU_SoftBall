const nameList = document.getElementById("nameList");
const order = document.getElementById("order");
const output = document.getElementById("output");
const resetButton = document.getElementById("resetButton");

let selectedNames = [];
let numberList = [];
let currentNumber = 1;

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
      if(name === "朱耕緯3"|| name ==="魏靖諺34"){
        html += '<li class="orderList "><div class="flex song"><p>' + selectedNames[i] + '</p><audio class="" src="music/'+ name +'.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第二打席</p><audio src="music/'+ name +'_2.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div> </li>';
      }else if(name === "施士翊99"){
        html += '<li class="orderList "><div class="flex song"><p>' + selectedNames[i] + '</p><audio class="" src="music/'+ name +'.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第二打席</p><audio src="music/'+ name +'_2.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第三打席</p><audio src="music/'+ name +'_3.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div><div class="song second"><p class="small">第四打席</p><audio src="music/'+ name +'_4.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio></div> </li>';
      }
      else{
        html += '<li class="orderList song"><p>' + selectedNames[i] + '</p><audio class="" src="music/'+ name +'.mp3" controls controlsList="nodownload" preload="auto" id="music" loop></audio> </li>';
      }
      
    }
    html += '</ul>';
    output.innerHTML = html;
  }
});

resetButton.addEventListener("click", () => {
    const selectedElements = nameList.querySelectorAll(".selected");
    for (let element of selectedElements) {
      element.classList.remove("selected");
      element.querySelector(".number").textContent = "";
    }
    selectedNames = [];
    numberList = [];
    currentNumber = 1;
    output.innerHTML = "";
  });


var button = document.getElementById("buttonId");
var ul = document.getElementById("nameList");

button.addEventListener("click", function(){
    if(ul.style.display === "none") {
        ul.style.display = "flex";
    } else {
        ul.style.display = "none";
    }
});