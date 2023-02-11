import styled from '@emotion/styled'
import Logo from '../Logo'
import { InstagramSVG, FacebookSVG, LinkedinSVG } from './footerSVG'
import { footerArray } from '../../data/footerLinks'
import useMediaQuery from '../../hooks/useMediaQuery'

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 500px;
  background-color: #0059bc;
  flex-direction: column;
`

const FooterContainerInside = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #0059bc;
  border-bottom: 2px solid #fff;
`

const Text = styled.p<any>`
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : '32px')};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : '500')};
  color: ${(props: any) => (props.color ? props.color : 'black')};
  margin: ${(props: any) => (props.margin ? props.margin : '0')};
  padding: ${(props: any) => (props.padding ? props.padding : '0')};
  line-height: ${(props: any) => props.lineHeight && props.lineHeight};
`

const FooterLeftSide = styled.div<any>`
  display: flex;
  flex-direction: column;
  margin: 65px 0 0 100px;
  width: ${(props: any) => (props.width ? props.width : '100%')};
`

const FooterRightSide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 95px;
  width: 50%;
`

const Input = styled.input<any>`
  width: 300px;
  margin: 60px 0 0 0;
  height: 45px;
  padding: 0 10px;
  border: none;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: #000;
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
`

const Button = styled.button<any>`
  width: 120px;
  height: 45px;
  margin: 60px 0 0 0;
  border: none;
  background-color: #00254f;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`

const Footer = () => {
  const matchesTablet = useMediaQuery('(min-width: 1200px)')
  const matchesMobile = useMediaQuery('(max-width: 700px)')
  return (
    <FooterContainer>
      <FooterContainerInside>
        <FooterLeftSide width={matchesMobile ? '60%' : '50%'}>
          <Logo fill='#fff' />
          <Text color='#fff' fontWeight={400} fontSize='14px' margin='0'>
            Truster Global Innovator
          </Text>
          <div
            style={{
              display: 'flex',
              maxWidth: '400px',
              width: '100%',
            }}
          >
            <Text
              lineHeight='19px'
              color='#fff'
              fontWeight={400}
              fontSize='16px'
              margin='24px 0 0 0 '
            >
              Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.
            </Text>
          </div>
          <div
            style={{
              display: 'flex',
            }}
          >
            <Input type='text' placeholder='Email' />
            <Button>Sign Up</Button>
          </div>
        </FooterLeftSide>
        <FooterRightSide>
          {matchesTablet ? (
            footerArray.map((item) => (
              <div
                style={{
                  textAlign: 'center',
                  marginRight: '100px',
                }}
                key={item.title}
              >
                <Text color='#fff' fontWeight={500} fontSize='24px' margin='0 0 24px 0'>
                  {item.title}
                </Text>
                {item.content.map((content) => (
                  <div key={content}>
                    <Text color='#fff' fontWeight={400} fontSize='16px' margin='0 0 6px 0'>
                      {content}
                    </Text>
                  </div>
                ))}
              </div>
            ))
          ) : matchesMobile ? (
            <div></div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                marginRight: '100px',
              }}
              key={footerArray[0].title}
            >
              <Text color='#fff' fontWeight={500} fontSize='24px' margin='0 0 24px 0'>
                {footerArray[0].title}
              </Text>
              {footerArray[0].content.map((content) => (
                <div key={content}>
                  <Text color='#fff' fontWeight={400} fontSize='16px' margin='0 0 6px 0'>
                    {content}
                  </Text>
                </div>
              ))}
            </div>
          )}
        </FooterRightSide>
      </FooterContainerInside>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '20%',
          width: '100%',
          alignItems: 'center',
          padding: '0 80px',
        }}
      >
        <Text color='#fff' fontWeight={400} fontSize='14px' margin='0'>
          contact@nttdata.com
        </Text>
        <Text color='#fff' fontWeight={400} fontSize='14px' margin='0'>
          +3 9876 765 444
        </Text>
        {matchesMobile ? (
          ''
        ) : (
          <div>
            <InstagramSVG />
            <FacebookSVG />
            <LinkedinSVG />
          </div>
        )}
      </div>
    </FooterContainer>
  )
}

export default Footer
