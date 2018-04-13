import React from 'react'
import styled from 'styled-components'
import { stripIndents } from 'common-tags'
import Form from './Form'
import Preview from './Preview'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
`

class App extends React.Component {
  state = {
    source: '',
    form: {
      discussions: '',
      tips: '',
      questions: '',
      polls: ''
    }
  }

  generateSource() {
    const { discussions, tips, questions, polls } = this.state.form

    if (!discussions && !tips && !questions && !polls) {
      this.setState({ source: '' })
      return
    }

    this.setState({
      source: stripIndents`
        *⟵ Update for ${new Date().toLocaleString().split(',')[0]} ⟶*

        ${discussions &&
          `
          *⟵ Discussions ⟶*
          ${discussions}
        `}
        ${tips &&
          `
          *⟵ Tips ⟶*
          ${tips}
        `}
        ${questions &&
          `
          *⟵ Questions ⟶*
          ${questions}
        `}
        ${polls &&
          `
          *⟵ Polls ⟶*
          ${polls}
        `}
      `
    })
  }

  handleChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    this.setState(
      {
        form: {
          ...this.state.form,
          [name]: value
        }
      },
      this.generateSource
    )
  }

  render() {
    return (
      <Wrapper>
        <Form form={this.state.form} handleChange={this.handleChange} />
        <Preview source={this.state.source} />
      </Wrapper>
    )
  }
}

export default App
