import { useParams } from "react-router-dom";

function Slide() {
    const { title, page } = useParams();

    // Use the title and slideId to fetch or display the corresponding slide details
    return (
        <div>
            <h1>Presentation: {title}</h1>
            <h2>PageNumber: {page}</h2>
            {/* Slide content goes here */}
        </div>
    );
}

export default Slide;