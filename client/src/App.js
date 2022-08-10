import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Events from "./pages/Events/Events";
import Header from "./components/Header";
import DocumentList from "./pages/Documents/DocumentList";
import StudentList from "./pages/StudentList/StudentList";
import CompanyList from "./pages/CompanyList/CompanyList";
import Event from "./pages/Event/Event";

const App = () => {
    return (
        <div>
            <Header />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/' element={<Events />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/events/:id' element={<Event />} />
                    <Route path='/students' element={<StudentList />} />
                    <Route path='/companies' element={<CompanyList />} />
                    <Route path='/documents' element={<DocumentList />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
