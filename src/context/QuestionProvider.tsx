import * as React from 'react'
import { UserT } from './types'

export type QuestionT = {
  id: string
  type: 'scale' | 'text' | 'multipleChoice'
  required: boolean
  label: string
  options?: {
    label: string
    value: number
  }[]
}

type SetQuestionsT = {
  action: 'set'
  payload: Array<QuestionT>
}
type SetFieldUser = {
  action: 'fieldUser'
  payload: null
}

type Action = SetQuestionsT | SetFieldUser

type State = {
  currentFieldUser: UserT | null
  questions: QuestionT[] | null
}

type DispatchQuestionContextT = any

export const DispatchQuestionContext =
  React.createContext<DispatchQuestionContextT | null>(null)
export const QuestionContext = React.createContext<State>({} as State)

const initialState = {
  currentFieldUser: null,
  questions: [],
}

const reducer = (state: State, update: Action): State => {
  if (update.action === 'set') {
    return {
      ...state,
      questions: update.payload,
    }
  }

  if (update.action === 'fieldUser') {
    return {
      ...state,
      currentFieldUser: update.payload,
    }
  }

  return state
}

const UIProvider = ({ children }: { children: React.ReactNode }): any => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  console.log('questions', state)

  return (
    <DispatchQuestionContext.Provider value={dispatch}>
      <QuestionContext.Provider value={state}>
        {children}
      </QuestionContext.Provider>
    </DispatchQuestionContext.Provider>
  )
}

export default UIProvider
