import React from 'react'
import './menu.scss'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  useHistory,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

// Icons
import VideocamIcon from '@material-ui/icons/Videocam'
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote'
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance'
import MovieCreationIcon from '@material-ui/icons/MovieCreation'
import SettingsIcon from '@material-ui/icons/Settings'

export default function Menu() {
  const { url, path } = useRouteMatch()

  //Data from API
  const menuItems = [
    { id: 1, name: 'Cameras', icon: [`${(<VideocamIcon />)}`] },
    { id: 2, name: 'Sensors' },
    { id: 3, name: 'Cam-captures' },
    { id: 4, name: 'Videos' },
    { id: 5, name: 'Functions' },
    { id: 6, name: 'Audios' },
    { id: 7, name: 'Apps' },
    { id: 8, name: 'Analysis' },
  ]

  function MenuItem() {
    const { menuId } = useParams()
    const { url, path } = useRouteMatch()

    const menu = menuItems.find(({ id }) => id === Number(menuId))

    function icon() {
      switch (1) {
        case 1:
          return <VideocamIcon />
          break

        default:
          break
      }
    }

    return (
      <div className="menu__item">
        <div className="menu__home_btn">
          <Link to="/menu">
            <KeyboardArrowUpIcon />
          </Link>
        </div>
        <div>{menu.name}</div>
        <div>{menu.id}</div>
        <div>{icon()}</div>
      </div>
    )
  }

  return (
    <div className="menu">
      <div className="menu__home_btn">
        <Link to="/">
          <KeyboardArrowUpIcon />
        </Link>
      </div>
      <div className="menu__items">
        {menuItems.map(({ name, id }) => (
          <div key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </div>
        ))}
      </div>
      <Route path={`${path}/:menuId`}>
        <MenuItem />
      </Route>
    </div>
  )
}
