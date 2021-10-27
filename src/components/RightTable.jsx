import React, { useEffect, useState } from 'react'

function RightTable(props) {

    const [data, setData] = useState(props.rightSelected);
    const [order, setOrder] = useState("");

    useEffect(() => {
        setData(props.rightSelected);
    }, [props])


    function compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
    }

    function compareByDesc(key) {
        return function (a, b) {
          if (a[key] < b[key]) return 1;
          if (a[key] > b[key]) return -1;
          return 0;
        };
    }

    function sortBy(key) {
        if(order === "" || order === "desc"){
            let arrayCopy = [...data];
            arrayCopy.sort(compareBy(key));
            setData(arrayCopy.map((item) => item));
            setOrder("asc");
        }
        else if(order === "asc"){
            let arrayCopy = [...data];
            arrayCopy.sort(compareByDesc(key));
            setData(arrayCopy.map((item) => item));
            setOrder("desc");
        }
    }

    return (
        <React.Fragment>
            <div className="rightTable">
                {   props.rightSelected.length ?
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th onClick={() => sortBy('title')}>Title{" "}<i class="fas fa-caret-down"></i></th>
                                <th onClick={() => sortBy('price')}>Price{" "}<i class="fas fa-caret-down"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (
                                    <tr className={index % 2 !== 0 ? "alternate-grey" : "alternate-white"}>
                                        <td className="first-column">{index + 1}</td>
                                        <td className="rightTable-title">{item.title}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table> :
                    null
                }
            </div>
            <style jsx='true'>{`
                .rightTable{
                    padding: 2rem;
                    text-align: left;
                }
                .rightTable table {
                    border-collapse: collapse;
                }

                .rightTable thead{
                    background-color: #B608DC;
                    color: #fff; 
                }

                .rightTable i{
                    cursor: pointer;
                }

                .rightTable th, td{
                    padding: 0.5rem 1rem;
                    background-color: transparent;
                    border: 0.25px solid #610094;
                }
                .first-column{
                    width: 2px !important;
                }

                .rightTable-title{
                    min-width: 30rem;
                }

                .alternate-white{
                    background-color: #fff !important;
                }
                .alternate-grey{
                    background-color: #f2f2f2 !important;
                }
            `}</style>
        </React.Fragment>
    )
}

export default RightTable
