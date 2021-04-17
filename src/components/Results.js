import React from 'react'
import '../App.css';
import '../index.css';

export default function Results({ plantlist, onSelect }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

            {
                plantlist.map((item, i) => {
                    return <div style={{ padding: '20px', width: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={i}>
                        <img style={{ height: "200px" }} src={item.image_url || "https://cdn1.iconfinder.com/data/icons/ui-for-web-and-mobile/512/Ui-11-512.png"}/>
                        <p>{item.common_name}</p>
                    
                  {onSelect&&  <button onClick={() => {  onSelect(i)  }}>Add</button>}
                    </div>
                })
            }
        </div>
    )
}
