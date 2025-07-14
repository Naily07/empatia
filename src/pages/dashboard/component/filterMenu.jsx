import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, ListItemText, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const FilterMenu = ({ filterText, filterChange, filters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const onClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const onClose = () => setAnchorEl(null);
  const [activeFilter, setActiveFilter] = useState("");
  const handleChangeFilter = (filter) => {
    setActiveFilter(filter.label);
    filterChange(filter.value);
    onClose();
  };
  return (
    <>
      <Button
        aria-controls="filter-menu"
        aria-haspopup="true"
        variant="outlined"
        onClick={onClick}
        sx={{
          height: "fit-content",
          justifyContent: "initial",
          color: "text.secondary",
          borderRadius: "50px",
          borderColor :"text.secondary"
        }}
        endIcon={anchorEl ? <ExpandLess sx={{ p: 0 }} /> : <ExpandMore />}
      >
        <ListItemText
          primary={`${filterText} : ` + `${activeFilter.toUpperCase()}`}
          sx={{ textTransform: "capitalize" }}
        />
      </Button>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        sx={{border:"1px solid black"}}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
        // sx={{
        // 	"& .MuiPaper-root": {
        // 		boxShadow: "none",
        // 		width: "150px",
        // 	},
        // }}
      >
        {filters.map((filter) => (
          <MenuItem
            key={filter.value}
            onClick={() => handleChangeFilter(filter)}
            sx={{
            //   backgroundColor:
            //     activeFilter === filter.value
            //       ? "rgba(0, 128, 0, 0.10)"
            //       : "inherit",
            //   "&:hover": {
            //     backgroundColor: "rgba(0, 128, 0, 0.25)",
            //   },
            }}
          >
            <ListItemText primary={filter.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
// FilterMenu.propTypes = {
//   anchorEl: PropTypes.object,
//   onClick: PropTypes.func.isRequired,
//   onClose: PropTypes.func.isRequired,
//   filterChange: PropTypes.func.isRequired,
//   activeFilter: PropTypes.string.isRequired,
// };

export default FilterMenu;
