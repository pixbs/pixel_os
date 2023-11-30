import './window_header.css'

type WindowHeaderProps = {
    title: string
}

function WindowHeader(props : WindowHeaderProps) {
    const { title } = props
    const Stripes = () => (
        <div className='stripes'>
            <hr className='row'/>
            <hr className='row'/>
            <hr className='row'/>
        </div>
    
    )
    return (
        <div className='window-header'>
            <Stripes/>
            <h2>
                {title}
            </h2>
            <Stripes/>
        </div>
    )
}

export default WindowHeader