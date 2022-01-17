import ContentWrapper from 'components/ContentWrapper'
import { StyledHeroSectionWrapper, StyledRow } from './styles'
import { Col, Image, Button } from 'antd'
import { BRAND } from 'utils/constants'

export default function Index() {
  return (
    <StyledHeroSectionWrapper>
      <Image className='hero__top--dots' src='/assets/dots-asset.png' preview={false} alt={BRAND} />
      <ContentWrapper>
        <StyledRow justify='center' align='middle'>
          <Col className='hero__intro--wrapper' span={8}>
            <div>
              <h1>
                Virtual healthcare for you
              </h1>
              <span>
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </span>
              <Button className='hero__intro--btn global__primary--btn' type='primary' shape='round'>Consult today</Button>
            </div>
          </Col>
          <Col span={12} offset={2}>
            <Image src='/assets/hero-banner.png' alt={BRAND} preview={false} />
          </Col>
        </StyledRow>
      </ContentWrapper>
    </StyledHeroSectionWrapper>
  )
}
