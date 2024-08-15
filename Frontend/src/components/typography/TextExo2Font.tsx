import "./typography.css"
interface TextExo2FontProps {
    children?: string;
    className?: string;
}
function TextExo2Font({ children, className}: TextExo2FontProps) {
    return <h2 className={`text-exo2 ${className}`}>{children}</h2>;
}

export default TextExo2Font;