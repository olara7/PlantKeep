import React from 'react'
import '../App.css';

export default function SearchBar({ onChange, onClick,...props }) {
    return (
        <div className="searchBar" >
            <input onChange={onChange} />
            <button onClick={onClick}>Search</button>
        </div>
    )
}
