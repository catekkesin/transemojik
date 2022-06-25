import "./App.css";
import {
  Stack,
  Paper,
  TextField,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <>
        <Typography
          sx={{ color: "white" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Transemojik{" "}
        </Typography>{" "}
        <Paper
          sx={{
            margin: "0 20px",
            padding: "20px",
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Input"
              multiline
              maxRows={2}
              rows={2}
              fullWidth
            />
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Button color="secondary">Clear</Button>
              <Button variant="contained">Translate</Button>
            </Stack>
            <TextField
              id="outlined-multiline-flexible"
              label="Output"
              multiline
              maxRows={2}
              rows={2}
              fullWidth
            />
          </Stack>
        </Paper>
      </>
    </div>
  );
}

export default App;
