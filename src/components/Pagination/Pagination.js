import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const book=[
    {"title": "Northanger Abbey", "author": "Austen, Jane", "year_written": 1814, "edition": "Penguin", "price":  182},
    {"title": "War and Peace", "author": "Tolstoy, Leo", "year_written": 1865, "edition": "Penguin", "price":  127},
    {"title": "Anna Karenina", "author": "Tolstoy, Leo", "year_written": 1875, "edition": "Penguin", "price":  135},
    {"title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year_written": 1925, "edition": "Harcourt Brace", "price":  225},
    {"title": "The Hours", "author": "Cunnningham, Michael", "year_written": 1999, "edition": "Harcourt Brace", "price":  1235},
    {"title": "Huckleberry Finn", "author": "Twain, Mark", "year_written": 1865, "edition": "Penguin", "price":  576},
    {"title": "Bleak House", "author": "Dickens, Charles", "year_written": 1870, "edition": "Random House", "price":  575},
    {"title": "Tom Sawyer", "author": "Twain, Mark", "year_written": 1862, "edition": "Random House", "price":  775},
    {"title": "A Room of One's Own", "author": "Woolf, Virginia", "year_written": 1922, "edition": "Penguin", "price":  329},
    {"title": "Harry Potter", "author": "Rowling, J.K.", "year_written": 2000, "edition": "Harcourt Brace", "price":  195},
    {"title": "One Hundred Years of Solitude", "author": "Marquez", "year_written": 1967, "edition": "Harper  Perennial", "price":  140},
    {"title": "Hamlet, Prince of Denmark", "author": "Shakespeare", "year_written": 1603, "edition": "Signet  Classics", "price":  795},
    {"title": "Lord of the Rings", "author": "Tolkien, J.R.", "year_written": 1937, "edition": "Penguin", "price":  275},
    {"title": "Harry Potter-The sorcerers stone", "author": "J.K. Rowling", "year_written": 2003, "edition": "Royal Classics", "price": 595}
    
]

export class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          data: [],
          perPage: 8,
          currentPage: 8
    };
    this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    receivedData() {
        const data = book;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(book => <React.Fragment>
                <table>
                    <tr>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    </tr>
                </table>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div className="pagination-position">
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                   
                    pageCount={this.state.pageCount}
                    pageRangeDisplayed={8}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                
            </div>
        )
    }
}

export default Pagination
