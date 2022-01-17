import styled from 'styled-components'
import { Row } from 'antd'

export const StyledDownloadAppWrapper = styled.div`
  position: relative;
  .hero__top--dots {
    width: 100px;
    height: 115px;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const StyledRow = styled(Row)`
  .dlapp__intro--wrapper {
    margin-left: 100px;
    div {
      display: flex;
      flex-direction: column;
      gap: 12px;
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
