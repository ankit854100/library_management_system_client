import React from 'react'

function Search(props) {
    return (
        <React.Fragment>
            <div className="search">
                <div>
                    <input type="text" placeholder="search..." value={props.searchText} onChange={(e) => {
                        props.setSearchText(e.target.value);
                        // props.loadResults(e.target.value)
                    }}/>
                    <button onClick={() => {
                        if(props.searchText !== "")
                            props.loadResults(props.searchText);
                    }}>Search</button>
                </div>
            </div>
            <style jsx="true">{`
                .search{
                    text-align: center;
                    padding: 2rem;
                    font-size: 1.5rem;
                }

                .search input{
                    width: 50%;
                    padding: 1rem;
                    border:none;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                    font-size: 1rem;
                    border-top-left-radius: 0.5rem;
                    border-bottom-left-radius: 0.5rem;
                    color: #610094;
                }

                .search input:focus{
                    outline: none;
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                }

                .search button{
                    padding: 1rem;
                    border:none;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                    font-size: 1rem;
                    border-top-right-radius: 0.5rem;
                    border-bottom-right-radius: 0.5rem;
                    background-color: #B608DC;
                    color: #fff; 
                    cursor: pointer;
                    transition: background-color 0.5s ease;
                }

                .search button:hover{
                    background-color: #610094;
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                }

            `}</style>
        </React.Fragment>
    )
}

export default Search
