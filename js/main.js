var btn =document.getElementById("clickAddText");
var para =document.getElementById("addQuotes");
var para2 =document.getElementById("addQuotes2");
 
function clickAddQuotes() {
var textArray =["“Be yourself; everyone else is already taken.”" ,
 "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,
"“So many books, so little time.”"]
var userName=["Oscar Wilde","Marilyn Monroe"," Albert Einstein","Frank Zappa"]
var num = Math.floor(Math.random() * userName.length ,   textArray.length)
para.innerHTML = userName[num]
para2.innerHTML = textArray[num]
}


