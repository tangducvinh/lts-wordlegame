import { createSlice } from '@reduxjs/toolkit'

type InitialState = {
    dataBoard: string[],
    curPos: number,
}

const initialState:InitialState = {
    dataBoard: [
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '',
        '', '', '', '', '', 
    ],
    curPos: 0,
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setDataBoard: (state, action) => {
            // const currentIndex = state.dataBoard.indexOf('')
            // const value = action.payload
            
            // if (value === 'Back') {
            //     if (currentIndex === -1) {
            //         state.dataBoard[state.dataBoard.length - 1] = ''
            //     } else {
            //         state.dataBoard[currentIndex - 1] = ''
            //     }
            // } else if (value === 'Enter') {
            //     console.log('enter')
            // } else {
            //     if (currentIndex <= state.dataBoard.length - 1 && currentIndex !== -1) {
            //         state.dataBoard[currentIndex] = value
            //     }
            // }
            state.dataBoard = action.payload
        },
        setNextCurPos: (state) => {
            state.curPos++;
        },
        setPrevCurPos: (state) => {
            state.curPos--;
        }
    }
})

export const { setDataBoard, setNextCurPos, setPrevCurPos } = boardSlice.actions
