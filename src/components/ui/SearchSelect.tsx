import { useState, useEffect } from "react";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
// import dropDown from "@/assets/icons/money.svg"; // custom icon

interface Client {
  id: number;
  name: string;
  phone: string;
}

interface SearchSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  fetchClients: (query: string) => Promise<Client[]>; // API fetcher
}

const filter = createFilterOptions<Client>();

export default function SearchSelect({
  name,
  label,
  placeholder,
  fetchClients,
}: SearchSelectProps) {
  const [field, meta, helpers] = useField(name);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);

  // Debounced fetch
  useEffect(() => {
    if (!query) {
      setOptions([]);
      return;
    }

    const handler = setTimeout(() => {
      setLoading(true);
      fetchClients(query)
        .then((data) => setOptions(data))
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(handler);
  }, [query, fetchClients]);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[14px] font-medium text-gray-900 mb-1">
          {label}
        </label>
      )}
      <Autocomplete
        value={field.value || null}
        onChange={(_, newValue) => {
          helpers.setValue(newValue);
        }}
        inputValue={query}
        onInputChange={(_, newInputValue) => {
          setQuery(newInputValue);
          if (!newInputValue) helpers.setValue(null);
        }}
        options={options}
        getOptionLabel={(option) =>
          typeof option === "string"
            ? option
            : `${option.name} (${option.phone})`
        }
        isOptionEqualToValue={(option, value) => option.id === value?.id}
        loading={loading}
        fullWidth
        popupIcon={<img src={""} />} // ✅ custom icon
        filterOptions={(opts, params) => {
          const filtered = filter(opts, params);
          return filtered.filter(
            (opt) =>
              opt.name
                .toLowerCase()
                .includes(params.inputValue.toLowerCase()) ||
              opt.phone.includes(params.inputValue)
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            variant="outlined"
            sx={{
              "& .MuiFormHelperText-root": {
                marginLeft: 0, // ✅ removes left indent
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#002D62", // custom border color on focus
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#002D62", // label color on focus
              },
            }}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            className="outline-none"
            InputLabelProps={{ shrink: false }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
}
