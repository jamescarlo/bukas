import styled from 'styled-components'

const StyledGlobalPageWrapper = styled.div`
  padding: 56px;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
`

export default function PageWrapper ({ children }) { return <StyledGlobalPageWrapper>{children}</StyledGlobalPageWrapper> }
