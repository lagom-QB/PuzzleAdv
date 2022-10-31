import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { puzzle } from "jigsaw-puzzle";

// import "../ComponentStyles/Puzzle.module.css";
import styled from "styled-components";

import { useAboutQuery } from "./fetchers/About";

// Styles ------
const AboutText = styled.h2`
    font-size: 1.6rem;
    font-weight: 150;
    line-height: 2.5rem;
    white-space: pre-wrap;
    overflow: visible;
  `,
  HeroContext = styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 3rem;
    margin: 5% 10%;
  `,
  RulesContainer = styled.div`
    transform: scale(0.7);
  `,
  Container = styled.div`
    /* margin: auto; */
    color: white;
    /* overflow-y: scroll; */
    -ms-overflow-style: none;
    scrollbar-width: none;
    /* &::-webkit-scrollbar {
      display: none;
    }
    &::-ms-scrollbar {
      display: none;
    } */
    max-width: 100vw;
    max-height: 80vh;
  `;

const GridContainer = styled.div`
    transform: scale(0.7);
  `,
  GridLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80vh;
  `,
  Card = styled.a`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
    &:hover,
    &:focus,
    &:active {
      color: rgb(192, 188, 188, 0.5);
      border-color: rgb(192, 188, 188, 0.5);
      cursor: pointer;
    }
    h2 {
      margin: 0 0 1rem 0;
      font-size: 1.5rem;
    }
    p {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1.5;
    }
  `;
const GameSection = styled.div`
    padding: 0;
    margin: 0;
    transform: scale(0.7);
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `,
  GameContainer = styled.div`
    /* background: rgba(16, 16, 16, 0.5); */
    border-radius: 0.2%;
    margin: 0 auto;
    padding: 0;
    width: 70vw;
    margin-bottom: 0%;
  `,
  ResetContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 60vw;
    max-height: 20vh;
    margin: 0 auto;
    /* background: green; */
    margin-top: 0.4rem;
  `,
  GameButton = styled.div`
    margin: 0 auto;
    padding: 0.7rem;
    text-align: center;
    color: inherit;
    font-weight: 100;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    transition: color 0.15s ease, border-color 0.15s ease;
    width: fit-content;
    line-height: 0rem;
    transform: scaleY(0.8);
    &:hover,
    &:focus,
    &:active {
      color: rgb(192, 188, 188, 0.5);
      border-color: rgb(192, 188, 188, 0.5);
      cursor: pointer;
    }
  `,
  Jigsaw = styled.div`
    width: 60vw;
    height: 60vh;
    touch-action: auto;
    margin: 0 auto;
    canvas:not(:first-child) {
      display: none;
    }
    canvas:first-child {
      /* overflow: hidden; */
      background-color: rgba(16, 16, 16, 1);
      z-index: 1;
    }
  `,
  SideBySide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    height: 87vh;
  `,
  HintImg = styled.div`
    transform: scale(0.1);
    width: 2rem;
    opacity: 0.2;
    &:hover {
      transform: scale(0.4);
      opacity: 1;
      transition: transform 0.5s ease;
    }
  `;
// -------------
function GamesText() {
  const { loading, error, data } = useAboutQuery();

  let allAboutMes = [];

  if (loading) {
    <pre>Loading...</pre>;
  }
  if (error) {
    <pre>An Error occured while fetching the data</pre>;
  }
  if (data) {
    data.aboutMes.forEach((aboutMe) => {
      if (aboutMe.sectionName === "Juegos") {
        allAboutMes.push(aboutMe.aboutUs);
      }
    });
  }
  //   console.log(allAboutMes[0]?.split("\n"));

  return (
    <RulesContainer>
      <HeroContext style={{ textDecoration: "underline" }}>Juegos</HeroContext>
      <AboutText>{allAboutMes[0]?.split("\n").join("\u000A")}</AboutText>
    </RulesContainer>
  );
} //✅

function GameSelected() {
  let [variableDiff, setVariableDiff] = useContext(PageContext);
  let gameImg = "https://source.unsplash.com/random/800x800/?img=1";
  const [message, setMessage] = useState("Build the Puzzle"),
    [hintText, setHintText] = useState("Hint Off"),
    [showComponent, setShowComponent] = useState(false),
    [showHint, setShowHint] = useState(false),
    [pu, setPu] = useState(null),
    [gameStats, setGameStats] = useState([null, null, null]);

  const memorizedCallback = useCallback(async () => {
    const p = await puzzle({
      element: "#puzzle",
      image: gameImg,
      pieces: {
        x: variableDiff === 1 ? 3 : variableDiff === 2 ? 5 : 7,
        y: variableDiff === 1 ? 3 : variableDiff === 2 ? 5 : 7,
      },
      attraction: 20, // distance to snap pieces
      aligned: true, // don't overlap pieces on start
      zoom: 0.6, // initial zoom of context
      beforeInit: (canvas) => {},
      onInit: (state) => {
        p.centralize();
      },
      onChange: (state) => {},
      onComplete: (state) => {
        winnerMessage();
        const results = [
          state.puzzle.moves,
          state.puzzle.startTime,
          new Date().toLocaleTimeString("en-US"),
        ];
        setGameStats(results);
        console.log(
          "onComplete",
          state,
          state.puzzle.moves,
          state.puzzle.startTime,
          results,
          gameStats
        );
        p.destroy();
      },
    });
    setPu(p);
  }, []);

  useEffect(() => {
    memorizedCallback();
  }, []);

  const handleClickEvent = () => {
    // alert("Resetting");
    setVariableDiff(0);
  }; //✅
  const winnerMessage = () => {
    console.log("Game over");
    setMessage("You Won!");
  };
  const handleHintClickEvent = () => {
    setShowHint(!showHint);
    setHintText(showHint ? "Hint Off" : "Hint On");
  };

  /* -------------------- */
  return (
    <GameSection>
      <HeroContext style={{ margin: "0 auto", color: "rgb(255, 255, 255)" }}>
        {message}
      </HeroContext>

      {showComponent ? (
        <GameyGame />
      ) : (
        <>
          <GameContainer>
            <h3 style={{ opacity: 0.2 }}>
              {variableDiff === 1 ? 3 : variableDiff === 2 ? 5 : 7}x
              {variableDiff === 1 ? 3 : variableDiff === 2 ? 5 : 7}
            </h3>
            <SideBySide>
              <Jigsaw
                id="puzzle"
                style={{ width: "60%", height: 700, backgroundColor: "grey" }}
              />
              {showHint ? (
                <HintImg>
                  <img src={gameImg} alt="game" />
                </HintImg>
              ) : null}
            </SideBySide>
          </GameContainer>
          <ResetContainer>
            <GameButton onClick={handleHintClickEvent}>
              <h5>{hintText}</h5>
            </GameButton>
            <GameButton onClick={handleClickEvent}>
              <h5>Reset</h5>
            </GameButton>
          </ResetContainer>
        </>
      )}
    </GameSection>
  );
}

function LoadGameDifficulties() {
  const [variableDiff, setVariableDiff] = useContext(PageContext);

  const changeDifficulty = (difficultyLevel) => {
    setVariableDiff(0);
    setVariableDiff(difficultyLevel);
    // alert("changed Difficulty level: " + variableDiff);
  };

  return (
    <GridContainer>
      <GridLayout>
        <Card onClick={() => changeDifficulty(1)}>
          <h2>Easy</h2>
        </Card>
        <Card onClick={() => changeDifficulty(2)}>
          <h2>Medium</h2>
        </Card>
        <Card onClick={() => changeDifficulty(3)}>
          <h2>Hard</h2>
        </Card>
      </GridLayout>
    </GridContainer>
  );
} //✅
function GameyGame() {
  const [showComponentGG, setShowComponentGG] = useState(false);
  const handleClickEvent = () => {
    setShowComponentGG(!showComponentGG);
  };
  return (
    <GridContainer>
      <GridLayout>
        <Card onClick={handleClickEvent}>
          <h2>Start Game &rarr;</h2>
          <p>Pick game difficulty.</p>
        </Card>
        {showComponentGG ? <LoadGameDifficulties /> : null}
      </GridLayout>
    </GridContainer>
  );
} //✅
// --------------
const PageContext = createContext();

function GamesContent() {
  const [difficulty, setDifficulty] = useState(0);
  return (
    <Container>
      <PageContext.Provider value={[difficulty, setDifficulty]}>
        {difficulty > 0 ? (
          <GameSelected />
        ) : (
          <>
            <GamesText />
            <GameyGame />
          </>
        )}
      </PageContext.Provider>
    </Container>
  );
}
export default GamesContent;
