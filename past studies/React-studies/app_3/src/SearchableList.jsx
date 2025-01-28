import { useState } from "react";

/* eslint-disable react/prop-types */
export const SearchableList = ({list}) => {

    const [searchString, setValue] = useState("")

    const handleSearch = (event) =>{
        setValue(event.target.value)
    }

    const filterdList = list.filter((item) => item.title.toLowerCase().includes(searchString.toLowerCase()))


    return(
        <div>
            <label>
                <span>search</span>
                <input type="text" value={searchString} onChange={handleSearch}/>
            </label>
            <ul>
                {filterdList.map(({title, id})=>
                <li key = {id}>{title}</li>

                )}
            </ul>
        </div>
    );
}