import './window.css'
import WindowHeader from '../window_header/window_header'

type WindowProps = {
    title: string
    children: React.ReactNode
}

function Window(props : WindowProps) {
    const { title, children } = props
    return (
        <div className='window'>
            <WindowHeader title={title} />
            <div className='window-body'>
                {children}
            </div>
        </div>
    )
}

export default Window