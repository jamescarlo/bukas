import styled from 'styled-components'
import { Image } from 'antd'

const StyledSericesCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 320px;
  padding: 46px 39px;
  background: var(--white);
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
`

export default function ServicesCard({
  title = '',
  description = '',
  serviceImage = '',
}) {
  return (
    <StyledSericesCardWrapper>
      <Image
        preview={false}
        src={serviceImage}
        alt={title}
        height={80}
        width={80}
      />
      <strong>{title}</strong>
      <span>{description}</span>
    </StyledSericesCardWrapper>
  )
}
