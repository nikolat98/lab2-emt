import React from 'react'
import {useHistory} from 'react-router-dom';

function EditBook(props) {

    const history = useHistory();
    const [bookUpdate, updateBook] = React.useState({
        name: "",
        category: 0,
        author: 1,
        availableCopies: 0
    })

    function handleChange(e) {
        updateBook({
            ...bookUpdate,
            [e.target.name]: e.target.value.trim()
        });
    }

    function onFormSubmit(e) {
        e.preventDefault();
        const name = bookUpdate.name;
        const category = props.categories[bookUpdate.category];
        const author = props.authors.find((a) => a.id === parseInt(bookUpdate.author));
        const availableCopies = bookUpdate.availableCopies >= 0 ? bookUpdate.availableCopies : props.book.availableCopies;
        props.onEditBook(props.book.id, name, category, author, availableCopies);
        history.push("/books");
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.book.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available books</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               onChange={handleChange}
                               placeholder={props.book.availableCopies}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category) => {
                                    if(props.book.category !== undefined && props.book.category === category){
                                        return <option selected={props.categories.indexOf(category)} value={props.categories.indexOf(category)}>{category}</option>
                                    } else {
                                        return <option value={props.categories.indexOf(category)}>{category}</option>
                                    }
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) =>{
                                if(props.book.author !== undefined && props.book.author.id === author.id) {
                                    return <option selected={author.id} value={author.id}>{author.name + " " + author.surname}</option>
                                } else {
                                    return <option value={author.id}>{author.name + " " + author.surname}</option>
                                }
                            })}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditBook
