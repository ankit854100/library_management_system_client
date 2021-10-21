import React,{useEffect, useState} from 'react'
// import axios from 'axios'
import './Members.css'
import { Link } from 'react-router-dom'

const users=[
    {"title": "Northanger Abbey", "author": "Austen, Jane", "year_written": 1814, "edition": "Penguin", "price":  182},
    {"title": "War and Peace", "author": "Tolstoy, Leo", "year_written": 1865, "edition": "Penguin", "price":  127},
    {"title": "Anna Karenina", "author": "Tolstoy, Leo", "year_written": 1875, "edition": "Penguin", "price":  135},
    {"title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year_written": 1925, "edition": "Harcourt Brace", "price":  225},
    {"title": "The Hours", "author": "Cunnningham, Michael", "year_written": 1999, "edition": "Harcourt Brace", "price":  1235},
    {"title": "Huckleberry Finn", "author": "Twain, Mark", "year_written": 1865, "edition": "Penguin", "price":  576},
    {"title": "Bleak House", "author": "Dickens, Charles", "year_written": 1870, "edition": "Random House", "price":  575},
    {"title": "Tom Sawyer", "author": "Twain, Mark", "year_written": 1862, "edition": "Random House", "price":  775},
    {"title": "A Room of One's Own", "author": "Woolf, Virginia", "year_written": 1922, "edition": "Penguin", "price":  329},
    {"title": "Harry Potter", "author": "Rowling, J.K.", "year_written": 2000, "edition": "Harcourt Brace", "price":  195},
    {"title": "One Hundred Years of Solitude", "author": "Marquez", "year_written": 1967, "edition": "Harper  Perennial", "price":  140},
    {"title": "Hamlet, Prince of Denmark", "author": "Shakespeare", "year_written": 1603, "edition": "Signet  Classics", "price":  795},
    {"title": "Lord of the Rings", "author": "Tolkien, J.R.", "year_written": 1937, "edition": "Penguin", "price":  275},
    {"title": "Harry Potter-The sorcerers stone", "author": "J.K. Rowling", "year_written": 2003, "edition": "Royal Classics", "price": 595}
    
]

const Members = () => {
    
    return (
        <div className="BookList">
            <div className="BookList-container">
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user,index) => {
                            return (
                               
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.title}</td>
                                    <td>{user.author}</td>
                                    <td>{user.price}</td>
                                    <td>
                                        <Link className="button"><i class="far fa-eye" style={{color:'slategray'}}></i></Link>
                                        <Link className="button"><i class="fas fa-edit" style={{color: 'blue'}}></i></Link>
                                        <Link className="button"><i class="fas fa-trash-alt" style={{ color: '#ff726f'}}></i></Link>
                                    </td>

                                </tr>
                                )
                        })}
                    </tbody>
                </table>
                </div>
            
        </div>
    )
}

export default Members
