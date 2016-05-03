import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import a11y  from 'react-a11y'
import Store from './stores/Store'
import App from './components/App'

const store = new Store()

if(process.env.NODE_ENV === 'development') {
  a11y(React)
}

render(
  <AppContainer>
    <App store={{ store }} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(
      <AppContainer>
        <App store={{ store }} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
