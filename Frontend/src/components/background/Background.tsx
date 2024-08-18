import "./background.css"
import '../../index.css'
interface BackgroundProps{
    children?: React.ReactNode;
    className?: string;
}

/**
 * The Background component allows to show background the size of the screen
 * @param children react nodes
 * @param className styling classes
 */
function Background({children , className}: BackgroundProps){
    return (
        <div className={`h-dvh w-dvw background_image ${className}`}>
            {children}
        </div>
    );
}

export default Background;