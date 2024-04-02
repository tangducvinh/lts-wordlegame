import { Dispatch, SetStateAction } from 'react'
import { useSelector, useDispatch  } from 'react-redux'

import { RootState } from '../store/store'
import { setDataBoard, setNextCurPos, setPrevCurPos } from '../store/boardSlice'

type Props = {
    value: string,
}

const Key:React.FC<Props> = ( props ) => {
    const { value } = props
    const { dataBoard, curPos } = useSelector((state:RootState) => state.board)
    const dispatch = useDispatch()

    const handleSetBoard = () => {
        const newArray = [...dataBoard]

        if (value === 'Back') {
            if (curPos > 0) {
                newArray[curPos - 1] = ''
                dispatch(setDataBoard(newArray))
                dispatch(setPrevCurPos())
            }
        } else if (value === 'Enter') {

        } else {
            if(curPos <= dataBoard.length - 1) {
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