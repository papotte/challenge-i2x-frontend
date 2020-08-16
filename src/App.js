import React, {Fragment} from 'react'
import FooterContainer from './containers/FooterContainer'
import ChatContainer from './containers/ChatContainer'
import ToolbarContainer from './containers/ToolbarContainer'
import HeaderContainer from './containers/HeaderContainer'

export function App() {
  return (
      <Fragment>
        <div className={'container p-6 mx-auto'}>
          <HeaderContainer/>
          <div className={'grid grid-row grid-cols-3 gap-4 mt-10'}>
            <div className={'col-span-2'}>
              <ChatContainer/>
            </div>
            <div className={'col-span-1'}>
              <ToolbarContainer/>
            </div>
          </div>
          <FooterContainer/>
        </div>
      </Fragment>
  )
}

export default App
