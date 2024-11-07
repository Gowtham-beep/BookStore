import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/firebase';
import BookCard from '../components/Cardcomponents';

const Home = () => {
    const firebase=useFirebase()
    const [books,setBooks]=useState([])
   useEffect(()=>{
     firebase.getDocList().then((books)=>setBooks(books.docs))
   },[])
    return (
        <div>
            {books.map((book)=>(
                <BookCard key={book.id} {...book.data()}/>
            ))} 
        </div>
    );
};

export default Home;
