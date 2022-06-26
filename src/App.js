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
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const getEmoji = async (word) => {
    let url = `https://transemojik-api.herokuapp.com/word/${word}`;

    let test = await axios.get(url);
    return test.data;
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTranslate = async () => {
    const parsed = input.replace(/\W|_/g, " ");
    const inputArr = parsed.split(" ");
    console.log(inputArr);

    let tempInput = input;

    for (let word of inputArr) {
      let data = await getEmoji(word);
      if (data.status) {
        console.log(data);
        tempInput = tempInput.replace(word, data.char);
      }
    }
    setOutput(tempInput);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="App">
      <>
        <Typography
          sx={{ color: "white" }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Transemojik
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
              rows={2}
              fullWidth
              onChange={handleInput}
            />
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Button onClick={handleClear} color="secondary">
                Clear
              </Button>
              <Button onClick={handleTranslate} variant="contained">
                Translate
              </Button>
            </Stack>
            <TextField
              id="outlined-multiline-flexible"
              label="Output"
              multiline
              rows={2}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
              value={output}
            />
          </Stack>
        </Paper>
      </>
    </div>
  );
}

export default App;
