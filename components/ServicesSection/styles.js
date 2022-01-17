import styled from 'styled-components'
import { Row } from 'antd'

export const StyledServicesWrapper = styled.div`
`
export const StyledRow = styled(Row)`
  .services__intro--wrapper {
    text-align: center;
    p {
      margin-top: 32px;
      text-align: center;
      margin: 33px auto;
      width: 952px !important;
      color: var(--grey);
    }
  }
`
export const StyledServiceCardWrapper = styled.div`
    background-image: url('/assets/bg/services-bg.png');
    background-position: left;
    background-repeat: no-repeat;
    .services--inner--wrapper {
        max-width: 1120px !important;
        margin: auto auto;
    }
`
