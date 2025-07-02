function addLanguage(langName){
    const li=document.createElement("li");
    li.textContent=langName;
   document.querySelector(".Languages").appendChild(li);
}
function addOptiLang(langName){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector(".Languages").appendChild(li);
}
addLanguage("C++");
addLanguage("Typescript");
addOptiLang("Python");