import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Profile } from './Gallery.jsx';
import Gallery from './Gallery.jsx';

export default function App() {
    return (
        <>
        <Gallery/>
        <Profile/>
         </>
    );
}
