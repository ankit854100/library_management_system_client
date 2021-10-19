import React from 'react'
import ItemCard from './ItemCard'

function ItemContainer(props) {
    return (
        <div className="itemContainer-top">
            <div className="itemContainer">
                {props.data.map((item, index) => {
                    return <ItemCard key={index} item={item}/>
                })}
            </div>
            <style jsx='true'>{`
                .itemContainer-top{
                    display: flex;
                    padding-bottom: 2rem;
                }

                .itemContainer{
                    display: flex;
                    flex-wrap: wrap;
                    padding: 0 3rem;
                }

                @media only screen and (max-width: 600px){
                    .itemContainer{
                        justify-content: space-evenly;
                    }
                }
            `}</style>
        </div>
    )
}

export default ItemContainer
