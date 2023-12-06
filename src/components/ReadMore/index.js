import {useState} from 'react'

import {
  ReadMoreContainer,
  ReadMoreHeading,
  ReadMoreDescription,
  ReactImage,
  ReadMoreText,
  ShowButton,
  BtnContainer,
} from './styledComponents'

const ReadMore = props => {
  const [fullText, setFullText] = useState(false)
  const {reactHooksDescription} = props

  const index = reactHooksDescription.indexOf('.')
  const lessText = reactHooksDescription.slice(0, index + 1)

  const onClickShow = () => {
    setFullText(prev => !prev)
  }

  return (
    <ReadMoreContainer>
      <ReadMoreHeading>React Hooks</ReadMoreHeading>
      <ReadMoreDescription>
        Hooks are a new addition to React
      </ReadMoreDescription>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      {fullText ? (
        <ReadMoreText>{reactHooksDescription}</ReadMoreText>
      ) : (
        <ReadMoreText>{lessText}</ReadMoreText>
      )}
      <BtnContainer>
        <ShowButton type="button" onClick={onClickShow}>
          {fullText ? 'Read Less' : 'Read More'}
        </ShowButton>
      </BtnContainer>
    </ReadMoreContainer>
  )
}

export default ReadMore
