// Write your code here
import {useState} from 'react'
import {
  BgContainer,
  ReactHeading,
  ReactDes,
  ReactImg,
  ReactDescription,
  Button,
  LargeCon,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readButton, setReadButton] = useState(false)

  const readBtnClicked = () => {
    setReadButton(prev => !prev)
  }
  const btn = readButton ? 'Read Less' : 'Read More'
  const description = readButton
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)
  return (
    <LargeCon>
      <BgContainer>
        <ReactHeading>React Hooks</ReactHeading>
        <ReactDes>Hooks are a new addition to React</ReactDes>
        <ReactImg
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <ReactDescription>{description}</ReactDescription>
      </BgContainer>
      <Button type="button" onClick={readBtnClicked}>
        {btn}
      </Button>
    </LargeCon>
  )
}

export default ReadMore
