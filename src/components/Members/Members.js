import React,{useEffect, useState} from 'react'
// import axios from 'axios'
import './Members.css'
import { Link } from 'react-router-dom'

const members=[
    {"name": "Navles Abbey", "email": "AusteJane@gmail.com", "number": 8264662896},
    {"name": "Navles Abbey", "email": "Austaaaaane@gmail.com", "number": 8264662896},
    {"name": "Navles Abbey", "email": "Ausaaaaxxxxxane@gmail.com", "number": 8264662896},
   
    
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
                        {members.map((user,index) => {
                            return (
                               
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.number}</td>
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
