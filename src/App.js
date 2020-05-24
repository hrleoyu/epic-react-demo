import React, {Suspense} from 'react';
import './App.css';
import Loading from "./components/Loading";

import 'antd/dist/antd.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    Switch,
    Route
} from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const History = React.lazy(() => import('./pages/History'));
const Login = React.lazy(()=>import('./pages/Login'));
const Reg = React.lazy(()=>import('./pages/Reg'))


function App() {
    return (
        <>
            <Header/>
            <main>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/history" exact component={History}/>
                        <Route path={'/about'} exact component={About}/>
                        <Route path={'/login'} exact component={Login}/>
                        <Route path={'/reg'} exact component={Reg}/>
                    </Switch>
                </Suspense>
            </main>
            <Footer/>
            </>
    );
}

export default App;
