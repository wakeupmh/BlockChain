import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class ShowBooks extends Component{
    handleChange=(book)=>{
        let _book=book;
        this.props.vote(_book)
    }

    render(){
        let bookList=this.props.books.map((book,i)=>
        <tr key={i}>
            <td onClick={this.handleChange.bind(this,book.name)}>{book.name}</td>
            <td>{book.rating}</td>
        </tr>)

        return(
            <div>
                <h3> Books</h3>
                <hr />
                <div className="align-self-start mr-3">
                    <Table variant="dark" responsive bordered hover >
                        <tbody>
                            <tr>
                                <th>Book</th>
                                <th>Rating</th> 
                            </tr>
                            {bookList}
                        </tbody>
                    </Table>
                </div>
                
            </div>
        )
    } 
}

export default ShowBooks;