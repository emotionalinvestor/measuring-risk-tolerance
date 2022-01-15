import * as React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function MeasureMyRiskTolerance() {
  const [yourAge, setYourAge] = React.useState(0);
  const [yourMonthlyIncome, setYourMonthlyIncome] = React.useState(0);
  const [yourInvestmentCapital, setYourInvestmentCapital] = React.useState(0);
  const [yourProfitExpectation, setYourProfitExpectation] = React.useState(0);

  const [isOpenDescription, setIsOpenDescription] = React.useState(false);

  const [questionOneValue, setQuestionOneValue] = React.useState(0);
  const [questionTwoValue, setQuestionTwoValue] = React.useState(0);
  const [questionThreeValue, setQuestionThreeValue] = React.useState(0);

  const halfOfYourInitialCapital = Math.round(yourInvestmentCapital / 2);
  const fiftyPercentIncreaseOfYourInitialCapital = Math.round(
    yourInvestmentCapital * 1.5
  );

  function getYourSituationDescription() {
    if (
      !yourAge ||
      !yourMonthlyIncome ||
      !yourInvestmentCapital ||
      !yourProfitExpectation
    ) {
      return "Answer all questions above first...";
    }

    const expectedReturnPercentage = Math.round(
      ((yourProfitExpectation - yourInvestmentCapital) /
        yourInvestmentCapital) *
        100
    );

    if (expectedReturnPercentage > 250) {
      return (
        <React.Fragment>
          <p>
            You're expecting {expectedReturnPercentage}% return in 12 months.
          </p>
          <p>The amount of risk that you'll need to take is huge.</p>
          <p>Extremely unlikely to happen.</p>
        </React.Fragment>
      );
    }

    if (expectedReturnPercentage > 200) {
      return (
        <React.Fragment>
          <p>
            You're expecting {expectedReturnPercentage}% return in 12 months.
          </p>
          <p>The amount of risk that you'll need to take is big.</p>
          <p>Very unlikely to happen.</p>
        </React.Fragment>
      );
    }

    if (expectedReturnPercentage > 100) {
      return (
        <React.Fragment>
          <p>
            You're expecting {expectedReturnPercentage}% return in 12 months.
          </p>
          <p>The amount of risk that you'll need to take is substantial.</p>
          <p>Unlikely to happen.</p>
        </React.Fragment>
      );
    }

    if (expectedReturnPercentage > 50) {
      return (
        <React.Fragment>
          <p>
            You're expecting {expectedReturnPercentage}% return in 12 months.
          </p>
          <p>The amount of risk that you'll need to take is not small.</p>
          <p>Not easy.</p>
        </React.Fragment>
      );
    }

    if (expectedReturnPercentage > 20) {
      return (
        <React.Fragment>
          <p>
            You're expecting {expectedReturnPercentage}% return in 12 months.
          </p>
          <p>The amount of risk that you'll need to take is reasonable.</p>
        </React.Fragment>
      );
    }

    if (expectedReturnPercentage > 10) {
      return (
        <React.Fragment>
          <p>
            You're expecting {expectedReturnPercentage}% return in 12 months.
          </p>
          <p>The amount of risk that you'll need to take is moderate.</p>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <p>You're expecting {expectedReturnPercentage}% return in 12 months.</p>
        <p>The amount of risk that you'll need to take is low.</p>
        <p>
          <a href="https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp">
            S&amp;P500 returns on average around 10% per year
          </a>
          .
        </p>
      </React.Fragment>
    );
  }

  function getRiskTolerance() {
    if (!questionOneValue || !questionTwoValue || !questionThreeValue) {
      return "";
    }

    if (
      questionOneValue > 5 ||
      questionTwoValue > 5 ||
      questionThreeValue > 5
    ) {
      return (
        <Typography variant="span" component="span">
          Low
        </Typography>
      );
    }

    if (
      questionOneValue > 4 ||
      questionTwoValue > 4 ||
      questionThreeValue > 4
    ) {
      return (
        <Typography variant="span" component="span">
          Moderate
        </Typography>
      );
    }

    return (
      <Typography variant="span" component="span">
        High
      </Typography>
    );
  }

  function getRiskToleranceDescription() {
    if (!questionOneValue || !questionTwoValue || !questionThreeValue) {
      return "First, select all star ratings above...";
    }

    let riskToleranceDescription = [];

    if (questionOneValue > 4) {
      riskToleranceDescription = [
        ...riskToleranceDescription,
        <p>
          You're vulnerable to situations when your investment is going down.
          Check that you're investing into assets that you're confident in.
          Check that you're investing what you can afford to lose (you won't be
          homeless starving while in huge debt). Check that you're diversifying
          your investments enough to sleep well when things go down.
        </p>,
      ];
    }

    if (questionTwoValue > 4) {
      riskToleranceDescription = [
        ...riskToleranceDescription,
        <p>
          You're prone to experience greed in situations when your investment is
          going up. Do you know at what price point you will take profits? Do
          you have limit sell orders set?
        </p>,
      ];
    }

    if (questionThreeValue > 4) {
      riskToleranceDescription = [
        ...riskToleranceDescription,
        <p>
          You're sensitive to not making money over the next 5 years. Check that
          you have other ways to make money while your asset doesn't go up or
          down in price.
        </p>,
      ];
    }

    if (!riskToleranceDescription.length) {
      return (
        <React.Fragment>
          <p>
            Your emotions are in check, which suggests that you know what you're
            doing.
          </p>
          <p>Bravo.</p>
        </React.Fragment>
      );
    }

    return riskToleranceDescription;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box m={5}>
          <h1>I want to measure my risk tolerance</h1>
          <p>
            This is a framework for you to understand how much risk you’re
            taking by inspecting your emotions.
          </p>
          {!isOpenDescription && (
            <Button
              variant="outlined"
              onClick={() => {
                setIsOpenDescription(true);
              }}
            >
              Tell me more
            </Button>
          )}
          {isOpenDescription && (
            <>
              <p>
                There are two emotions that drive our investing decisions: greed
                and fear.
              </p>
              <p>
                The more risk you’ll take the stronger emotions you will
                experience.
              </p>
              <p>
                If you're experiencing strong greed or fear emotions then you're
                taking on too much risk.
              </p>
              <p>What is too much risk for you?</p>
              <p>That’s your job to find out.</p>
              <p>
                This exercise is designed to help you find out your risk
                tolerance.
              </p>
              <Button
                variant="outlined"
                onClick={() => {
                  setIsOpenDescription(false);
                }}
              >
                Ok, thanks
              </Button>
            </>
          )}

          <h2>Tell me more about your situation</h2>

          <h3>How old are you?</h3>
          <TextField
            id="outlined-basic"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">years old</InputAdornment>
              ),
            }}
            onChange={(event) => {
              setYourAge(event.target.value);
            }}
            fullWidth
            type="number"
          />

          {yourAge > 0 && (
            <React.Fragment>
              <h3>
                What's your monthly income from your job (that you do for
                money)?
              </h3>
              <TextField
                id="outlined-basic"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">USD</InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  setYourMonthlyIncome(event.target.value);
                }}
                fullWidth
                type="number"
              />
            </React.Fragment>
          )}

          {yourAge > 0 && yourMonthlyIncome > 0 && (
            <React.Fragment>
              <h3>How much money do you have available for investing?</h3>
              <TextField
                id="outlined-basic"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">USD</InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  setYourInvestmentCapital(event.target.value);
                }}
                fullWidth
                type="number"
              />
            </React.Fragment>
          )}

          {yourAge > 0 && yourMonthlyIncome > 0 && yourInvestmentCapital > 0 && (
            <React.Fragment>
              <h3>
                How much money do you expect to have after investing for 12
                months?
              </h3>
              <TextField
                id="outlined-basic"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">USD</InputAdornment>
                  ),
                }}
                onChange={(event) => {
                  setYourProfitExpectation(event.target.value);
                }}
                fullWidth
                type="number"
              />
            </React.Fragment>
          )}

          {yourAge > 0 &&
            yourMonthlyIncome > 0 &&
            yourInvestmentCapital > 0 &&
            yourProfitExpectation > 0 && (
              <React.Fragment>
                <h2>Ok, here're your facts...</h2>

                <p>You're {yourAge} years old.</p>
                <p>
                  You're making ${yourMonthlyIncome} per month from your job.
                </p>

                <p>You have ${yourInvestmentCapital} to invest.</p>

                <p>
                  And you want to make ${yourProfitExpectation} within the next
                  12 months from investing.
                </p>

                <h2>And, here's your situation...</h2>
                {getYourSituationDescription()}

                <h2>Now, let's play a game</h2>

                <h3>
                  Imagine your investment just went down 50% to $
                  {halfOfYourInitialCapital}. You check the news - it's all bad
                  news. Everyone you know says it will keep going down for
                  another month or so. No idea when it will go back again. How
                  much fear are you experiencing right now?
                </h3>
                <Rating
                  name="simple-controlled"
                  max={10}
                  value={questionOneValue}
                  onChange={(_, newValue) => {
                    setQuestionOneValue(newValue);
                  }}
                  size="large"
                />
              </React.Fragment>
            )}

          {yourAge > 0 &&
            yourMonthlyIncome > 0 &&
            yourInvestmentCapital > 0 &&
            yourProfitExpectation > 0 &&
            questionOneValue > 0 && (
              <React.Fragment>
                <h3>
                  Imagine your investment just went up 50% to $
                  {fiftyPercentIncreaseOfYourInitialCapital}. You check the news
                  - it's all good news. Everyone you know says it will keep
                  going up for another month or so. How much greed are you
                  experiencing right now?
                </h3>
                <Rating
                  name="simple-controlled"
                  max={10}
                  value={questionTwoValue}
                  onChange={(_, newValue) => {
                    setQuestionTwoValue(newValue);
                  }}
                  size="large"
                />
              </React.Fragment>
            )}

          {yourAge > 0 &&
            yourMonthlyIncome > 0 &&
            yourInvestmentCapital > 0 &&
            yourProfitExpectation > 0 &&
            questionOneValue > 0 &&
            questionTwoValue > 0 && (
              <React.Fragment>
                <h3>
                  Imagine it's been 5 years since you've invested. Your
                  investment didn't go anywhere. You still have $
                  {yourInvestmentCapital} invested. How much frustration are you
                  experiencing right now?
                </h3>
                <Rating
                  name="simple-controlled"
                  max={10}
                  value={questionThreeValue}
                  onChange={(_, newValue) => {
                    setQuestionThreeValue(newValue);
                  }}
                  size="large"
                />
              </React.Fragment>
            )}

          {yourAge > 0 &&
            yourMonthlyIncome > 0 &&
            yourInvestmentCapital > 0 &&
            yourProfitExpectation > 0 &&
            questionOneValue > 0 &&
            questionTwoValue > 0 &&
            questionThreeValue > 0 && (
              <React.Fragment>
                <h2>And, your risk tolerance is... {getRiskTolerance()}</h2>
                <Typography variant="p" component="div">
                  {getRiskToleranceDescription()}
                </Typography>
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

export default MeasureMyRiskTolerance;
