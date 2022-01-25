import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home name="Farid" />} />

                {/* <Route path="/survey/:questionNumber">
                    <Survey />
                </Route>
                <Route path="/results">
                    <Results />
                </Route>
                <Route>
                    <Freelances />
                </Route>
                <Route>
                    <Error />
                </Route> */}
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
