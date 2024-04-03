import { motion } from 'framer-motion'

type Props = {
    value: string,
    background: string,
}

const Box:React.FC<Props> = ( props ) => {
    const variants = {
        fill: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2
            }
        }),
        unfill: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2
            }
        })
    }
    const { value, background } = props

    return (
        <motion.div 
            animate={value ? 'fill' : 'unfill'} 
            variants={variants}
        >
            <div
                className={`w-[50px] h-[50px] border-[2px] border-white flex items-center justify-center text-3xl text-white mt-1 ${background}`}
            >{value}</div>
        </motion.div>
    )
}

export default Box