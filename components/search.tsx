import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Search({setFilter, options}) {
  const classes = useStyles();

  const handleChange = (e, values) => {
      let tags = [];
      values.forEach(value => {
          tags.push(value.name);
      })
      setFilter(tags);
  }
  return (
      <Autocomplete
        multiple
        id="tags-standard"
        options={options}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="Technologies"
          />
        )}
      />
  );
}
