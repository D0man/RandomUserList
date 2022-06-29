import { Fragment } from 'react'
import { GlobalStyles } from '../../styles'
import { PersonCard } from '../PersonCard'
import { Header } from '../Header'
import { Results } from '../Results'
export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header title="My awsome app"/>
      <Results/>
    </Fragment>
  )
}
