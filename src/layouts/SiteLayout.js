import React from 'react'
import Navigation from '../components/navigation'
import styled from 'styled-components'

const SiteContainer = styled.div`
  padding: 0 1.5rem;
  margin: 0;
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const SiteLayout = props => (
  <SiteContainer>
    <Navigation />
    <ContentContainer>
      { props.children }
    </ContentContainer>
  </SiteContainer>
)

export default SiteLayout