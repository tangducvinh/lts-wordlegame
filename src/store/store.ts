import { configureStore } from "@reduxjs/toolkit"

import { boardSlice } from "./boardSlice"

export const store = configureStore({
    reducer: {
        board: boardSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>