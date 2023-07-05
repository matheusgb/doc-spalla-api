import React from 'react'
import { type IRequests } from '../interfaces'

export default function Requests (props: IRequests): JSX.Element {
  const { method, url, title } = props

  // const methods: IMethodsColors = {
  //   GET: '#0000FF',
  //   POST: '#008000',
  //   PUT: '#FFA500',
  //   PATCH: '#FFFF00',
  //   DELETE: '#FF0000'
  // }

  return (
  <section className='container'>
    <div>{method} {url} {title}</div>
  </section>
  )
}
