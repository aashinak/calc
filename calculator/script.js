function btnclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val
}
function equalClick(){
    console.log("success")
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
    console.log(text)
}
function clearScreen(){
    document.getElementById("screen").value=""
}