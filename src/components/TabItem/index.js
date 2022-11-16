// Write your code here
import './index.css'

const TabItem = props => {
  const {tabdetails, onChangeTab, isActiveTab} = props
  const {tabId, displayText} = tabdetails

  const clickToChangeTab = () => {
    onChangeTab(tabId)
  }

  const selectedClass = isActiveTab ? 'selectedListItem' : 'listItem'

  return (
    <li className={selectedClass}>
      <button
        type="button"
        onClick={clickToChangeTab}
        className={selectedClass}
      >
        {' '}
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
