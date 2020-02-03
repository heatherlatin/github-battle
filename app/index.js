import React from 'react'
import ReactDom from 'react-dom' // decoupled from react bc react isn't always rendered to a browser
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from '/contexts/theme'

class App extends React.Component {
    constructor(props) {
    super(props)

    this.state = {
        theme: 'light',
        toggletheme: () => {
            this.setState(({ theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
    }
}
    render() {
        return (
            <ThemeProvider value={this.state}>
                <div className='container'>
                    <Popular />
                    <Battle />
                </div>
            </ThemeProvider>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
)