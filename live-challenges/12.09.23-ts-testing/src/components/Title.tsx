type TitleProps = {
    title: string
    className?: string
}

export default function Title(props: TitleProps) {
const {title, className} = props
    return <h1 className={className}>{title}</h1>
}