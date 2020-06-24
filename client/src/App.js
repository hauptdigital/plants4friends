import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme';
import Header from './components/Header';
import Container from './components/Container';
import Shop from './pages/Shop';
import About from './pages/About';
import RegisterSignIn from './pages/RegisterSignIn';
import Profile from './pages/Profile';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <Header />
                <Container>
                    <Switch>
                        <Route path="/" exact>
                            <Shop />
                        </Route>
                        <Route path="/about" exact>
                            <About />
                        </Route>
                        <Route path="/register" exact>
                            <RegisterSignIn />
                        </Route>
                        <Route path="/profile" exact>
                            <Profile />
                        </Route>
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;