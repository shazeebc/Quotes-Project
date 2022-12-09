const quotetext = document.querySelector(".quotes"),
quotebtn = document.querySelector("button");
// authorName = document.querySelector("author .name"),

// soundBtn = document.querySelector("sound"),
// copyBtn = document.querySelector("copy") ;
 
function randomQuote(){

    quotebtn.innerText = "loading Quote.....";

 fetch("https://api.quotable.io/random").then(res => res.json()).then (result =>{
        
        console.log(result);
        quotetext.innerText = result.content;
      // authorName.innerText = result.authorSlug;
      quotebtn.innerText = "New Quote";
  });
}
// soundBtn.addEventListener("click", ()=>{

//   let utterance = new SpeechSynthesisUtterance(`${quotetext.innerHTML}`);
//   speechSynthesis.speak(utterance)
// })


quotebtn.addEventListener("click", randomQuote);
