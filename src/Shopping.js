import { useState} from "react";

function Shopping(){
    const [cloths, setCloths] = useState([])
    const[clothCategory, setClothCategory] = useState()
    const[clothPrice, setClothPrice] = useState()
    const[clothProfit, setClothProfit] = useState()

    function AddCloth(){
        const newCloth = {category: clothCategory, price: clothPrice, profit: clothProfit}
         setCloths([...cloths, newCloth])

         setClothCategory("")
         setClothPrice("")
         setClothProfit("")
    }
     

    function RemoveCloth(index){

    }
    function Calculate(){
        const showCalculations = document.getElementById("show")
        
 
    }
    function handleType(event){
        setClothCategory(event.target.value)
    }
    function handlePrice(event){
        setClothPrice(event.target.value)
    }
    function handleProfit(event){
        setClothProfit(event.target.value)
    }

    return(
        <div className="cloths-container">
            <h1>Shop Items</h1>
            <div className="cal-btns">
            <button onClick={Calculate}>Show Calculations</button>
            <label id="show"></label>
            </div>
            <label>Clothe Type :</label>
            <input onChange={handleType} value={clothCategory} type="text"/><br/>
            <label>Price :</label>
            <input onChange={handlePrice}  value={clothPrice} type="number"/><br/>
            <label>Profit : </label>
            <input onChange={handleProfit} value={clothProfit} type="number"/><br/><br/>
            <button onClick={AddCloth}>Add Item</button>

            <ol>
                {cloths.map((cloth, index) => <li key={index} onClick={() => RemoveCloth(index)}>
                    {cloth.category} {" Price =" + cloth.price} {" profit = " + cloth.profit}
                </li>)}
            </ol>
        </div>
    )
    

}
export default Shopping