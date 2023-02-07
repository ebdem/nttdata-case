import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'

const SelectComponent = () => {
  const [age, setAge] = React.useState<string[]>([])
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
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]

  return (
    <div>
      <FormControl sx={{ minWidth: 150 }} size='small'>
        <Select
          labelId='demo-select-small'
          id='demo-select-small'
          value={age}
          onChange={handleChange}
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
            '& .MuiSelect-select': {
              outline: 0,
            },
            '& .MuiSelect-select:focus': {
              outline: 0,
              border: 0,
              borderColor: 'green',
            },
            '&:focus': {
              borderColor: 'brown',
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
                width: '100%',
                height: '40px',
                padding: '0',
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
