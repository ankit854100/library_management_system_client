import React from 'react'

function ItemCard(props) {
    return (
        <React.Fragment>
            <div className="itemCard">
                <img src={props.item.image ? props.item.image : "https://homestaymatch.com/images/no-image-available.png"} alt="" />
                <div className="itemCard-desc">
                    <h3>{props.item.title}</h3>
                    <p>{props.item.description.slice(0, 200)}</p>
                </div>
            </div>
            <style jsx="true">{`
                .itemCard{
                    max-width: 16rem;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    margin: 0.5rem;
                    padding: 0.5rem;
                    cursor: pointer;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                    background-color: #fff;    
                    color: #610094;
                    min-height: 20rem;
                }

                .itemCard:hover{
                    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                }

                img{
                    width: 100%;
                    height: 10rem;
                    border-top-left-radius: 0.5rem;
                    border-top-right-radius: 0.5rem;
                }

                .itemCard-desc{
                }

                .itemCard-desc h2, h3, p{
                    margin: 0;
                    margin-bottom: 0.5rem;
                }
            `}</style>
        </React.Fragment>
    )
}

export default ItemCard
