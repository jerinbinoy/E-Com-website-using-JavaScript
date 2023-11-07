function buttonclick(value){
    document.getElementById("screen").value+=value

}
function clearbtn(){
    document.getElementById("screen").value=""
}
function equalbtn(){
    var result=document.getElementById("screen").value
    var result1=eval(result)
    document.getElementById("screen").value=result1
    
}