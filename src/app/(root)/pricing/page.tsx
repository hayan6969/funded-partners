'use client'
import Counter from '@/components/counter'
import { store } from '@/components/redux/store/store'
import React from 'react'
import { Provider } from 'react-redux'

function Page() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default Page
