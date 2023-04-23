import React, { useState } from "react";
import './books.css';
import axios from "axios";
import { useNavigate } from "react-router";


export default function Book() {
    const navigate=useNavigate()
    const [add, setAdd] = useState(0);
    const [title,setTitle]=useState('');
    const [ISBN,setISBN]=useState('');
    const [author,setAuthor]=useState('');
    const [descriptin,setdescriptin]=useState('');
    const [publish,setPublish]=useState('');
    const [publisher,setPublisher]=useState('');
    const [arr,setArr]=useState();
    const [de,setDe]=useState('')

    const url="http://localhost:8000";

    axios.get(url+'/books').then((res)=>{
        setArr(res.data)
    });
    console.log(arr)

    const submit=()=>{
        axios.post(url+'/create',{
            "title":title,
            "ISBN":ISBN,
            "author":author,
            "descriptin":descriptin,
            "publish":publish,
            "publisher":publisher
        
        }).then((res)=>{
            setAdd(0);
        })
    };


    if (add === 0 && arr) {
        return <div className="books">
            <br></br><br />
            <h1>Books List</h1>
            <div id="book-btn">
                <button onClick={() => { setAdd(1) }}  className="book-btn">Add New Book</button>
            </div>
            <div id="book-container">
                {
                    arr.map((element)=>{
                        return <div className="bo" style={{"display":`${de}`}}>
                            <h3>{element.title}</h3>
                            <h3>{element.author}</h3>
                            <h3>{element.descriptin}</h3>
                            <button onClick={()=>{setDe('none')}}>delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    }
    else {
        return <div className="books">
            <br/><br/>
            <button onClick={() => { setAdd(0) }} className="book-btn">show book list</button>
            <h1>Add book</h1>
            <h4>create new book</h4>
            <br /><br/>
            <div>
                <input className="book-in" placeholder="Title of the book" onChange={(e)=>{setTitle(e.target.value)}} />
                <br /><br />
                <input className="book-in" placeholder="ISBN" onChange={(e)=>{setISBN(e.target.value)}}/>
                <br />
                <input className="book-in" placeholder="author" onChange={(e)=>{setAuthor(e.target.value)}}/>
                <br />
                <input className="book-in" placeholder="Describe the book" onChange={(e)=>{setdescriptin(e.target.value)}}/>
                <br />
                <input className="book-in" placeholder="Published date" onChange={(e)=>{setPublish(e.target.value)}}/>
                <br />
                <input className="book-in" placeholder="Publiser of the book" onChange={(e)=>{setPublisher(e.target.value)}}/>
            </div>
            <br/>
            <button id="sub-btn" onClick={submit}>Submit</button>
        </div>
    }
}