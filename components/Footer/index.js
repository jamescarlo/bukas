import { StyledFooterWrapper, StyledRow } from './styles'
import ContentWrapper from 'components/ContentWrapper'
import { Image, Space, Col, Row } from 'antd'
import { map_site } from 'utils/constants'
import Link from 'next/link'

export default function Index() {
  return (
    <StyledFooterWrapper>
      <Image
        className='footer__btm--dots'
        src='/assets/footer-btm-dots.png'
        preview={false}
        alt=''
      />
      <ContentWrapper>
        <StyledRow align='middle' gutter={[12, 12]}>
          <Col className='footer__copyright-section' span={8}>
            <Space align='center'>
              <Image
                src='/assets/trafalgar-icon-white.png'
                preview={false}
                alt=''
                width={41}
                height={41}
              />
              <Image
                src='/assets/Trafalgar.png'
                preview={false}
                width={107}
                alt=''
              />
            </Space>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className='footer__copyright'>
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </Col>
          <Col span={10} offset={2}>
            <Row gutter={[12, 24]}>
              {map_site.map((site) => (
                <Col span={8} key={site.group}>
                  <h3 style={{ color: 'var(--white)' }}>{site.group}</h3>
                  <br />
                  <Space direction='vertical'>
                    {site.links.map((link) => (
                      <Link href={link.path} key={link.path}>
                        {link.title}
                      </Link>
                    ))}
                  </Space>
                </Col>
              ))}
            </Row>
          </Col>
        </StyledRow>
      </ContentWrapper>
    </StyledFooterWrapper>
  )
}
