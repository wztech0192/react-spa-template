import React from 'react';
import Container from '@material-ui/core/Container';
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import Routes from 'components/Routes';
import { useSelector } from 'react-redux';
import { isAuthenticated } from 'stores/reducers/userReducer';

const App = () => {
  const authStatus = useSelector(isAuthenticated);
  return (
    <div>
      <Header authStatus={authStatus} />
      <Container className="main-container">
        <Routes authStatus={authStatus} />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
