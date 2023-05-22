'use client'
import { State, initialState, rootReducer } from '@/app/store/root.reducer'
import React, { useMemo, useReducer } from 'react'

interface RootProviderState extends State {
  switchMode: (data: string) => void
  selectColor: (data: string) => void
  selectImage: (data: string) => void
}

export const rootContext = React.createContext<RootProviderState | undefined>(
  undefined
)

export const useRoot = () => {
  const context = React.useContext(rootContext)
  if (context === undefined) {
    throw new Error(`useMode must be used within a RootProvider`)
  }
  return React.useMemo(() => context, [context])
}
rootContext.displayName = 'RootContext'

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('providerrr')
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const switchMode = (data: string) =>
    dispatch({ type: 'UPDATE_MODE', mode: data })
  const selectColor = (data: string) =>
    dispatch({ type: 'PICK_COLOR', color: data })
  const selectImage = (data: string) =>
    dispatch({ type: 'PICK_LOGO', logo: data })
  const value = useMemo(
    () => ({
      ...state,
      switchMode,
      selectColor,
      selectImage,
    }),
    [state]
  )
  return <rootContext.Provider value={value}>{children}</rootContext.Provider>
}
