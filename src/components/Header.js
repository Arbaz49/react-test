import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={styles.header}>
           <Link to="/" style={styles.title}>
            My App
            </Link>

            <Link to="/Todo" style={{ color: 'white', textDecoration: 'none' }}>
            Todo
            </Link>

            <Link to="/pagination" style={{ color: 'white', textDecoration: 'none' }}>
            Pagination
            </Link>
            <Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>
            search
            </Link>
            <Link to="/counter-usereducer" style={{ color: 'white', textDecoration: 'none' }}>
            useReducer
            </Link>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: 'blue',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        color: 'yellow',
        fontSize: '24px',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginLeft: '20px',
    },
};

export default Header;