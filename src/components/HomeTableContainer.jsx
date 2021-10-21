import React, { useEffect, useState } from 'react'
import CategoryPanel from './CategoryPanel';

import './homeTableContainer.css'
import HomeTableHeader from './HomeTableHeader'

function HomeTable(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen((prev) => {
            return !prev;
        })
    }

    return (
        <React.Fragment>
            <div className="homeTable">
                <div className="homeTable-top">
                    <p>{props.name}</p>
                    { !isOpen  ? <i className="fas fa-angle-double-down" onClick={handleIsOpen}></i> : <i className="fas fa-angle-double-up" onClick={handleIsOpen}></i>}
                </div>
            </div>
            <div className="homeTable-subCatrgory">
                { isOpen && props.subCategory.map((item, index) => {
                    return <CategoryPanel key={index} item={item} />
                })} 
            </div>
        </React.Fragment>
    )
}

export default HomeTable
