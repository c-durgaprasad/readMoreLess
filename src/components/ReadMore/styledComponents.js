// Style your elements here
import styled from 'styled-components'

export const LargeCon = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  @media screen and (min-width: 768px) {
    margin: 30px;
  }
`

export const ReactHeading = styled.h1`
  font-family: 'Roboto';
  color: #334155;
  font-size: 25px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`

export const ReactDes = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const ReactImg = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 450px;
    margin-top: 20px;
  }
`

export const ReactDescription = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 14px;
  line-height: 1.7;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    width: 450px;
    font-size: 12px;
  }
`

export const Button = styled.button`
  font-family: 'Roboto';
  background-color: #1f81ff;
  outline: none;
  height: 31px;
  width: 100px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  color: #ffffff;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`
