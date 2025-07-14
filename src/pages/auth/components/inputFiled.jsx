import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, InputAdornment, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";

export default function MyInputField({
  name,
  label,
  placeholder,
  children,
  control,
  error,
  required,
  setValue,
  type,
}) {
  const rules = {
    required: required && `${label} est requis`,
    ...(type === "email"
      ? {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: `Format de ${label} invalide`,
          },
        }
      : {}),
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <InputLabel
        htmlFor={name}
        variant="caption"
        color="text.secondary"
        fontWeight={600}
        sx={{ textTransform: "uppercase" }}
        letterSpacing={1}
      >
        {label}
      </InputLabel>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <TextField
            {...field}
            name={name}
            error={!!error[name]}
            helperText={error[field.name]?.message}
            placeholder={placeholder}
            variant="outlined"
            type={showPassword ? "text" : type}
            fullWidth
            onChange={(e) => {
              field.onChange(e);
              setValue(name, e.target.value);
            }}
            value={field.value || ""}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment
                    position="start"
                    onClick={
                      name.toLowerCase() === "password"
                        ? () => setShowPassword((v) => !v)
                        : null
                    }
                    sx={{
                      cursor:
                        name.toLowerCase() === "password" ? "pointer" : "none",
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : children}
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              backgroundColor: "#fff",
              "& .MuiOutlinedInput-root": {
                borderRadius: 0,
              },
              input: {
                paddingY: 1.5,
              },
            }}
          />
        )}
      />
    </Box>
  );
}
