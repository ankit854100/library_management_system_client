import React, { useEffect, useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import ItemContainer from './components/ItemContainer';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import axios from 'axios';
import Footer from './components/Footer';

// export var data = [];/

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/add-book" component={AddBook} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

function HomePage(){
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState(""); 
  const [loadedData, setLoadData] = useState([]);
  const [loadPage, setLoadPage] = useState(false);
  
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((res) => {
        // console.log(res.data);
        setData([...res.data].map((item) => item));
        // data = res.data;
        setLoadPage(true);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const loadResults = (value) => {
    if(value === ""){
      return;
    }

    let newData = [];

    for(let index in data){
      if(data[index].title.toLowerCase().includes(value.toLowerCase())){
        newData.push(data[index]);
      }
    }

    setLoadData(newData);
  }

  return (
    <React.Fragment>
      {
        loadPage ? 
        <div className="App">
          <NavBar />
          <Search searchText={searchText} setSearchText={setSearchText} loadResults={loadResults}/>
          {searchText === "" ? 
            <ItemContainer data={data} />  :
            <ItemContainer data={loadedData} />
          }
          <Footer />
        </div>: 
        <div style={{textAlign: 'center'}}>
          <span>loading...</span>
        </div>
      }
    </React.Fragment>
  );
}

export default App;
