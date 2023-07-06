import styled from 'styled-components'
import { type IMethodsColors, type IRequests } from '../interfaces'
import { Pre } from 'nextra/components'

const methods: IMethodsColors = {
  GET: '#5f3be2',
  POST: '#1b9936',
  PUT: '#d39014',
  PATCH: '#f3e16b',
  DELETE: '#af4154'
}

export const Container = styled.section`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  height: 30vh;
`
export const DivContainer = styled.div`
  width: 100%;
`

export const DivContainerHead = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`

export const MethodParagraph = styled.p<IRequests>`
  color: white;
  background-color: ${(props) => methods[props.method]};
  padding: 3px;
  border-radius: 0.3rem;
  font-size: 1.0rem;
  font-weight: 600;
  width: fit-content;
  height: 30px;
  text-align: center;
  margin-right: 0.5rem;
`
export const TitleParagraph = styled.p`
  font-weight: 600;
`

export const Url = styled(Pre)`
  margin-top: -20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
