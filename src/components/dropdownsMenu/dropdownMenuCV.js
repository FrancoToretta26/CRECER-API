import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'BCG',
  'HEPATITIS B',
  'PENTAVALENTE (A)',
  'ROTAVIRUS',
  'CUADRUPLE (B) O PENTAVALENTE',
  'SALK (POLIOMIELITIS)',
  'NEUMOCOCO CONJUGADA',
  'GRIPE',
  'MENINGOCOCO A/C/W/Y',
  'TRIPLE VIRAL',
  'HEPATITIS A',
  'VARICELA',
  'TRIPLE BACTERIANA CELULAR',
  'TRIPLE BACTERIANA ACELULAR',
  'HPV',
  'DOBLE BACTERIANA',
  "DOBLE VIRAL"

];

export default function DropdownMenu() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 0, width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Vacunas Aplicadas</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}