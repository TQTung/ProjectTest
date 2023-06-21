import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { memo, useState } from "react";
import { useDebounce } from "react-use";

interface Props {
  title?: string;
  placeHolder: string;
  onSearch: (searchTerm: string) => void;
  searchText: string;
}

const SearchField = (props: Props) => {
  const { title, searchText, placeHolder, onSearch } = props;
  const [value, setValue] = useState<string>("");

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = async (
    event
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSearch(value);
    }
  };

  useDebounce(
    () => {
      if (searchText !== value) {
        onSearch(value);
      }
    },
    350,
    [value]
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {title ? (
        <FormLabel htmlFor="search">
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ ml: 0.5, color: "text.primary" }}
          >
            {title}
          </Typography>
        </FormLabel>
      ) : null}
      <TextField
        id="search"
        fullWidth
        placeholder={placeHolder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        sx={{ mr: 1, flexGrow: 1 }}
      />
    </Box>
  );
};

export default memo(SearchField);
