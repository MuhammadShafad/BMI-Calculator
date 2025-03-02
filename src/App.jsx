
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';



function App() {




 const[weight,setweight] =useState('')
 const[height,setHeight]=useState('')
const[calculateValue,setcalculateValue]=useState(null)
const[category,setCategory]=useState('')



 const  inputheight=(e)=>{
 console.log(e.target.value);
 setHeight(e.target.value)
 
  
 }
const inputweight=(e)=>{
  console.log(e.target.value);
  setweight(e.target.value)
  
}
const calculateBMI=(e)=>{

  e.preventDefault() 
  if(weight && height){

const cmheight=(height/100)

   const bmi=(weight/(cmheight*cmheight)).toFixed(1)
    console.log(bmi);
    setcalculateValue(bmi)



  const categoryResult=getCategory(bmi)
   setCategory(categoryResult)

    
  }
  else{
    alert("please completily fill the input felidss")
  }

  setweight('')
  setHeight('')
}
const getCategory=(calculateValue)=>{

  if(calculateValue < 18.5) return "Underweight";
  if(calculateValue >= 18.5 && calculateValue < 24.9) return "Normal weight";
  if(calculateValue >= 25 && calculateValue < 29.9) return "Overweight ";
  return "Obese";
 

  

}


  

  return (
    <>
 <h1 style={{textAlign:'center'}}>BMI Calculator</h1>
<div className='main ms-5 d-flex  justify-content-center align-items-center ' >
 
  <div className="calc_body " style={{width:"400px",border:'2px solid' ,borderColor: 'rgb(47, 164, 231)',  background: "linear-gradient(to top,white,  rgb(47, 164, 231) )",borderRadius:'10px'}}>
  <Form>
      <Form.Group className="mb-3" controlId="weightId">
        <Form.Label style={{color:'white'}}> Enter your weight</Form.Label>
        <Form.Control type="number" placeholder=" Enter your weight in kg " onChange={inputweight} value={weight}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  style={{color:'white'}}> Enter your Height </Form.Label>
        <Form.Control type="number" placeholder="Enter your Height in cente meter" onChange={inputheight} value={height}/>
      </Form.Group>
      <button style={{backgroundColor: 'white' ,color:'rgb(47, 164, 231)',border:'2px solid', borderColor:'rgb(47, 164, 231)',borderRadius:'5px',marginLeft:'150px'}}  type="submit" onClick={calculateBMI}>
        Submit

      </button>  <br />
    
    

    </Form>
    <br />
   
{
  calculateValue &&
  
  <div style={{marginLeft:'70px'}}>
  <h6 style={{color:'rgb(47, 164, 231)'}}> BMI Value : {calculateValue}</h6>
  <h6 style={{color:'rgb(47, 164, 231)'}} > Your Category : {category}</h6>

</div>

}


  </div>


</div>



    </>
  )
}

export default App
