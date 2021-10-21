import React, { useState } from 'react'

import './homeTableContainer.css'
import HomeTableHeader from './HomeTableHeader'

function CategoryPanel(props) {
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
                    <p>{props.item.category}</p>
                    { !isOpen  ? <i class="fas fa-angle-double-down" onClick={handleIsOpen}></i> : <i class="fas fa-angle-double-up" onClick={handleIsOpen}></i>}
                </div>
            </div>
            <div className="homeTable-subCatrgory">
                { isOpen && <HomeTableHeader books={props.item.books} /> }
            </div>
        </React.Fragment>
    )
}

export default CategoryPanel
