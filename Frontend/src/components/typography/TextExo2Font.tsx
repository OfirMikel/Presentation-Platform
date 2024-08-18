import "./typography.css"
interface TextExo2FontProps {
    children?: string;
    className?: string;
}

/**
 * Text with font exo 2 applied
 * @param children the text needed to enter
 * @param className the styling for the h2
 */
function TextExo2Font({ children, className}: TextExo2FontProps) {
    return <h2 className={`text-exo2 ${className}`}>{children}</h2>;
}

export default TextExo2Font;