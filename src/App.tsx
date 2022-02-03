import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';  
import './assets/App.css'
import { Routes, Route, Link } from 'react-router-dom'

//layouts
import Header from './components/layouts/Header/Header';
import Navigator from './components/layouts/Navigator/Navigator';
import Breadcrumb from './components/layouts/Breadcrumb/Breadcrumb';
// import Footer from './components/layouts/Footer/Footer';

//views
import HomePage from './views/Home/HomePage';
import MyStylePage from './views/MyStyle/MyStylePage';
import NotePage from './views/Note/NotePage';
import NoteView from './views/Note/NoteView/NoteViewPage'
import ContactPage from './views/Contact/ContactPage';

function App() {
    return (
        <div className="App container">
            <Header />
            <Navigator />
            <Breadcrumb />
            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="mystyle" element={<MyStylePage />} />
                <Route path="note" element={<NotePage />} />
                <Route path="note/:noteView" element={<NoteView />} />
                <Route path="contact" element={<ContactPage />} />
            </Routes>
            {/* <Footer/> */}
        </div>
    )
}

export default App
