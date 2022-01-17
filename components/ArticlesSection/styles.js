import styled from 'styled-components'
import { Row } from 'antd'

export const StyledArticlesWrapper = styled.div`
    background-image: url('/assets/bg/articles-bg.png');
    background-position: right;
    background-repeat: no-repeat;
`

export const StyledRow = styled(Row)`
    .articles__intro-wrapper {
        text-align: center;
    }
`

export const StyledArticlesCardWrapper = styled.div`
    position: relative;
    .articles__dots--asset {
        position: absolute;
        top: 0;
        left: 0;
    }
`