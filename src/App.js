import React, {Suspense} from 'react';
import './App.css';
import {
    Switch,
    Route,
} from 'react-router-dom';
// import Home from "./pages/Home";
// import About from "./pages/About";

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));



function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>loading</div>}>
                <Switch>
                    <Route path='/' exact>
                        <Home></Home>
                    </Route>
                </Switch>
                <Switch>
                    <Route path={'/about'}>
                        <About></About>
                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
