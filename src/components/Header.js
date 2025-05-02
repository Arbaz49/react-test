import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>My App</h1>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: 'blue',
        padding: '10px',
        textAlign: 'center',
    },
    title: {
        color: 'yellow',
        fontSize: '24px',
    },
};

export default Header;