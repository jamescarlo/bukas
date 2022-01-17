import { Col, Image, Spin } from 'antd'
import ContentWrapper from 'components/ContentWrapper'
import { HeaderWrapper, StyledRow } from './styles'
import { useRouter } from 'next/router'
import { BRAND } from 'utils/constants'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Index() {
  const { asPath } = useRouter()
  const [isMenuLoading, setIsMenuLoading] = useState(true)
  const [menus, setMenus] = useState([])

  useEffect(() => {
    axios
      .get('/api/menus')
      .then((response) => {
        setIsMenuLoading(false)
        setMenus(response.data)
      })
      .catch((error) => {
        console.error('##ERROR WHEN FETCHING MENUS', error)
      })

    return () => {
      setIsMenuLoading(true)
      setMenus(null)
    }
  }, [])

  return (
    <HeaderWrapper offsetTop={0} id='home'>
      <ContentWrapper>
        <StyledRow justify='space-between' align='middle'>
          <Col span={6}>
            <Link href='#home' passHref>
              <Image
                src='/assets/logo.png'
                alt={BRAND}
                preview={false}
                height={41}
                with={161}
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </Col>
          <Col className='header__menu--wrapper' span={18}>
            {isMenuLoading && <Spin spinning />}
            {(!isMenuLoading && menus) &&
              menus.map((menu) => (
                <Link
                  className={asPath.substring(1) === menu.attributes.target_id ? 'active' : ''}
                  key={menu.id}
                  href={menu.attributes.target_id}
                >
                  {menu.attributes.title}
                </Link>
              ))
            }
          </Col>
        </StyledRow>
      </ContentWrapper>
    </HeaderWrapper>
  )
}
