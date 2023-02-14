import * as React from 'react'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'

const Text = styled.p<any>`
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : '32px')};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : '500')};
  color: ${(props: any) => (props.color ? props.color : 'black')};
  margin: ${(props: any) => (props.margin ? props.margin : '0')};
  padding: ${(props: any) => (props.padding ? props.padding : '0')};
  line-height: ${(props: any) => props.lineHeight && props.lineHeight};
`

const DetailMenu = () => {
  return (
    <Box
      sx={({ palette }) => ({
        position: 'absolute',
        top: '330px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        width: '80%',
        height: '400px',
        backgroundColor: palette.grey[100],
        display: 'flex',
        justifyContent: 'space-around',
      })}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box>
          <Text
            lineHeight='19px'
            color='#fff'
            fontWeight={400}
            fontSize='16px'
            margin='24px 0 0 0 '
          >
            Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.
          </Text>
        </Box>
        <Box>
          <h1>Detail Menu</h1>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '50%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          style={{
            width: '700px',
            height: '240px',
            margin: 'auto 0',
          }}
          src='state.png'
          alt='state'
        />
      </Box>
    </Box>
  )
}

export default DetailMenu
