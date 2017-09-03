import React from 'react'
import ReactDOM from 'react-dom'
import { asyncComponent } from 'react-async-component'

const createIconAsync = (icon) => {
    let iconName = icon.replace(/Icon$/, '')
    return React.createElement(asyncComponent({
        resolve: () => import(
            /* webpackMode: "eager" */
            `material-ui-icons/${iconName}`)
    }))
}

const createIcon = (icon) => {
    let iconName = icon.replace(/Icon$/, '')
    let resolved = require('material-ui-icons/' + iconName).default
    
    if (!resolved) {
        throw Error("Could not find material-ui-icons/" + iconName)
    }

    return React.createElement(resolved)
}

const App = ({ icon }) =>
    <div>
        {createIconAsync(icon)}
    </div>

ReactDOM.render(
    <App icon="AccessAlarmIcon" />,
    document.getElementById('app')
)