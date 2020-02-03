import React from 'react'
import ReactDom from 'react-dom' // decoupled from react bc react isn't always rendered to a browser
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'

// Component
    // State
    // Lifecycle (fetching..event..etc)
    // UI

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
                <Battle />
            </div>
        )
    }
}

// Babel will convert this code to something readable to the browser
    // (traditional JS code which means....)
        // .createElement

ReactDom.render(
    // Takes in two different arguments:
        // React Element
        <App />,
        // Where to render the Element to
        document.getElementById('app')
)