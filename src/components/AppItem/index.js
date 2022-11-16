// Write your code here

import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appId, appName, imageUrl, category} = appItemDetails

  return (
    <li className="appListItem">
      <img src={imageUrl} alt={appName} className="appIcon" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
