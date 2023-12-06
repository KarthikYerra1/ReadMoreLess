import styled from 'styled-components'

export const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const ReadMoreHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const ReadMoreDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #334155;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ReactImage = styled.img`
  width: 90%;
  @media screen and (min-width: 600px) {
    width: 75%;
  }
  @media screen and (min-width: 800px) {
    width: 50%;
  }
`
export const ReadMoreText = styled(ReadMoreDescription)`
  font-size: 12px;
  width: 90%;
  @media screen and (min-width: 600px) {
    font-size: 14px;
    width: 75%;
  }
  @media screen and (min-width: 800px) {
    width: 50%;
  }
`
export const ShowButton = styled.button`
  height: 40px;
  width: 90px;
  text-align: center;
  background-color: #1f81ff;
  color: #fff;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 10px auto;
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
  width: 95%;
  margin-top: 20px;
  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`
