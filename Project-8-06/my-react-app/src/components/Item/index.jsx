
export const Item = (props: {title, description, price}) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <span>{props.price}</span>
        </div>
    )
}