import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import styles from '../../styles/list.module.css';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "var(--font-color)",
  },
  endAdornment: {
    color: "#757575",
    "& .MuiButtonBase-root": {
      color: "#757575",
    }
    
  }
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
    <div className={styles.search}>
      <Autocomplete
        multiple
        classes={classes}
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
      </div>
  );
}
