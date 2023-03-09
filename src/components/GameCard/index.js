import {GameListItem, GameButton, GameButtonImage} from './styledComponents'

const GameCard = props => {
  const {gameDetails, onSelectedItem} = props
  const {imageUrl, id} = gameDetails

  const onClickItem = () => {
    onSelectedItem(id)
  }

  const altValue = `${id.toLowerCase()}Button`

  return (
    <GameListItem>
      <GameButton onClick={onClickItem}>
        <GameButtonImage src={imageUrl} alt={altValue} />
      </GameButton>
    </GameListItem>
  )
}

export default GameCard
