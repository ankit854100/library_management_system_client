import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import FileBase from 'react-file-base64'
import Footer from './Footer';

function AddBook() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState();

    const handleSubmit = () => {
        axios.post("http://localhost:5000/book/addBook", {title: title, price: price, description: description, category: categories})
            .then(res => {
                // console.log(res.data);
                alert('item has been added');
            })
            .catch(error => {
                console.log(error);
            });

        setTitle("");
        setPrice("");
        setDescription("");
    }
    return (
        <div style={{height: "100%"}}>
            <NavBar />
            <div className="addBook">
                <div className="addBook-container">
                    <h2>Enter book details</h2>
                    <div className="addBook-inputWrapper">
                        <div className="addBook-inputContainer">
                            <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <input type="text" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                            <input type="text" placeholder="Enter categories" value={categories} onChange={(e) => setCategories(e.target.value)}/>
                            {/* <FileBase type="file" className="addProduct-formItem-right-textInput" multiple={false} onDone={({ base64 }) => setImages(base64)} /> */}
                        </div>
                        <textarea cols="30" rows="4" placeholder="Enter book description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <Footer />
            <style jsx='true'>{`
                .addBook{
                    padding: 5rem 10rem;
                }

                .addBook-container{
                    text-align: center;
                    padding: 2rem;
                    background-color: #fff;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
                    border-radius: 1rem;
                }

                .addBook-container h2{
                    font-size: 3rem;
                    font-weight: 800;
                    color: #610094;
                }

                .addBook-inputWrapper{
                    display: flex;
                    flex-direction: column;
                }

                .addBook-container button{
                    font-size: 1rem;
                    margin-top: 2rem;
                    padding: 0.5rem;
                    width: 12rem;
                    border-radius: 0.5rem;
                    border: none;
                    cursor: pointer;
                    color: #fff;
                    background-color: #B608DC;
                }

                .addBook-container button:hover{
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    background-color: #610094;
                }

                .addBook-container button:focus{
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    background-color: #610094;
                }

                .addBook-inputWrapper textarea{
                    margin-top: 2rem;
                    width: 100%;
                    padding: 0.5rem;
                    border: none;
                    border-bottom: 2px solid #B608DC;
                    color: #610094;
                }

                .addBook-inputWrapper textarea:hover{
                    border-bottom: 2px solid #610094;
                }

                .addBook-inputWrapper textarea:focus{
                    outline:none;
                    border-bottom: 2px solid #610094;
                }

                .addBook-inputContainer{
                    display: flex;
                    justify-content: space-between;
                }

                .addBook-inputContainer input{
                    width: 15rem;
                    padding: 0.5rem;
                    border: none;
                    border-bottom: 2px solid #B608DC;
                    color: #610094;
                    font-family: monospace;
                }

                .addBook-inputContainer input:hover{
                    border-bottom: 2px solid #610094;
                }

                .addBook-inputContainer input:focus{
                    outline:none;
                    border-bottom: 2px solid #610094;
                }

                @media only screen and (max-width: 600px){
                    .addBook{
                        padding: 5rem 2rem;
                    }

                    .addBook-container{
                        text-align: left;
                    }

                    .addBook-inputContainer{
                        flex-direction: column;
                    }

                    .addBook-inputContainer input{
                        margin-bottom: 1rem;
                        width: 100%;
                    }

                    .addBook-inputWrapper textarea{
                        margin-top: 0;
                    }
    
                }
            `}</style>
        </div>
    )
}

export default AddBook
