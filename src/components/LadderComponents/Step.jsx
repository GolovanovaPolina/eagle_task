const  Step = ({level}) => {
    const left = level * 50;
    const bottom = level * 30;

    return <div className="play__step" style={{left, bottom}}>
        {level}
    </div>
}

export default Step;