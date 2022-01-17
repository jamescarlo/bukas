import { Col, Image, Button } from 'antd'
import ContentWrapper from 'components/ContentWrapper'
import {
  StyledArticlesWrapper,
  StyledRow,
  StyledArticlesCardWrapper,
} from './styles'
import ArticleCard from 'components/ArticleCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Index() {
  const [articles, setArticles] = useState(null)
  const [isArticlesLoading, setIsArticlesLoading] = useState(true)

  useEffect(() => {
    axios
      .get('/api/articles')
      .then((response) => {
        setIsArticlesLoading(false)
        setArticles(response.data)
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
    <StyledArticlesWrapper id='articles'>
      <ContentWrapper>
        <StyledRow justify='center'>
          <Col className='articles__intro-wrapper' span={24}>
            <h2>Check out our latest article</h2>
            <div className='global__line center' />
          </Col>
        </StyledRow>
        <StyledArticlesCardWrapper>
          <Image
            className='articles__dots--asset'
            src='/assets/articles-dots-asset.png'
            preview={false}
            alt=''
            width={100}
          />
          <StyledRow style={{ padding: 24 }} justify='center'>
            {(!isArticlesLoading && articles) 
                && articles.map((article) => (
                <Col span={8} key={article.id}>
                  <ArticleCard
                    title={article.attributes.title}
                    description={article.attributes.description}
                    coverImage={
                      process.env.NEXT_PUBLIC_UPLOAD_URL +
                      article.attributes.cover_image.data.attributes.url
                    }
                  />
                </Col>
              ))}
          </StyledRow>
        </StyledArticlesCardWrapper>
      </ContentWrapper>
    </StyledArticlesWrapper>
  )
}
