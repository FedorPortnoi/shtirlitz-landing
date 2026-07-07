'use client'
import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import type { CheckType } from '@/app/translations'

type TourContextType = {
  checkType: CheckType
  setCheckType: (t: CheckType) => void
  subject: string
  setSubject: (n: string) => void
  inn: string
  setInn: (i: string) => void
  outcomeIndex: number
  runToken: number
  startRun: (outcomeIndex: number) => void
}

const TourContext = createContext<TourContextType>({
  checkType: 'person',
  setCheckType: () => {},
  subject: '',
  setSubject: () => {},
  inn: '',
  setInn: () => {},
  outcomeIndex: 0,
  runToken: 0,
  startRun: () => {},
})

export function TourProvider({ children }: { children: ReactNode }) {
  const [checkType, setCheckType] = useState<CheckType>('person')
  const [subject, setSubject] = useState('')
  const [inn, setInn] = useState('')
  const [outcomeIndex, setOutcomeIndex] = useState(0)
  const [runToken, setRunToken] = useState(0)

  const startRun = useCallback((idx: number) => {
    setOutcomeIndex(idx)
    setRunToken(t => t + 1)
  }, [])

  return (
    <TourContext.Provider value={{ checkType, setCheckType, subject, setSubject, inn, setInn, outcomeIndex, runToken, startRun }}>
      {children}
    </TourContext.Provider>
  )
}

export function useTour() {
  return useContext(TourContext)
}
