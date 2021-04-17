import React from 'react'
import '../App.css';
import '../index.css';

export default function Results({ plantlist, onSelect }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

            {
                plantlist.map((item, i) => {
                    return <div className="plantList" key={i}>
                        <img src={item.image_url || "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"}/>
                        <p>{item.common_name}</p>
                        <p> Family: {item.family}</p>                    
                    {onSelect&&  <button className="addBtn" onClick={() => {  onSelect(i)  }}>Add</button>}
                    </div>
                })
            }
        </div>
    )
}
