import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    cardClassName: 'dark-mode-card',
    btnClassName: 'dark-mode-button',
    btnText: 'Light Mode',
    titleClassName: 'dark-mode-title',
  }

  changeMode = () => {
    this.setState(prevState => {
      const {cardClassName} = prevState

      if (cardClassName === 'dark-mode-card') {
        return {
          cardClassName: 'light-mode-card',
          btnClassName: 'light-mode-button',
          btnText: 'Dark Mode',
          titleClassName: 'light-mode-title',
        }
      }
      return {
        cardClassName: 'dark-mode-card',
        btnClassName: 'dark-mode-button',
        btnText: 'Light Mode',
        titleClassName: 'dark-mode-title',
      }
    })
  }

  render() {
    const {cardClassName, btnClassName, btnText, titleClassName} = this.state
    return (
      <div className="container">
        <div className={` ${cardClassName} card-container`}>
          <h1 className={`${titleClassName} title`}>Click To Change Mode</h1>
          <button
            className={`${btnClassName} button`}
            onClick={this.changeMode}
            type="button"
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
