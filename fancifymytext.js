function bigger() 
{
    document.getElementById("input").style.fontSize = "24pt";
}

function fancy()
{
    document.getElementById("input").style.fontWeight = 700;
    document.getElementById("fancy").style.color = "#0084A5"; 
    document.getElementById("fancy").style.textDecorationColor = "#0084A5";
    document.getElementById("fancy").style.textDecorationLine = "underline"; 


}

function boring()
{
    document.getElementById("input").style.fontWeight = 400;
   
}

function MOO()
{
    const text = document.getElementById("input").value; 
    const words = text.split(" ");

    if (words.slice(-1).endsWith('.'))
    {
        let a_word = words.slice(-1).trim();
        a_word += "-Moo"; 
        words.slice(-1) = a_word; 
    }

    document.getElementById("input").value = words.join ("");

}