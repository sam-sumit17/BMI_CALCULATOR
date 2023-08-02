var w,h,bmi,x='Mr.',y;



function sam(){
    
   h=document.getElementById('height').value;
   w=document.getElementById('weight').value;
   if(h===""||h===0)alert("Height daal bsdk");
   if(w===""||w===0)alert("Weight daal bsdk");
   if(h>2.5&&h>0)alert("Aadmi ho ki uut(camel) ho bc 🐪");
   if(w>100&&w>0)alert("sharm kar bhadwe ......hathi kahika 🐘")

    h*=h; 
    bmi=((w/h)/0.01)*0.01;
     y=document.getElementById('names').value;
    if(document.getElementById('gender').value==='Female'){x='Miss.';}
    else x='Mr.';
   
   
    document.getElementById('bmi_ans').innerHTML=x+" "+y+ " " +bmi+ " is your BMI (Body Mass Index).";
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