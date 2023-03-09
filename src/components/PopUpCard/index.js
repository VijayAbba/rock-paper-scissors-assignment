import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import {
  RulesButton,
  PopUpCardContainer,
  PopUpImg,
  CloseButton,
} from './styledComponents'

const PopUpCard = () => (
  <Popup
    modal
    trigger={
      <RulesButton type="button" className="trigger-button">
        Rules
      </RulesButton>
    }
  >
    {close => (
      <PopUpCardContainer>
        <CloseButton
          type="button"
          className="trigger-button"
          onClick={() => close()}
        >
          <RiCloseLine size={20} />
        </CloseButton>
        <PopUpImg
          className=""
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopUpCardContainer>
    )}
  </Popup>
)

export default PopUpCard
