import { createSlice } from '@reduxjs/toolkit'
import wordlist from '../words.json'

type InitialState = {
    dataBoard: string[],
    curPos: number,
    curPosMin: number,
    curPosMax: number,
    keyWord: string,
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
    curPosMin: 0,
    curPosMax: 4,
    keyWord: wordlist.words[Math.round(Math.random() * (wordlist.words.length - 1))].toUpperCase(),
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setDataBoard: (state, action) => {
            state.dataBoard = action.payload
        },
        setNextCurPos: (state) => {
            state.curPos++
        },
        setPrevCurPos: (state) => {
            state.curPos--
        },
        setRange: (state) => {
            state.curPosMin += 5
            state.curPosMax += 5
        }
    }
})

export const { setDataBoard, setNextCurPos, setPrevCurPos, setRange } = boardSlice.actions
