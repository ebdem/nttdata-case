import * as React from 'react'
import { useDispatch } from 'react-redux'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import { setcategory } from '../../redux/features/categorySlice'

const SelectComponent = () => {
  const [age, setAge] = React.useState<string[]>([])
  const dispatch = useDispatch()
  const theme = useTheme()

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    const {
      target: { value },
    } = event
    setAge(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const names = [
    'art',
    'design',
    'fashion',
    'nature',
    'science',
    'education',
    'feelings',
    'health',
    'people',
    'cars',
  ]

  return (
    <div>
      <FormControl sx={{ display: { xs: 'none', lg: 'flex' }, zIndex:999 }} size='small'>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={age}
          onChange={(event) => {handleChange(event);  dispatch(setcategory(event.target.value as string))}}
          displayEmpty
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Categories</em>
            }

            return selected.join(', ')
          }}
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            height: '40px',
            '& .MuiSelect-select': {
              outline: 0,
            },
            zIndex:9999,
            '& .MuiSelect-select:focus': {
              outline: 0,
              border: 0,
              borderColor: 'green',
            },
            '&:focus': {
              outline: 0,
            },
            outline: 0,
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0, outline: 0 },
            '.MuiOutlinedInput-root': { border: 0, outline: 0 },
            backgroundColor: theme.palette.grey[100],
          }}
        >
          {names.map((name) => (
            <MenuItem
              dense={true}
              sx={({ palette }) => ({
                backgroundColor: palette.secondary.main,
                color: palette.common.white,
                width: '100%',
                height: '40px',
                padding: '20px',
                zIndex: 999999,
                '&:hover': {
                  backgroundColor:palette.common.white ,
                  color:palette.secondary.main,
                },
                '& .MuiMenuItem-root': {
                  padding: '0',
                },
                '& .css-6hp17o-MuiList-root-MuiMenu-list ': {
                  padding: '0',
                },
              })}
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectComponent
