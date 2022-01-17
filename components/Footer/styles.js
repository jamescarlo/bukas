import styled from 'styled-components'
import { Row } from 'antd'
export const StyledFooterWrapper = styled.div`
  min-height: 432px;
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  position: relative;
  color: var(--white);
  .footer__btm--dots {
    position: absolute;
    top: 330px;
    left: 0;
    width: 100px;
  }
  .footer__copyright-section {
      gap: 12px !important;
      .footer__copyright {
          margin-top: 30px;
      }
  }
  a {
      color: var(--white) !important;
  }
`
export const StyledRow = styled(Row)`
    height: 300px;
`