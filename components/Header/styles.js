import styled from 'styled-components'
import { Row, Affix } from 'antd'

export const HeaderWrapper = styled(Affix)`
  .ant-affix {
    background-color: var(--white);
    box-shadow: 0 3px 2px -2px gray;
    height: 159px;
  }
`

export const StyledRow = styled(Row)`
  .header__menu--wrapper {
    display: inline-block;
    text-align: right;
    a {
      margin: 0 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      cursor: pointer;
      color: var(--grey);
    }
    .active {
      font-weight: 700;
      color: var(--black);
    }
  }
`
