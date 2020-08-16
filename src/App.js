import React, {Fragment} from 'react'
import FooterContainer from './containers/FooterContainer'
import ChatContainer from './containers/ChatContainer'
import ToolbarContainer from './containers/ToolbarContainer'
import HeaderContainer from './containers/HeaderContainer'

export function App() {
  return (
      <Fragment>
        <HeaderContainer/>
        <ToolbarContainer/>
        <ChatContainer/>
        <FooterContainer/>
      </Fragment>
  )
}

export default App
