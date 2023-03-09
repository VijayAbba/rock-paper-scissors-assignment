import {
  ResultCardContainer,
  SelectionCard,
  SelectorHeading,
  SelectedImage,
  PlayAgainButton,
  GameStatus,
} from './styledComponents'

const ResultCard = props => {
  const {
    gameDetails,
    indexOfYou,
    indexOfOpponent,
    onPlayAgain,
    gameStatesText,
  } = props

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <>
      <ResultCardContainer>
        <SelectionCard>
          <SelectorHeading className="">YOU</SelectorHeading>
          <SelectedImage
            src={gameDetails[indexOfYou].imageUrl}
            alt="your choice"
          />
        </SelectionCard>
        <SelectionCard>
          <SelectorHeading className="">OPPONENT</SelectorHeading>
          <SelectedImage
            src={gameDetails[indexOfOpponent].imageUrl}
            alt="opponent choice"
          />
        </SelectionCard>
      </ResultCardContainer>
      <GameStatus>{gameStatesText}</GameStatus>
      <PlayAgainButton onClick={onClickPlayAgain}>Play Again</PlayAgainButton>
    </>
  )
}

export default ResultCard
