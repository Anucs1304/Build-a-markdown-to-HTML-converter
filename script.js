const markDownInput=document.getElementById("markdown-input");
const htmlOuput=document.getElementById("html-output");
const preview=document.getElementById("preview");
const headingRegex=/^ *(#+) (.*)/gm;
const strongRegex=/(?:\*\*(.+)\*\*)|(?:__(.+)__)/gm;
const emphasisRegex=/(?:\*(.+)\*)|(?:_(.+)_)/gm;
const imageRegex=/!\[(.+)\]\((.+)\)/gm;
const linkRegex=/\[(.+)\]\((.+)\)/gm;
const quoteRegex=/^ *> (.+)/gm;

function convertMarkdown(){
    let str=markDownInput.value;
        str=str.replace(headingRegex,(match, capture1, capture2)=>`<h${capture1.length}>${capture2}</h${capture1.length}>`);
        str=str.replace(strongRegex, (match, capture1, capture2)=>`<strong>${capture1||capture2}</strong>`);
        str=str.replace(emphasisRegex, (match, capture1, capture2)=>`<em>${capture1||capture2}</em>`);
        str=str.replace(imageRegex, (match, capture1, capture2)=>`<img alt=${capture1} src=${capture2}>`);
        str=str.replace(linkRegex, (match, capture1, capture2)=>`<a href="${capture2}">${capture1}</a>`);
        str=str.replace(quoteRegex, (match, capture1)=>`<blockquote>${capture1}</blockquote>`);
    return str;
}

markDownInput.addEventListener("input",()=>{
    htmlOuput.innerText=convertMarkdown();
    preview.innerHTML=convertMarkdown();
})
