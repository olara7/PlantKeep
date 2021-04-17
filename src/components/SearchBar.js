import React from 'react'
import '../App.css';

export default function SearchBar({ onChange, onClick,...props }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', }}>

            <input onChange={onChange} />
            <button onClick={onClick}>Search</button>
        </div>
    )
}
