import {Component} from 'react'

import {MainContainer, GameContainer, RulesCard} from './styledComponents'

import ScoreCard from '../ScoreCard'
import PopUpCard from '../PopUpCard'
import GameCard from '../GameCard'
import ResultCard from '../ResultCard'

class RockPaperScissor extends Component {
  state = {
    score: 0,
    isPlaying: true,
    you: 'ROCK',
    opponent: 'PAPER',
    gameStatus: '',
  }

  renderGameContainer = () => {
    const {gameDetails} = this.props
    return (
      <GameContainer>
        {gameDetails.map(eachItem => (
          <GameCard
            gameDetails={eachItem}
            key={eachItem.id}
            onSelectedItem={this.onSelectedItem}
          />
        ))}
      </GameContainer>
    )
  }

  getIndexOfElement = id => {
    const {gameDetails} = this.props

    const findIndexOfId = element => element.id === id

    return gameDetails.findIndex(findIndexOfId)
  }

  onPlayAgain = () => {
    this.setState({isPlaying: true})
  }

  //   ROCK
  // SCISSORS
  // PAPER

  gameStatus = (Item1, Item2) => {
    if (Item1 === 'ROCK') {
      switch (Item2) {
        case 'ROCK':
          return 'TIE'
        case 'SCISSORS':
          return 'YOU WON'
        case 'PAPER':
          return 'YOU LOST'
        default:
          return null
      }
    } else if (Item1 === 'SCISSORS') {
      switch (Item2) {
        case 'SCISSORS':
          return 'TIE'
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOST'
        default:
          return null
      }
    } else if (Item1 === 'PAPER') {
      switch (Item2) {
        case 'PAPER':
          return 'TIE'
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOST'
        default:
          return null
      }
    }
    return null
  }

  onSelectedItem = id => {
    const {gameDetails} = this.props

    const opponent = gameDetails[Math.floor(Math.random() * 3)].id

    const gameStatesText = this.gameStatus(id, opponent)
    console.log(gameStatesText)
    switch (gameStatesText) {
      case 'TIE':
        this.setState({
          isPlaying: false,
          you: id,
          opponent,
          gameStatus: gameStatesText,
        })
        break
      case 'YOU WON':
        this.setState(preStat => ({
          score: preStat.score + 1,
          isPlaying: false,
          you: id,
          opponent,
          gameStatus: gameStatesText,
        }))
        break
      case 'YOU LOST':
        this.setState(preStat => ({
          score: preStat.score - 1,
          isPlaying: false,
          you: id,
          opponent,
          gameStatus: gameStatesText,
        }))
        break
      default:
        break
    }

    // this.setState({isPlaying: false, you: id, opponent: opponent})
  }

  renderResultCard = () => {
    const {you, opponent, gameStatus} = this.state
    const {gameDetails} = this.props

    const indexOfYou = this.getIndexOfElement(you)
    const indexOfOpponent = this.getIndexOfElement(opponent)

    return (
      <ResultCard
        gameDetails={gameDetails}
        indexOfYou={indexOfYou}
        indexOfOpponent={indexOfOpponent}
        onPlayAgain={this.onPlayAgain}
        gameStatesText={gameStatus}
      />
    )
  }

  render() {
    const {score, isPlaying} = this.state

    return (
      <MainContainer>
        <ScoreCard score={score} />
        {isPlaying ? this.renderGameContainer() : this.renderResultCard()}
        <RulesCard>
          <PopUpCard />
        </RulesCard>
      </MainContainer>
    )
  }
}

export default RockPaperScissor
