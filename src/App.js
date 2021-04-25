import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import PlantList from './components/PlantList';

function App() {
  const [searchkeyword, setsearchkeyword] = useState('')
  const [plant, setPlant] = useState([]);
  const [userList, setuserList] = useState([])
  
  //fetch plant data
  const getPlant = () => {
    fetch(`https://trefle.io/api/v1/plants/search?token=g7ccpdNqRhF2UmpFJFkj3_sIL0E4pO2xhvvXr9wvhq0&q=${searchkeyword}`).then(
      (response) => response.json()).then((res) => {
        setPlant(res.data)
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


  const addtoList = (index) => {
    let findex=userList.findIndex((item,i) =>{ 
    
      return item.id===plant[index].id
    })
    if(findex==-1){

      let newarray = [...userList, plant[index]]
      setuserList(newarray)
      localStorage.setItem('userlist', JSON.stringify(newarray))
      } else {
        alert('Plant is already saved.')
      }

  }

  const deletefromList = (index) => {
      let newarray = [...userList]
      newarray.splice(index, 1)
      setuserList(newarray)
      localStorage.setItem('userlist', JSON.stringify(newarray))
  }
  
  return (
    <div >
      <h1>PlantKeep</h1>
      <h5> Search for plants and save them </h5>
      <SearchBar onChange={handleChange} onClick={getPlant} />
      <Results onSelect={addtoList} plantlist={plant} />
      <br/>
      <div>
        <p className="savedplantsText">Saved Plants</p>
        <PlantList onSelect={deletefromList} plantlist={userList} />
      </div>
    </div>
  );
}

export default App;
