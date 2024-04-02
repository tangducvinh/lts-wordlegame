import { useSelector } from 'react-redux'

import Box from './Box'
import { RootState } from '../store/store'


const Content:React.FC = () => {
    const board = useSelector((state:RootState) => state.board.dataBoard)

    return (
        <section className='mx-auto grid grid-cols-5 grid-rows-6 w-[280px] mt-8'>
            {board.map((item, index) => (
                <Box value={item} key={index}/>
            ))}
        </section>
    )
}

export default Content