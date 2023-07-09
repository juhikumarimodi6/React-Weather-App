import React from "react";
import { HiSearch } from "react-icons/hi";
import { useGlobalStateContext } from "../Context/StateProvider";
import './SearchBar.css'

const SearchBar = () => {
    const {input, setInput, setSearchCity} = useGlobalStateContext();
    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const handleEnter = (event) => {
        if(event.key === 'Enter') {
            UpdateCity();
        }
    }

    const UpdateCity = () => {
        if(input !== "") {
            setSearchCity(input);
            setInput("")
        }
    }

    return (
        <div className="search-container">
            <input 
                type = 'text'
                placeholder="Search City..."
                value = {input}
                onChange={(event) => handleInput(event)}
                onKeyDown={(event) => handleEnter(event)}
                className="search-input"
            />
            <HiSearch 
                className="search-icons" 
                onClick={UpdateCity}
            />

        </div>
    )
}

export default SearchBar;