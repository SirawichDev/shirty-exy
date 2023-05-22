export interface State {
  mode: string

  colors: Array<string>
  selectedColor: string
  images: Array<string>
  selectedImage: string
}

export const initialState: State = {
  mode: 'home',
  colors: ['#F47932', '#ED2828', '#222AC9', '#225DB5', '#2B3FC7', '#23A0DE'],
  selectedColor: '',
  images: ['pw-1.png', 'py-1.png'],
  selectedImage: 'pw-1.png',
}

type Action =
  | { type: 'UPDATE_MODE'; mode: string }
  | { type: 'PICK_COLOR'; color: string }
  | { type: 'PICK_LOGO'; logo: string }

export function rootReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_MODE':
      return { ...state, mode: action.mode }
    case 'PICK_COLOR':
      return { ...state, selectedColor: action.color }
    case 'PICK_LOGO':
      return { ...state, selectedImage: action.logo }
    default:
      return initialState
  }
}
