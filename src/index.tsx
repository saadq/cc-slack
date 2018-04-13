import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './components/App'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
`

render(<App />, document.querySelector('#app'))
