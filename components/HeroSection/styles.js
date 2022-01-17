import styled from 'styled-components'
import { Row } from 'antd'

export const StyledHeroSectionWrapper = styled.div`
  position: relative;
  .hero__top--dots {
    width: 80px;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const StyledRow = styled(Row)`
  .hero__intro--wrapper {
    margin-left: 100px;
    div {
      display: flex;
      flex-direction: column;
      .hero__intro--btn {
        margin-top: 42px;
      }
      h1 {
        max-width: 445px;
      }
      span {
        color: var(--grey);
        max-width:335px;
      }
    }
  }
`
