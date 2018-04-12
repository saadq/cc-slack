import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import { stripIndents } from 'common-tags'

injectGlobal`
  body {
    margin: 0;
    background: white;
    color: black;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    width: 100vw;
    min-height: 100vh;
  }

  main {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    padding: 3em 0;
  }

  label {
    display: block;
    margin-top: 0.75em;
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    resize: vertical;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    outline: none;
    padding: 5px;
    font-size: 14px;
  }

  button {
    border: 0;
    text-transform: uppercase;
    background: black;
    color: white;
    margin: 1em 0;
    width: 200px;
    height: 50px;
    border-radius: 2px;
    letter-spacing: 2px;
    font-size: 12px;
    cursor: pointer;
  }

  button:hover {
    background: #222;
  }

  pre {
    margin-top: 1em;
    border: 1px solid #eee;
    padding: 10px;
    overflow: scroll;
    white-space: pre-wrap;
  }
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
      discussions: '',
      tips: '',
      questions: '',
      polls: ''
    }
  }

  generateResult(e) {
    e.preventDefault()

    const result = stripIndents`
      *⟵ Update for ${new Date().toLocaleString().split(',')[0]} ⟶*

      ${this.state.discussions && `
        *⟵ Discussions ⟶*
        ${this.state.discussions}
      `}
      ${this.state.tips && `
        *⟵ Tips ⟶*
        ${this.state.tips}
      `}
      ${this.state.questions && `
        *⟵ Questions ⟶*
        ${this.state.questions}
      `}
      ${this.state.polls && `
        *⟵ Polls ⟶*
        ${this.state.polls}
      `}
      `

    this.setState({ result })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <main>
        <h1>Slack Daily Update Generator</h1>
        <form onSubmit={e => this.generateResult(e)}>
          <label htmlFor="discussions">Discussions</label>
          <textarea onChange={e => this.onChange(e)} name="discussions" />
          <label htmlFor="tips">Tips</label>
          <textarea onChange={e => this.onChange(e)} name="tips" />
          <label htmlFor="questions">Previous Questions</label>
          <textarea onChange={e => this.onChange(e)} name="questions" />
          <label htmlFor="polls">Polls</label>
          <textarea onChange={e => this.onChange(e)} name="polls" />
          <button>Generate</button>
        </form>
        {this.state.result && <pre>{this.state.result}</pre>}
      </main>
    )
  }
}

render(<App />, document.querySelector('#app'))
