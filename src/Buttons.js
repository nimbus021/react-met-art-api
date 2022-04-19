

function Buttons(){
    return(
        <div>
            <button onClick={() => props.handleIterate(-5)}>Way Back</button>
            <button onClick={() => props.handleIterate(-1)}>Back</button>
            <button onClick={() => props.handleIterate(1)}>Next</button>
            <button onClick={() => props.handleIterate(-5)}>Big Next</button>

        </div>
    )
}

export default Buttons