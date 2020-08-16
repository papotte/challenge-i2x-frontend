import React, {Fragment} from 'react'
import MainContainer from './containers/MainContainer'
import ChatContainer from './containers/ChatContainer'

export function App() {
  return (
      <Fragment>
        <MainContainer/>
        <ChatContainer/>
      </Fragment>
  )
}

export default App
