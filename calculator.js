function displaydata(n){


    Result.value+=n
}

function allclear(){

    Result.value=""
}

function evalexpression(){

Result.value=eval(Result.value)


}

function backspace(){
    s= Result.value
    Result.value=s.slice(0,-1)
}