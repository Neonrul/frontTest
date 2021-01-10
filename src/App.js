import './App.css'
import GoodsContainer from './Components/GoodsContainer'
import NavbarUI from './Components/NavbarUI'
import { Route } from 'react-router'
import React from 'react'

function App() {
    return (
        <div className="app-wrapper">
            <div><NavbarUI/></div>
            <div>
                <Route path={'/goods-menu'} render={() => <GoodsContainer/>}/>
            </div>
        </div>
    )
}

export default App
