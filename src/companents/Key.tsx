import { useSelector, useDispatch  } from 'react-redux'

import { RootState } from '../store/store'
import { setDataBoard, setNextCurPos, setPrevCurPos, setRange } from '../store/boardSlice'
import wordlist from '../words.json'

type Props = {
    value: string,
}

const Key:React.FC<Props> = ( props ) => {
    const { value } = props
    const { dataBoard, curPos, curPosMin, curPosMax, keyWord } = useSelector((state:RootState) => state.board)
    const dispatch = useDispatch()

    const handleSetBoard = () => {
        const newArray = [...dataBoard]

        if (value === 'Back') {
            if (curPos > curPosMin) {
                newArray[curPos - 1] = ''
                dispatch(setDataBoard(newArray))
                dispatch(setPrevCurPos())
            }
        } else if (value === 'Enter') {
            if (dataBoard[curPosMax] === '') return
            
            let curWord = ''
            for (let i = curPosMin; i <= curPosMax; i++) {
                curWord += dataBoard[i]
            }

            if (!(wordlist.words.includes(curWord.toLowerCase()))) {
                alert('Invalid word')
                return
            }

            dispatch(setRange())
            
            if (curWord === keyWord) {
                setTimeout(() => {
                    alert('You are win. Keyword ' + keyWord)
                    window.location.reload()
                }, 1000)
            } else if (curPos === dataBoard.length) {
                setTimeout(() => {
                    alert('You are lose. Keyword ' + keyWord)
                    window.location.reload()
                }, 1000)
            }

        } else {
            if(curPos >= curPosMin && curPos <= curPosMax && curPos <= dataBoard.length - 1) {
                newArray[curPos] = value
                dispatch(setDataBoard(newArray))
                dispatch(setNextCurPos())
            }
        }
    }

    return (
        <button
            className="px-2 py-1 bg-gray-500 text-white rounded-md min-w-7"
            onClick={handleSetBoard}
        >{value}</button>
    )
}

export default Key