import React from 'react'
import styled from 'styled-components'
import slackdown from 'slackdown'
import copy from 'clipboard-copy'

const Wrapper = styled.div`
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  cursor: pointer;
`

const Heading = styled.h1``

const Pre = styled.pre`
  width: 80%;
  margin: 0 auto;
  white-space: pre-wrap;
`

interface Props {
  source: string
}

function Preview({ source }: Props) {
  return (
    <Wrapper onClick={() => copy(source)}>
      <Pre dangerouslySetInnerHTML={{ __html: slackdown.parse(source) }} />
    </Wrapper>
  )
}

export default Preview
