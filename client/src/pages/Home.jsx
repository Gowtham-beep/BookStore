import React, { useEffect, useState } from 'react';
import { useFirebase } from '../context/firebase';
import BookCard from '../components/Cardcomponents';

const Home = () => {
    const firebase = useFirebase();
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch the list of books
        firebase.getDocList().then((books) => setBooks(books.docs));
    }, [firebase]);

    // Filter books by title based on search query
    const filteredBooks = books.filter((book) => {
        return book.data().title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div>
            <div style={{ margin: "40px" }}>
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ padding: "10px", width: "100%", maxWidth: "400px", marginBottom: "20px" }}
                />
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                {/* Render filtered books */}
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <BookCard key={book.id} {...book.data()} />
                    ))
                ) : (
                    <p>No books found</p>
                )}
            </div>
        </div>
    );
};

export default Home;
