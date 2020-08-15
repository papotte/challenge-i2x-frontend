import React from 'react'
import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import store from './reducers'
import App from './App'

test('renders learn react link', () => {
  const {getByText} = render(
      <Provider store={store}>
        <App/>
      </Provider>,
  )
  const linkElement = getByText(/Start/i)
  expect(linkElement).toBeInTheDocument()
})
