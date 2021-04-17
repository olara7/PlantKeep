import React from 'react'
import '../App.css';
import '../index.css';

export default function Results({ plantlist, onSelect, key}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

            {
                plantlist.map((item, i) => {
                    return <div className="plantList" key={i}>
                        <img src={item.image_url || "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"}/>
                        <p>{item.common_name}</p>

                    {onSelect&& <button className="removeBtn" onClick={() => { onSelect(i) }}>Remove</button>}
                    </div>
                })
            }
        </div>
    )
}