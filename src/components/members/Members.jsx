import React,{useEffect, useState} from 'react'
import axios from 'axios'
import './members.css'
import { Link } from 'react-router-dom'

const Members = () => {

    const [memberList, setMemberList] = useState([]);
    const [current, setCurrent] = useState(1);
    const [previous, setPrevious] = useState(0);
    const [next, setNext] = useState(2);
    const [isPrevious, setIsPrevious] = useState(false);
    const [isNext, setIsNext] = useState(true);

    useEffect(() => {
        fetchData(current);
    }, [])

    function fetchData(number){
        console.log("function is called", current);
        axios.get(`http://localhost:5000/member?page=${number}&limit=5`)
            .then((res) => {
                // console.log(res.data);
                setMemberList(res.data.results.map((item => item)));
                setCurrent(number)
                if(res.data.previous){
                    setPrevious(res.data.previous.page);
                    setIsPrevious(true);
                }
                else{
                    setIsPrevious(false);
                }

                if(res.data.next){
                    setNext(res.data.next.page);
                    setIsNext(true);
                }
                else{
                    setIsNext(false);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function handlePrevious() {
        const currentValue = current;
        fetchData(currentValue - 1);
    }

    function handleNext() {
        const currentValue = current;
        fetchData(currentValue + 1);
    }
    
    return (
        <div className="BookList">
            <div className="BookList-container">
                {memberList.length ? 
                    <table>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {memberList.map((user,index) => {
                                return (
                                
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.number}</td>
                                        <td>
                                            <Link className="button"><i class="far fa-eye" style={{color:'#9CC094'}}></i></Link>
                                            <Link className="button"><i class="fas fa-edit" style={{color: 'blue'}}></i></Link>
                                            <Link className="button"><i class="fas fa-trash-alt" style={{ color: '#E02401'}}></i></Link>
                                        </td>

                                    </tr>
                                    )
                            })}
                        </tbody>
                    </table> : 
                    <h1>Loading...</h1>
                }   
                <div className="page-container">
                    { isPrevious && <button className="btn" onClick={handlePrevious}> <i class="fas fa-chevron-left"></i> {"  " + previous + "  "} </button> } 
                    <span className="span-btn">{"  " + current + "  " }</span>
                    { isNext && <button className="btn" onClick={handleNext}> {"  " + next + "  "} <i class="fas fa-chevron-right"></i> </button> }
                </div>
            </div>
            
        </div>
    )
}

export default Members