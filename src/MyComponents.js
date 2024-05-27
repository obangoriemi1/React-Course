

import { useState } from "react";

function MyComponent(){

   const [cars, setCars] = useState([])
   const [carYear, setCarYear] = useState("")
   const [carMake, setCarMake] = useState("")
   const [carModel, setCarModel] = useState("")


   function AddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel}
        setCars([...cars, newCar])

        setCarYear("")
        setCarMake("")
        setCarModel("")
   }
   function RemoveCar(index){
      setCars(cars.filter((car, i) => i !== index))
   }
   function handleCarYear(event){
       setCarYear(event.target.value)
   }
    
   function handleCarMake(event){
    setCarMake(event.target.value)

   }
   function handleCarModel(event){
    setCarModel(event.target.value)

   }
    return(
        <div>
           <h1>Shop Items</h1>
          
           <input value={carYear} onChange={handleCarYear} type="number"/>
           <input value={carMake} onChange={handleCarMake} type="text"/>
           <input value={carModel} onChange={handleCarModel}/>
           <button onClick={AddCar}>Add Car</button>

           <ol>
            {cars.map((car, index) => <li key={index} onClick={() => RemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
           </ol>
        </div>
    )

}

export default MyComponent