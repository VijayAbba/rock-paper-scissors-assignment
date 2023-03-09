import {
  MainContainer,
  MainHeading,
  ScoreCountCard,
  ScoreCountHeading,
  ScoreCount,
} from './styledComponents'

const ScoreCard = props => {
  const {score} = props

  return (
    <MainContainer>
      <MainHeading>ROCK PAPER SCISSORS</MainHeading>
      <ScoreCountCard>
        <ScoreCountHeading>Score</ScoreCountHeading>
        <ScoreCount>{score}</ScoreCount>
      </ScoreCountCard>
    </MainContainer>
  )
}

export default ScoreCard
