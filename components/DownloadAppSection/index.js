import ContentWrapper from 'components/ContentWrapper'
import { StyledDownloadAppWrapper, StyledRow } from './styles'
import { Col, Image, Button } from 'antd'
import { BRAND } from 'utils/constants'

export default function Index() {
  return (
    <StyledDownloadAppWrapper id='apps'>
      <ContentWrapper>
        <StyledRow justify='center' align='middle'>
          <Col className='dlapp__intro--wrapper' span={8}>
            <div>
              <h1>Download our mobile apps</h1>
              <div className='global__line left'/>
              <span>
                Our dedicated patient engagement app and web portal allow you to
                access information instantaneously (no tedeous form, long calls,
                or administrative hassle) and securely
              </span>
              <Button
                className='global__secondary--btn'
                shape='round'
                style={{ marginTop: 30 }}
              >
                Download
              </Button>
            </div>
          </Col>
          <Col span={12} offset={2}>
            <Image src='/assets/apps-banner.png' alt={BRAND} preview={false} />
          </Col>
        </StyledRow>
      </ContentWrapper>
    </StyledDownloadAppWrapper>
  )
}
