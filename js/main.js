
var listQuotes=[];
listQuotes[0]=`"The best revenge is massive success."<br>
--Frank Sinatra'`;
listQuotes[1]=`
“So many books, so little time.”<br>
― Frank Zappa`;
listQuotes[2]=`
“A room without books is like a body without a soul.”<br>
― Marcus Tullius Cicero`;
listQuotes[3]=`“Be the change that you wish to see in the world.”<br>
― Mahatma Gandhi;`
listQuotes[4]=`“In three words I can sum up everything I've learned about life: it goes on.”<br>
― Robert Frost`;
 listQuotes[5]=`“If you tell the truth, you don't have to remember anything.”<br>
 ― Mark Twain`;
listQuotes[6]=`“Live as if you were to die tomorrow. Learn as if you were to live forever.”<br>
― Mahatma Gandhi`;
listQuotes[7]=`“I am so clever that sometimes I don't understand a single word of what I am saying.”<br>
― Oscar Wilde, The Happy Prince and Other Stories`;
listQuotes[8]=`
“It is better to be hated for what you are than to be loved for what you are not.”<br>
― Andre Gide, Autumn Leaves`;
listQuotes[9]=`“You only live once, but if you do it right, once is enough.”<br>
― Mae West`;
function showQuote(){
    var randomQuote=Math.floor(Math.random()*(listQuotes.length-1));
    console.log(randomQuote)
    if (randomQuote!= listQuotes[randomQuote-2]){
        // repeatlist=randomQuote.push();
    // if (randomQuote!==repeatlist[index]){
    document.getElementById('quote').innerHTML=listQuotes[randomQuote];
    }
}
