import {
  StyledServicesWrapper,
  StyledRow,
  StyledServiceCardWrapper,
} from './styles'
import ContentWrapper from 'components/ContentWrapper'
import { Row, Col, Button } from 'antd'
import ServicesCard from 'components/ServicesCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Index() {
  const [isServicesLoading, setIsServicesLoading] = useState(true)
  const [services, setServices] = useState(null)
  
  useEffect(() => {
    axios
      .get('/api/services')
      .then((response) => {
        setIsServicesLoading(false)
        setServices(response.data)
      })
      .catch((error) => {
        console.error('##ERROR WHEN FETCHING MENUS', error)
      })

    return () => {
      setIsServicesLoading(true)
      setServices(null)
    }
  }, [])

  return (
    <StyledServicesWrapper id='find-a-doctor'>
      <StyledRow justify='center'>
        <Col className='services__intro--wrapper' span={24}>
          <h2>Our services</h2>
          <div className='center global__line' />
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </Col>
      </StyledRow>
      <StyledServiceCardWrapper>
        <ContentWrapper>
          <div className='services--inner--wrapper'>
            <Row justify='center' gutter={[12, 32]}>
              {!isServicesLoading &&
                services &&
                services.map((service) => (
                  <Col key={service.id} span={8}>
                    <ServicesCard
                      title={service.attributes.service_name}
                      description={service.attributes.description}
                      serviceImage={
                        process.env.NEXT_PUBLIC_UPLOAD_URL +
                        service.attributes.image.data.attributes.url
                      }
                    />
                  </Col>
                ))}
            </Row>
            <Row justify='center' style={{ marginTop: 70 }}>
              <Col span={4}>
                <Button className='global__secondary--btn' block shape='round'>
                  Learn More
                </Button>
              </Col>
            </Row>
          </div>
        </ContentWrapper>
      </StyledServiceCardWrapper>
    </StyledServicesWrapper>
  )
}
