import styled from 'styled-components'
import { type IMethodsColors, type IRequests } from '../interfaces'

const methods: IMethodsColors = {
  GET: '#5f3be2',
  POST: '#1b9936',
  PUT: '#d39014',
  PATCH: '#ffff01',
  DELETE: '#ff0000'
}

export const Method = styled.p<IRequests>`
  color: ${(props) => methods[props.method]};
  `
