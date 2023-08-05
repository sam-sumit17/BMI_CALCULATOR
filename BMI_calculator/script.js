var w,h,bmi,x='Mr.',y;



function sam(){
    
   h=document.getElementById('height').value;
   w=document.getElementById('weight').value;
   if(h===""||h===0)alert("Please Enter your height");
   if(w===""||w===0)alert("Please Enter your weight");
   if(h>2.5&&h>0)alert("Enter a valid height");
   if(w>100&&w>0)alert("Enter a valid weight")

    h*=h; 
    bmi=((w/h)/0.01)*0.01;
     y=document.getElementById('names').value;
    if(document.getElementById('gender').value==='Female'){x='Miss.';}
    else x='Mr.';
 document.getElementById('suggestion').innerHTML='According to ideal BMI range, your weight should be in between '+ (18.5*h).toFixed(1) + 'kg and '+ (25*h).toFixed(1) +'kg. ';
   
    document.getElementById('bmi_ans').innerHTML=x+" "+y+ " " +bmi.toFixed(1)+ " is your BMI (Body Mass Index).";
    if(bmi<=18.5){
        document.getElementById('bmi_colour').style.backgroundColor='yellow';
        document.getElementById('bmi_colour').style.color='black';
        document.getElementById('bmi_colour').innerHTML="You Need To Eat More !";
        
    }
    else if(bmi>=18.5&&bmi<25){
        document.getElementById('bmi_colour').style.backgroundColor='green';
        document.getElementById('bmi_colour').innerHTML="You Are Perfect  !";
        
    }
    else if(bmi>25&&bmi<30){
        document.getElementById('bmi_colour').style.backgroundColor='orangered';
        document.getElementById('bmi_colour').innerHTML="You Need To Eat Less , a little obese  !";
        
    }
    else {
        document.getElementById('bmi_colour').style.backgroundColor='red';
        document.getElementById('bmi_colour').innerHTML="You Need To Eat very less , highly obesed !";

        
    }
    
}