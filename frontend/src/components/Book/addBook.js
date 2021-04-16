import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const AddBook = (props) => {

    const history = useHistory();
    /*
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      */
    const [books, updateBooks] = React.useState({
        name: "",
        author: 1,
        category: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateBooks({
            ...books,
            [e.target.name]: e.target.value.trim()
        })
        console.log(books)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = books.name;
        const author = books.author;
        const availableCopies = books.availableCopies;
        const category = books.category;

        props.onAddBook(name, author, availableCopies, category);
        //routing
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
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((category) =>
                                <option value={props.categories.indexOf(category)}>{category}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((author) =>
                                <option value={author.id}>{author.name + " " + author.surname}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddBook;