var age=document.getElementById('age')
var height=document.getElementById('height')
var weight=document.getElementById('weight')
var resultarea=document.querySelector('.comment')

function calculate(){
    var bmi=weight.value/(height.value/100*height.value/100)
    var result=''
    if(bmi<18.5){
        result='You are Underweight'
    }
    else if(18.5<=bmi && bmi<=24.9){
        result='You are healthy'
    }
    else if(25<=bmi && bmi<=29.9){
        result='You are over weight'
 
    }
    else if(30<=bmi && bmi<=34.9){
        result='You are obese'

    }

    else{
        result='You are extremely obese'

    }

    resultarea.style.display='block'

    document.querySelector('.comment').innerHTML=result
    document.getElementById('result').innerHTML=bmi
}