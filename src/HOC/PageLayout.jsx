import React from 'react';

const PageLayout = (WrappedComponent) => {
    return (props) => (
      <div>
        <Header />
        <main>
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </div>
    );
  };

export default PageLayout;