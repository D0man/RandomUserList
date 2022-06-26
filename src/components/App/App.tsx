import { Fragment } from 'react'
import { GlobalStyles } from '../../styles'
import { PersonCard } from '../PersonCard'

export function App() {

  return (
    <Fragment>
      <GlobalStyles />
      <PersonCard country="Poland"  image="https://wwww.wp.pl/logo.png" firstName='Kuba' secondName='Doman' title='Mrs'/>
      <header className="App-header">
        <p>Hello Vite + React ss!!!!!1234545</p>
        <p>
         cos nie dziala eeee</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates1sssdasad.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </Fragment>
  )
}


