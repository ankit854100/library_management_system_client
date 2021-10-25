import React, { useState } from 'react'

function TreeUI(props) {

    return (
        <React.Fragment>
            <ul className="treeUI">
                {props.data.map((tree, index) => {
                    return <TreeNode key={index} data={tree} setRightSelected={props.setRightSelected}/>
                })}
            </ul>
            <style jsx='true'>{`
                .treeUI{
                    padding-left: 0.5rem;
                    color: #fff;
                }

                .treeUI p, ul{
                    padding: 0;
                    margin: 0;
                }
            `}</style>
        </React.Fragment>
    )
}

function TreeNode(props){
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen((prev) => !prev );
    }

    const setRightCotnainerValue = () =>{
        // props.setRightSelected(props.data.category);
        if(props.data.books){
            props.setRightSelected(props.data.books);
        }
        // console.log(props);
    }
    return (
        <React.Fragment>
            <li className='treeNode'>
                <p onClick={setRightCotnainerValue}>{props.data.category}</p>
                {props.data.subCategory && (isOpen ? <i className="fas fa-angle-down" onClick={handleIsOpen}></i> : <i className="fas fa-angle-right" onClick={handleIsOpen}></i>)}
            </li>
            {props.data.subCategory && isOpen &&
                <TreeUI data={props.data.subCategory} setRightSelected={props.setRightSelected}/>
            }
            <style jsx='true'>{`
                .treeNode{
                    padding: 0.25rem;
                    display: flex;
                    align-items: baseline;
                    justify-content: space-between;
                    cursor: pointer;
                }

                .treeNode-marginLeft{
                    margin-left: 0.5rem;
                }
            `}</style>
        </React.Fragment>
    )
}

export default TreeUI
