'use client'
import React from 'react'
import { store } from '../redux/store/store'
import { Provider } from 'react-redux'

const ProviderComponent = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ProviderComponent