
import Key from './Key'
import { keyboard } from '../ultis/contants'

const KeyBoard:React.FC = ( ) => {

    return (
        <section className='mt-8'>
            {keyboard.map(item => (
                <div key={item} className='flex justify-center gap-2 mt-3'>
                    {item.split(' ').map((item, index) => ( 
                        <Key key={item} value={item}/>
                    ))}
                </div>
            ))}
        </section>
    )
}

export default KeyBoard