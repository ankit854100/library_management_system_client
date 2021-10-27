import React, { useEffect, useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import ItemContainer from './components/ItemContainer';
import NavBar from './components/NavBar';
import Search from './components/Search';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import axios from 'axios';
import Footer from './components/Footer';
import HomeTable from './components/HomeTableContainer';
import Home from './components/Home';
import Registration from './components/registration/Registration';
import Members from './components/members/Members'; 

// export const allBooks = [
//   {
//     category: "Fantasy",
//     subCategory: [
//       {
//         category: "Harry Potter",
//         books: [
//           {
//             title: "Harry potter and the socerer's stone",
//             price: "$299",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//           },
//           {
//             title: 'Harry potter and the chambers of secrets',
//             price: "$399",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
//           }
//         ]
//       },
//       {
//         category: "Lord of the rings",
//         subCategory: [
//           {
//             category: "Lords of the rings series",
//             books: [
//               {
//                 title: "Lord of the rings: Fellowship of the ring",
//                 price: "$292",
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//                 image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//               },
//               {
//                 title: "Lord of the rings: The two towers",
//                 price: "$499",
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//                 image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//               },
//               {
//                 title: "Lord of the rings: Return of the king",
//                 price: "$199",
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//                 image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//               }
//             ]
//           },
//           {
//             category: "Hobbit series",
//             books: [
//               {
//                 title: "The Hobbit: An unexpected journey",
//                 price: "$359",
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//                 image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//               },
//               {
//                 title: "The Hobbit: The battle of five armies",
//                 price: "$299",
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//                 image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//               },
//               {
//                 title: "The Hobbit: The desolation of smaug",
//                 price: "$199",
//                 description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//                 image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     category: "Fiction",
//     subCategory: [
//       {
//         category: "Sherlock Holmes",
//         books: [
//           {
//             title: "The adventures of Sherlock Holmes Part 1",
//             price: "$499",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//           },
//           {
//             title: 'The adventures of Sherlock Holmes Part 2',
//             price: "$299",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
//           }
//         ]
//       }
//     ]
//   },
//   {
//     category: "Comics",
//     subCategory: [
//       {
//         category: "Marvel",
//         books: [
//           {
//             title: "Star wars",
//             price: "$499",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//           },
//           {
//             title: 'Avengers',
//             price: "$199",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
//           },
//           {
//             title: 'The Hulk',
//             price: "$399",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
//           },
//           {
//             title: 'The amazing spiderman',
//             price: "$99",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"          
//           }
//         ]
//       },
//       {
//         category: "DC",
//         books: [
//           {
//             title: "Superman",
//             price: "$299",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
//           },
//           {
//             title: 'Batman',
//             price: "$299",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
//           },
//           {
//             title: 'Green lantern',
//             price: "$299",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
          
//           },
//           {
//             title: 'The flash',
//             price: "$299",
//             description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
//             image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"          
//           }
//         ]
//       }
//     ]
//   }
// ];

const bookList = [
  {
      title: "Harry potter and the socerer's stone",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
      image: "https://www.mandatory.com/images/stories/2011/Film/The%20Series%20Project/Harry%20Potter/Harry_Potter_1_poster.jpg"
    },
    {
      title: 'Harry potter and the chambers of secrets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
      image: "https://images-na.ssl-images-amazon.com/images/I/81v0sgbcSWL.jpg"
    
    },
    {
      title: 'Alice in the wonder land',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
      image: "http://www.jimhillmedia.com/mb/images/upload/Alice-Wonderland-Landscape-.jpg"
    },
    {
      title: 'Snow white and the huntsman',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMj7yzvVAv3gVc8DDXhEunnc7FfyW3bThNg&usqp=CAU"
    },
    {
      title: 'The jungle book',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat neque non justo aliquet aliquam. Maecenas sed libero semper, hendrerit ante vitae, consequat metus. Ut id justo eu eros interdum iaculis sit amet vitae nibh. Praesent feugiat blandit libero id dignissim. Suspendisse congue tellus ornare magna efficitur varius.',
      image: "https://i.ytimg.com/vi/Tq9tK4yFAPI/maxresdefault.jpg"
    }
]

function App() {

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/book")
      .then((res) => {
        // console.log(res.data);
        setAllBooks(res.data.map(item => item));
      })
  }, [])

  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/add-book" component={AddBook} />
            <Route path="/signup" component={Registration} />
            <Route path="/members" component={Members} />
            <Route exact path="/">
              <Home data={allBooks} />
              {/* <Members /> */}
              {/* <Registration /> */}
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export function HomePage(){
  const [data, setData] = useState(bookList);
  const [searchText, setSearchText] = useState(""); 
  const [loadedData, setLoadData] = useState([]);
  const [loadPage, setLoadPage] = useState(false);
  
  // useEffect(() => {
  //   // axios.get('http://localhost:5000/')
  //   //   .then((res) => {
  //   //     // console.log(res.data);
  //   //     setData([...res.data].map((item) => item));
  //   //     // data = res.data;
  //   //     setLoadPage(true);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   })
  // }, [])

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
        <div className="App">
          {/* <NavBar /> */}
          <Search searchText={searchText} setSearchText={setSearchText} loadResults={loadResults}/>
          {searchText === "" ? 
            null  :
            <ItemContainer data={loadedData} />
          }
        </div>
    </React.Fragment>
  );
}

export default App;
