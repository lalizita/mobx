import React from "react"
import ReactDOM from "react-dom"
import Home from "./page/Home"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'mobx-react'
import store from './store/index'

const app = document.getElementById("app")
export default class App extends React.Component{
    render = () => {
        return(
            <Home />
        )
    }
}

ReactDOM.render(<App/>, app)

