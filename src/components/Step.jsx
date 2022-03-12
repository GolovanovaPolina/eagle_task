const  Step = ({level}) => {
    const left = level*50;
    const bottom = level*20;

    return <div style={{
        position: "absolute",
        left,
        bottom,
        borderTop: "3px solid black",
        borderLeft: "3px solid black",
        width: "50px",
        height: "20px"
    }}>
        {level+1}
    </div>
}

export default Step;