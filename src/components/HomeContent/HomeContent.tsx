import React from 'react'
import styled from 'styled-components'

import MarkdownContent from '../MarkdownContent/MarkdownContent'

const Container = styled.div`
  background: #f8f8f8;
`

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 16px;
  max-width: 900px;
`

interface HomeContentProps {
  html: string
}

const HomeContent = ({ html }: HomeContentProps) => (
  <Container>
    <Wrapper>
      <MarkdownContent html={html} />
    </Wrapper>
  </Container>
)

export default HomeContent
