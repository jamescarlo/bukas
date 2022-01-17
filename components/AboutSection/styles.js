import styled from 'styled-components'
import { Row } from 'antd'

export const StyledAboutSectionWrapper = styled.div``

export const StyledRow = styled(Row)`
  .about__intro--wrapper {
    div {
      display: flex;
      flex-direction: column;
      gap: 12px;
      span {
        color: var(--grey);
      }
    }
  }
`
