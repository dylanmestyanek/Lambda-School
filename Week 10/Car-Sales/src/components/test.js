
const List = props => {
    return (
        <div>
            <button onClick={() => props.addName('Chris')}></button>
            {
                props.names.map(name => {
                    return <div>{name}</div>
                })
            }
        </div>
    )
}
