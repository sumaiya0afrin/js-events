
const purpleButton = document.getElementById('make_purple');
purpleButton.onclick = function(){
    document.body.style.backgroundColor = 'purple';
    document.getElementById('title').innerText = 'Purple background';
    document.getElementById('title').style.color = 'gold';
}

const greenButton = document.getElementById('make_green');
greenButton.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'green';
    document.getElementById('title').innerText = 'Green background';
    document.getElementById('title').style.color = 'white';
})

document.getElementById('make_orange').addEventListener('click', () =>{
    document.body.style.backgroundColor ='orange';
    document.getElementById('title').innerText = 'Orange background';
    document.getElementById('title').style.color = 'Black';
})

document.getElementById("update_btn").addEventListener("click", () => {
    const textContainer = document.getElementById("text_container");
    const existingMessage = document.querySelector("#text_container p");
    const inputText = document.getElementById("update_input");
    const inputValue = inputText.value;
    if (inputValue !== "") {
      document.getElementById("text").innerText = inputValue;
      document.getElementById("text").style.fontSize = "30px";
      document.getElementById("text").style.textTransform = "capitalize";
      inputText.value = "";
      existingMessage.innerText = "";
    } else {
      if (!existingMessage) {
        const p = document.createElement("p");
        p.innerText = "Please Input Text";
        p.style.color = "red";
        textContainer.appendChild(p);
      }
    }
  });