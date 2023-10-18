import "./styles.css";

const onClickAdd = () => {
  //テキストの値を変数に格納
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  //divタグ生成
  const div = document.createElement("div");
  div.className ="listRow";
 
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const exportTarget = completeButton.parentNode;
    
    document.getElementById("completeTODOList").appendChild(exportTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incompleteTODOList").removeChild(deleteTarget);
  });


  //divタグの子要素にliとbutton追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incompleteTODOList").appendChild(div);

};


document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
