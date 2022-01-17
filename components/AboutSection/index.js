import { StyledAboutSectionWrapper, StyledRow } from './styles'
import { Col, Button, Image } from 'antd'
import { BRAND } from 'utils/constants'
import ContentWrapper from 'components/ContentWrapper'

export default function Index() {
  return (
    <StyledAboutSectionWrapper id='about-us'>
      <ContentWrapper>
        <StyledRow justify='center' align='middle'>
          <Col span={12}>
            <Image src='/assets/about-banner.png' alt={BRAND} preview={false} />
          </Col>
          <Col className='about__intro--wrapper' span={8} offset={2}>
            <div>
              <h1>Leading healthcare providers</h1>
              <div className='global__line left' />
              <span>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone. To us, it’s not
                just work. We take pride in the solutions we deliver
              </span>
              <Button
                className='global__secondary--btn'
                shape='round'
                style={{ marginTop: 30 }}
              >
                Learn more
              </Button>
            </div>
          </Col>
        </StyledRow>
      </ContentWrapper>
    </StyledAboutSectionWrapper>
  )
}
