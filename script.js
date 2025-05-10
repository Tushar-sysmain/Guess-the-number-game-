let a=prompt("Enter a Number between 1 to 100")
let number=Math.random();
if(number<a){
    prompt("try to guess a smaller number")
    console.log(a)
}
else if (number>a){
    prompt("try to guess a bigger number")
}
else if (number==a) {
    
    document.styleSheets.color.yellow
    alert("You guess the correct number")
}