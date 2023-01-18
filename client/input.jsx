import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect() {
  return (
    <Autocomplete
      id="medicine-select"
      sx={{ width: 300 }}
      options={meds}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose medicine"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const meds = [
    { "name":"Tolbutamide" },
    { "name":"Glimepiride " },
    { "name":"Glipizide" },
    { "name":"Glyburide" },
    { "name":"Glyburide, micronized" },
    { "name":"Repaglinide " },
    { "name":"Nateglinide " },
    { "name":"Metformin" },
    { "name":"Acarbose " },
    { "name":"Pioglitazone" },
    { "name":"Rosiglitazone " },
    { "name":"Exenatide" },
    { "name":"Liraglutide  " },
    { "name":"Albiglutide  " },
    { "name":"Dulaglutide" },
    { "name":"Alogliptin" },
    { "name":"Sitagliptin  " },
    { "name":"Saxagliptin" },
    { "name":"Linagliptin" },
    { "name":"Canagliflozin" },
    { "name":"Dapagliflozin" },
    { "name":"Empagliflozin" }
]