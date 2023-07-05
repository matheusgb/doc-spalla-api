import React from 'react'
import type Request from '../interfaces/request.interface'

export default function Requests (props: Request): JSX.Element {
  const { method, url } = props
  return <div>Request { method }, url { url }</div>
}
