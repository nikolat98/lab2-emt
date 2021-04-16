import React , {Component} from 'react'
import './App.css'
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"
import Books from "./Book/bookList"
import AddBook from "./Book/addBook"
import EditBook from "./Book/editBook"
import Header from "./Headers/Header"
import ShopService from "../repo/ShopRepository"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        books : [],
        authors : [],
        selectedBook : []
    }
  }

  render() {
    return (
        <Router>
          <Header/>
          <main>
            <div className="container">
                <Route path={"/books/add"} exact render={() => <AddBook authors = {this.state.authors} onAddBook = {this.addNewBook}/>}/>
                <Route path={"/books/edit/:id"} exact render={() => <EditBook authors = {this.state.authors} onEditBook = {this.editBook} book = {this.state.selectedBook}/>} />
                <Route path={"/books"} exact render={() => <Books books={this.state.books} onDelete = {this.deleteBook} markTaken = {this.markAsTaken} onSelected = {this.getBook} />}/>
                <Redirect to={"/books"}/>
            </div>
          </main>
        </Router>
    );
  }

  componentDidMount() {
    this.loadBooks();
    this.loadAuthors();
  }

  addNewBook = (name, quantity, category, author) => {
    ShopService.ddBook(name, quantity, category, author).then( () => {
        this.loadBooks();
      })
  }

  editBook = (id, name, quantity, category, author) => {
    ShopService.editBook(id,name,category,quantity,author).then(() => {
        this.loadBooks();
      })
  }

  loadAuthors = () => {
    ShopService.fetchAuthors().then((data) => {
         this.setState({
             authors : data.data
         })
      })
  }

  loadBooks = () => {
    ShopService.fetchBooks().then((data) => {
      this.setState({
        books : data.data
      })
    })
  }

  markAsTaken = (id) => {
    ShopService.markAsTaken(id).then(() => {
          this.loadBooks()
      });
  }

  deleteBook = (id) => {
    ShopService.deleteBook(id).then(() => {
          this.loadBooks()
      });
  }

  getBook = (id) => {
    ShopService.getBook(id).then((data) => {
          this.setState({
              selectedBook : data.data
          })
      });
  }
}

export default App
