export const ControlledInput = (props) => {
    return <input 
        value={props.value} 
        onChange={props.onChange} 
        placeholder={props.placeholder}
    />;
}