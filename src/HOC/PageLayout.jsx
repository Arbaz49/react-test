import React from 'react';
import Header from '../components/Header';

const PageLayout = (WrappedComponent) => {
    return (props) => (
      <div style={{ boxSizing: 'border-box' }}>
        <Header />
        <main>
          <WrappedComponent {...props} />
        </main>
        {/* <Footer /> */}
      </div>
    );
  };

export default PageLayout;