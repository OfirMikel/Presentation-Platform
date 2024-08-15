import "./background.css"
import '../../index.css'
interface BackgroundProps{
    children?: React.ReactNode;
    className?: string;
}

function Background({children , className}: BackgroundProps){
    return (
        <div className={`h-dvh w-dvw background_image ${className}`}>
            {children}
        </div>
    );
}

export default Background;