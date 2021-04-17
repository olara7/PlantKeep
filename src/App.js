import logo from './logo.svg';
import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  const [searchkeyword, setsearchkeyword] = useState('')
  const [plant, setPlant] = useState([]);
  const [userList, setuserList] = useState([])
  
  //fetch plant data
  const getPlant = () => {
    fetch(`https://trefle.io/api/v1/plants/search?token=g7ccpdNqRhF2UmpFJFkj3_sIL0E4pO2xhvvXr9wvhq0&q=${searchkeyword}`).then(
      (response) => response.json()).then((res) => {
        // console.log(data)
        setPlant(res.data)
        // setPlant(data[0].common_name + " " + data[0].year);
      });
  };
  
  //handle searchkeyworld change
  const handleChange = (e) => {
    setsearchkeyword(e.target.value)
  }

  //useEffect to add item and update local storage
  useEffect(() => {
    let call = async () => {
      let userlist = await localStorage.getItem('userlist')
      console.log(userlist)
      if (userlist == null) {
        userlist = []
      } else {
        userlist = JSON.parse(userlist)
      }
      setuserList(userlist)
    }
    call()
  }, [])


  const addtouserbucket = (index) => {
    let findex=userList.findIndex((item,i)=>{
    return item.id===plant[index].id
    })
    if(findex==-1){

      let newarray = [...userList, plant[index]]
      setuserList(newarray)
      localStorage.setItem('userlist', JSON.stringify(newarray))
      } else {
        console.log('item is already there')
      }

  }
  return (
    <div >
      <h1> PlantFinder</h1>
      <h5> Search for plants and favorite them</h5>
      <SearchBar onChange={handleChange} onClick={getPlant} />

      Plant info from treffle api
      <Results onSelect={addtouserbucket} plantlist={plant} />
      <div>
        <p>user bucket</p>
        <Results plantlist={userList} />
        {/* <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>

          {
            userList.map((item, i) => {
              return <div style={{ width: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={i}><img style={{ height: "200px" }} src={item.image_url} /><p>{item.common_name}</p></div>
            })
          }
        </div> */}
      </div>
    </div>
  );
}

export default App;
