import React, { useState } from 'react'
import { HomePage } from '../App';
import NavBar from './NavBar';
import RightTable from './RightTable';
import Search from './Search';
import TreeUI from './TreeUI'

function Home(props) {

    const [rightSelected, setRightSelected] = useState([]);
    const [searchText, setSearchText] = useState("");

    const searchResults = (title) => {
        const arr = props.data;
        let items = [];
        for(let i in arr){
            find(arr[i], title, items);
        }

        // console.log(items);
        setRightSelected(items.map(item => item));

    }

    function find(obj, title, items){
        if(obj.subCategory){
          for(let i in obj.subCategory){
            find(obj.subCategory[i], title, items);
        }
      }
      else if(obj.books){
            for(let i in obj.books){
            if(obj.books[i].title.toLowerCase().includes(title.toLowerCase())){
              items.push(obj.books[i]);
          }
        }
      }
      
      return;
    }

    return (
        <React.Fragment>
            <NavBar />
            <Search loadResults={searchResults} searchText={searchText} setSearchText={setSearchText}/>
            {/* <HomePage /> */}
            <div className="home">
                <div className="home-left">
                    <TreeUI data={props.data} setRightSelected={setRightSelected}/>
                </div>
                <div className="home-right">
                    <RightTable rightSelected={rightSelected}/>
                </div>
            </div>
            <style jsx='true'>{`
                .home{
                    // background-color: #fff;
                    min-height: 100%;
                    display: flex;
                    margin-bottom: 2rem;
                }

                .home-left{
                    width: 20%;
                    padding-top: 2rem;
                }

                .home-right{
                }
            `}</style>
        </React.Fragment>
    )
}

export default Home
