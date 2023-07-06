import React from 'react'
import { type IRequests } from '../interfaces'
import { CopyToClipboard } from 'nextra/components'
import * as Styled from './Requests.style'

export default function Requests (props: IRequests): JSX.Element {
  const { method, url, title } = props
  const fullUrl = `https://api.spalla.io/${url as string}`

  return (
  <Styled.Container>
    <Styled.DivContainer>
    <Styled.DivContainerHead>
    <Styled.MethodParagraph method={ method }> { method } </Styled.MethodParagraph>
    <Styled.TitleParagraph> { title } </Styled.TitleParagraph>
    </Styled.DivContainerHead>
    <Styled.Url>
    { fullUrl }
      <CopyToClipboard getValue={ () => fullUrl }/>
    </Styled.Url>
    </Styled.DivContainer>
  </Styled.Container>
  )
}
