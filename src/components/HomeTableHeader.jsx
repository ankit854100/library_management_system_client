import React from 'react'

function HomeTableHeader(props) {
    return (
        <React.Fragment>
            <div className="homeTableHeader">
                <table>
                    <thead>
                        <tr>
                            <th className="first-row">S.No.</th>
                            <th>Title</th>
                            <th className="last-row">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.books.map((book, index) => {
                            return (
                                <tr>
                                    <td className="first-row">{index + 1}</td>
                                    <td>{book.title}</td>
                                    <td className="last-row">{book.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <style jsx="true">{`
                .homeTableHeader{
                    width: 100%;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
                }

                .homeTableHeader table{
                    text-align: left;
                    background-color: #fff;
                    width: 100%;
                    border-radius: 0.25rem;
                    color: #610094;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
                }

                .homeTableHeader .first-row{
                    width: 3rem;
                }

                .homeTableHeader .last-row{
                    float: right;
                    margin-right: 1rem;
                }

                .homeTableHeader th, td{
                    padding: 0.5rem 1rem;
                }
            `}</style>
        </React.Fragment>
    )
}

export default HomeTableHeader
