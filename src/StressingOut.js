import * as React from "react";

import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

function Emergency() {
  const [yourLargestInvestment, setYourLargestInvestment] = React.useState("");

  const [questionOneValue, setQuestionOneValue] = React.useState(0);
  const [questionTwoValue, setQuestionTwoValue] = React.useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box m={5}>
          <h1>Help, I am stressing out - I am losing money!</h1>
          <p>Here's what you can do.</p>

          <h2>Check the latest news about The Federal Reserve</h2>

          <p>
            <a href="https://news.google.com/search?q=fed" target="_blank">
              Read the news first
            </a>
            .
          </p>

          <p>Then tell me how bad is it?</p>

          <StyledRating
            name="customized-color"
            defaultValue={0}
            icon={<ThumbDownAltIcon fontSize="inherit" fontSize="large" />}
            emptyIcon={
              <ThumbDownOffAltIcon fontSize="inherit" fontSize="large" />
            }
            value={questionOneValue}
            onChange={(_, newValue) => {
              setQuestionOneValue(newValue);
            }}
          />

          {questionOneValue > 0 && (
            <React.Fragment>
              <h2>Check the latest news about your largest investment</h2>

              <h3>What's your largest investment?</h3>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="For example: Tesla"
                onChange={(event) => {
                  setYourLargestInvestment(event.target.value);
                }}
                fullWidth
              />
            </React.Fragment>
          )}

          {questionOneValue > 0 && yourLargestInvestment && (
            <React.Fragment>
              <p>
                <a
                  href={`https://news.google.com/search?q=${yourLargestInvestment}`}
                  target="_blank"
                >
                  Read the news first
                </a>
                .
              </p>

              <p>Then tell me how bad is it?</p>

              <StyledRating
                name="customized-color"
                defaultValue={0}
                icon={<ThumbDownAltIcon fontSize="inherit" fontSize="large" />}
                emptyIcon={
                  <ThumbDownOffAltIcon fontSize="inherit" fontSize="large" />
                }
                value={questionTwoValue}
                onChange={(_, newValue) => {
                  setQuestionTwoValue(newValue);
                }}
              />
            </React.Fragment>
          )}

          {questionOneValue > 0 &&
            questionTwoValue > 0 &&
            yourLargestInvestment && (
              <React.Fragment>
                <h2>Learn your lesson and adjust</h2>

                <p>
                  Knowing what you know, answer the following questions
                  honestly.
                </p>

                <p>Has your conviction in {yourLargestInvestment} changed?</p>

                <p>Why are you feeling fear right now?</p>

                <p>
                  If you could go back in time, what would you change to feel no
                  fear right now?
                </p>

                <p>Now...</p>

                <p>Learn your lesson.</p>

                <p>Adjust your investment strategy.</p>

                <p>Talk to a friend.</p>

                <p>Go for a walk.</p>

                <p>Enjoy life!</p>
              </React.Fragment>
            )}

          <h2>Note</h2>

          <p>
            Nothing on this website is financial advice. Do your own research.
          </p>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Emergency;
