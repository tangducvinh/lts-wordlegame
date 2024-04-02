
type Props = {
    value: string
}

const Box:React.FC<Props> = ( props ) => {
    const { value } = props
    return (
        <div className="w-[50px] h-[50px] border-[2px] border-white flex items-center justify-center text-3xl text-white mt-1">{value}</div>
    )
}

export default Box