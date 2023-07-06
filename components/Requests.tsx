import React from 'react'
import { type IRequests } from '../interfaces'
import * as S from './Requests.style'

export default function Requests (props: IRequests): JSX.Element {
  const { method, url, title } = props

  return (
  <section>
    <div>{url} {title}</div>
    <S.Method method={method}>{ method }</S.Method>
  </section>
  )
}
