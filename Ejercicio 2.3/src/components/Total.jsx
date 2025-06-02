const Total = (props) => {
    const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    return (
        <div>
            <h2>total of exercises {total}</h2>
        </div>
    );
}

export default Total;
