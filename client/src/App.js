import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Controller from './pages/Controller';
import Display from './pages/Display';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* Route for Controller component */}
                    <Route path="/controller" element={<Controller/>}/>
                    {/* Route for Display component */}
                    <Route path="/display" element={<Display/>}/>
                    {/* Optional: Redirect or show a default component */}
                    {/* In v6, Redirect is handled differently. Here's a simple approach for a default route: */}
                </Routes>
            </div>
        </Router>
);
}

export default App;