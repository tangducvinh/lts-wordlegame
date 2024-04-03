import { useSelector } from 'react-redux'

import Box from './Box'
import { RootState } from '../store/store'

const Content:React.FC = () => {
    const board = useSelector((state:RootState) => state.board.dataBoard)
    const {curPosMin, keyWord } = useSelector((state:RootState) => state.board)

    return (
        <section className='mx-auto grid grid-cols-5 grid-rows-6 w-[280px] mt-8'>
            {board.map((item, index) => (
                <Box 
                    value={item} 
                    key={index}
                    background={keyWord?.split('').some((el, number) => (el === item && number === (index % 5) && index < curPosMin)) ? 'bg-green-500 animate-flip' : keyWord?.split('').some((el) => ((el) === item  && index < curPosMin)) ? 'bg-yellow-500 animate-flip' : index < curPosMin ? 'bg-gray-700 animate-flip' : ''}
                />
            ))}
        </section>
    )
}

export default Content