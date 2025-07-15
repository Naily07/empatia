import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SettingsIcon from "@mui/icons-material/Settings";

import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Select,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FilterMenu from "./filterMenu";
import { useEffect, useState } from "react";

const columns = [
  { id: "infoUser", label: "Nom", minWidth: 170 },
  { id: "quartier", label: "Quartier", minWidth: 100 },
  {
    id: "priorite",
    label: "Priorité",
    // minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "dateDebut",
    label: "Date de debut",
    // minWidth: 170,
    align: "center",
  },
  {
    id: "dateFin",
    label: "Date de debut",
    // minWidth: 170,
    align: "center",
  },
];

function createData({
  name,
  profil,
  age,
  genre,
  quartier,
  priorite,
  date_de_debut,
  date_de_fin,
}) {
  return {
    infoUser: {
      name: name,
      profil: profil,
      age: age,
      genre: genre,
    },
    priorite: priorite,
    quartier: quartier,
    dateDebut: date_de_debut,
    dateFin: date_de_fin,
  };
}

const datas = [
  createData({
    name: "Aina Moreau",
    profile: "/static/images/avatat/3.jpg",
    age: "27",
    genre: "Femme",
    priorite: "Haute",
    quartier: "Centre-ville",
    date_de_debut: "2023-10-01",
    date_de_fin: "2023-10-15",
  }),
  createData({
    name: "Lina Moreau",
    profile: "/static/images/avatat/3.jpg",
    age: "27",
    genre: "Femme",
    priorite: "faible",
    quartier: "Centre-ville",
    date_de_debut: "2023-10-01",
    date_de_fin: "2023-10-15",
  }),
];
const filterList = [
  { label: "A-Z", value: "az" },
  { label: "Z-A", value: "za" },
];

export default function TableUser() {
  const [rows, setRows] = useState(datas);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filterChange, setFilterChange] = useState("");

  // Filtrage des rows selon le filtre sélectionné
  const filteredRows = (() => {
    if (!filterChange) return rows;
    if (filterChange === "az") {
      return [...rows].sort((a, b) =>
        a.infoUser.name.localeCompare(b.infoUser.name)
      );
    }
    if (filterChange === "za") {
      return [...rows].sort((a, b) =>
        b.infoUser.name.localeCompare(a.infoUser.name)
      );
    }
    return rows;
  })();
  const theme = useTheme();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    setRows(filteredRows);
  }, [filteredRows]);
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: "column",
        width: "70%",
        overflow: "hidden",
        p: 2,
        bgcolor: "background.default",
      }}
    >
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Stack direction={"column"}>
          <Button
            startIcon={<SettingsIcon />}
            variant="text"
            color="primary"
            sx={{ width: "fit-content", minWidth: 0 }}
          >
            Patient
          </Button>
          <Typography color="text.secondary" variant="body2">
            Ceci est vôtre liste des patient le plus recent
          </Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <FilterMenu
            filters={filterList}
            filterText={"filtre"}
            filterChange={setFilterChange}
          />
          <Button
            variant="text"
            sx={{
              borderBottom: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "0",
            }}
          >
            Voir tout{" "}
          </Button>
        </Stack>
      </Stack>
      <Divider />
      <TableContainer
        sx={{
          maxHeight: 440,
          mt: 2,
          borderColor: "divider",
          border:
            theme.palette.mode === "light"
              ? "1px solid rgba(0, 0, 0, 0.12)"
              : "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 1,
        }}
      >
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if (column.id === "priorite") {
                        let color;
                        switch (row[column.id]?.toLowerCase()) {
                          case "haute":
                            color = "error";
                            break;
                          case "midium":
                            color = "warning";
                            break;
                          case "faible":
                            color = "success";
                            break;
                          default:
                            color = "primary";
                        }

                        return (
                          <TableCell align="center" sx={{ p: 0.5 }}>
                            <Button
                              size="small"
                              variant="contained"
                              color={color}
                              sx={{
                                boxShadow: "none",
                                textTransform: "capitalize",
                                fontSize: "0.75rem",
                                py: 0.5,
                                px: 1,
                              }}
                            >
                              {value}
                            </Button>
                          </TableCell>
                        );
                      }

                      if (column.id === "infoUser") {
                        return (
                          <TableCell key={value.nom} sx={{ p: 0.5 }}>
                            <ListItem sx={{ p: 0, alignItems: "center" }}>
                              <ListItemAvatar>
                                <Avatar
                                  sx={{ height: 28, width: 28 }}
                                  alt={value.name}
                                  src="/static/images/avatar/3.jpg"
                                />
                              </ListItemAvatar>
                              <ListItemText
                                slotProps={{
                                  primary: {
                                    fontSize: "0.8rem",
                                  },
                                  secondary: {
                                    fontSize: "0.7rem",
                                  },
                                }}
                                primary={value.name}
                                secondary={`${value.genre}, ${value.age} ans`}
                                sx={{ ml: 1 }}
                              />
                            </ListItem>
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ p: 0.5 }}
                        >
                          <Typography color="text.secondary" fontSize="0.8rem">
                            {value}
                          </Typography>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
