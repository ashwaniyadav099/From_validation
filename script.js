const id_type = ()=>{
    let id_val = document.getElementById("id").value ;

    let feild = document.getElementById("ipn_id");
    
    if(id_val!=" "){
      document.getElementById("idsss").innerHTML= id_val +":";
      document.getElementById("id_input").style.display="block";
      feild.placeholder = id_val;
      feild.style.display="inline-block";
    }else if(id_val == " "){
      document.getElementById("id_input").style.display="none";
    }
    check(id_val);
    
} 
const check=(id)=>{
  let feild = document.getElementById("ipn_id");
  if(id =="Adhaar_Number")
  {
    feild.pattern="[0-9]{12}";
  }else if(id=="Pen_card"){
    feild.pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}";
  }else if(id=="Driving_licence"){
    feild.pattern="^[A-Z](?:\d[- ]*){14}$";
  }else if(id="Passport"){
    feild.pattern="^(?!^0+$)[a-zA-Z0-9]{3,20}$";
  }
}

const Age_cal=()=>{
  let dob =document.getElementById("DoB").value;
var year = Number(dob.substr(0, 4));
var month = Number(dob.substr(5, 2)) - 1;
var day = Number(dob.substr(8, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
if(age<18){
  alert("you are not elegible because you are below 18");
  document.getElementById("Age").style.display="none"
}else if(age<15){
  alert("Please fill form correct");
  document.getElementById("Age").style.display="none"
}else if(age>100){
  alert("Are you over 100");
  document.getElementById("Age").style.display="none"
}else{
  document.getElementById("age").value=age;
  document.getElementById("Age").style.display="inline"
}

  
}

const submitfun=()=>{
  event.preventDefault();
  let nm=document.getElementById("nm").value;
  let eid=document.getElementById("email").value;
  let id=document.getElementById("ipn_id").value;
  let Gender=document.querySelector('input[name="gender"]:checked').value;

  let DoB=document.getElementById("DoB").value;

  let Phone=document.getElementById("Phone").value;
  let address=document.getElementById("ads").value;

  console.log(nm);
  console.log(eid);
  console.log(id);
  console.log(Gender);
  console.log(DoB);
  console.log(Phone);
  console.log(address);

}