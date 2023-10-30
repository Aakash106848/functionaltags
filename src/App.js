
import './App.css';
import { useState } from 'react';
function App() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const[agree, setAgree] = useState(false);

   const updateFirstName=(e)=>{
    setFirstName(e.target.value);
    console.log("Latest FName : "+e.target.value);
    ValidateFirstName();
  }
  const updateLastName=(e)=>{
    setLastName(e.target.value);;
    console.log("Latest LName : "+e.target.value);
    ValidateLastName();
  }
  const ValidateFirstName=()=>{
    var x = document.getElementById("xq");
    if(FirstName.trim().length>5){
      x.innerHTML="Valid";
      x.style.color="green";
    }
    else{
      x.innerHTML="FirstName must be more than 5 characters";
      x.style.color="red";
    }
  }
  const ValidateLastName=()=>{
    var y = document.getElementById("xw");
    if(LastName.trim().length>5){
      y.innerHTML="Valid";
      y.style.color="green";
    }
    else{
      y.innerHTML="LastName must be more than 5 characters";
      y.style.color="red";
    }
  }
  const buttonEnabler= LastName.length>5 && FirstName.length>5;
  return (
    <div>
      <fieldset>
      <form>
        <label>FirstName:</label><input  type="text" placeholder="Enter your FirstName"onChange={updateFirstName} value={FirstName} /><label id="xq"></label>
        <label>LastName:</label><input  type="text"  placeholder="Enter your LastName" onChange={updateLastName} value={LastName}/><label id="xw"></label><br/>
        <b>{FirstName}&nbsp;&nbsp;{LastName}</b>
         <h4>Terms & Conditions</h4> <input type="Checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)}/>
         <h1>&dagger;</h1>
         {/* <input type='button' disabled={!agree}/> */}

        {buttonEnabler && agree ? <input className='hvr-buzz' type="button" value="Save" /> : <input className='hvr-buzz' type="button" value="Save" disabled />
        }
      </form>
      </fieldset>
    </div>
  );
}

export default App;
