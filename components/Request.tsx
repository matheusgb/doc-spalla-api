import React from 'react'
import Request from '../interfaces/request.interface'

export default function Request(props: Request) {
  const { method, url } = props;
  return <div>Request {method}, url {url}</div>
}