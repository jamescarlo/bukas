import styled from 'styled-components'
import { Image, Button } from 'antd'
import Link from 'next/Link'

const StyledArticlesCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 20px;
  min-height: 444px !important;
  background-color: var(--white);
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);

  .article-card__article-img {
    width: 100%;
    height: 240px;
  }

  .article-card__inner--content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px 33px;

    .article-card__read-more--btn {
      color: var(--primary);
    }
  }
`

export default function ArticleCard ({ title = '', description = '', coverImage = ''}) {
  return (
    <StyledArticlesCardWrapper>
      <Image
        className='article-card__article-img'
        src={coverImage}
        preview={false}
        alt={title}
      />
      <div className='article-card__inner--content'>
        <strong>{title}</strong>
        <span>
          {description}
        </span>
        <Link href='/'>Read more</Link>
      </div>
    </StyledArticlesCardWrapper>
  )
}
