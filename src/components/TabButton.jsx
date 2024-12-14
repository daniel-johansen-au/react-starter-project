export default ({children, onSelect}) => {
    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}