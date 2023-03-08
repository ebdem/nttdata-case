import * as React from 'react'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import { useTheme } from '@mui/material/styles'

const Text = styled.p<any>`
  font-size: ${(props: any) => (props.fontSize ? props.fontSize : '32px')};
  font-weight: ${(props: any) => (props.fontWeight ? props.fontWeight : '500')};
  color: ${(props: any) => (props.color ? props.color : 'black')};
  margin: ${(props: any) => (props.margin ? props.margin : '0')};
  padding: ${(props: any) => (props.padding ? props.padding : '0')};
  line-height: ${(props: any) => props.lineHeight && props.lineHeight};
`

const DetailMenu = () => {
  const theme = useTheme()
  return (
   <div>
     <Box
      sx={({ palette }) => ({
        zIndex: 1000,
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
        <Box
          sx={{
            margin:'30px 80px 0 40px'
          }}
        >
          <Text
            color={theme.palette.text.primary}
            fontWeight={500}
            fontSize='14px'
            margin="0 0 12px 0"
          >
            Header
          </Text>
          {Array.from(Array(8).keys()).map((item, index) => (
            <Text 
            key={index}
            color={theme.palette.text.primary}
            fontWeight={400}
            fontSize='14px'
            margin="0 0 12px 0"
          >
            SubHeader
          </Text>
          ))}
        </Box>
        <Box
          sx={{
            margin:'30px 80px 0 40px'
          }}
        >
          <Text
            color={theme.palette.text.primary}
            fontWeight={500}
            fontSize='14px'
            margin="0 0 12px 0"
          >
            Header
          </Text>
          {Array.from(Array(8).keys()).map((item, index) => (
            <Text 
            key={index}
            color={theme.palette.text.primary}
            fontWeight={400}
            fontSize='14px'
            margin="0 0 12px 0"
          >
            SubHeader
          </Text>
          ))}
        </Box>
        <Box
        sx={{
          display: 'flex',
          width: '70%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          style={{
            width: 'auto',
            height: '40vh',
            margin: 'auto 20px',
          }}
          src='menu-photo.jpg'
          alt='state'
        />
      </Box>
      </Box>
     
    </Box>
   </div>
  )
}

export default DetailMenu
