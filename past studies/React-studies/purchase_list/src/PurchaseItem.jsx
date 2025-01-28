export const PurchaseItem = ({value, status, onDelete}) => {
    console.log("Item",( value))

    const handleDoneClick = () =>{
        onDelete(id);
    };

    return (
            <div>
                <input type="checkbox" onChange = {handleDoneClick}/>
                <input type="text" defaultValue ={value}/>
            </div>


                

    )

}