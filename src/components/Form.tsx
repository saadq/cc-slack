import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2em;
  width: 50%;
`

const Heading = styled.h1`
  margin: 0 auto;
  font-family: Futura;
  font-weight: 400;
`

const Label = styled.label`
  display: block;
  margin-top: 1.25em;
  margin-bottom: 10px;
  font-size: 1.25em;
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 125px;
  resize: vertical;
  border: none;
  border: 1px solid #eee;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 16px;
  padding: 5px;
  outline: none;

  &:focus {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
  }
`

const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
`

interface Props {
  handleChange(e: React.FormEvent<HTMLTextAreaElement>): void
  form: {
    discussions: string
    tips: string
    questions: string
    polls: string
  }
}

function Form({ form, handleChange }: Props) {
  return (
    <Wrapper>
      <StyledForm>
        <Heading>Slack Daily Update</Heading>
        <Label htmlFor="discussions">Discussions</Label>
        <TextArea
          name="discussions"
          value={form.discussions}
          onChange={handleChange}
        />
        <Label htmlFor="tips">Tips</Label>
        <TextArea name="tips" value={form.tips} onChange={handleChange} />
        <Label htmlFor="questions">Previous Questions</Label>
        <TextArea
          name="questions"
          value={form.questions}
          onChange={handleChange}
        />
        <Label htmlFor="polls">Polls</Label>
        <TextArea name="polls" value={form.polls} onChange={handleChange} />
      </StyledForm>
    </Wrapper>
  )
}

export default Form
