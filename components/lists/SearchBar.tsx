import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

export default function Search({setFilter, options}) {
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
        autoComplete={true}
        options={options}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="tags"
          />
        )}
      />
  );
}
