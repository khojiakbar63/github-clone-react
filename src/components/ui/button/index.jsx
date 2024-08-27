import "./style.scss"

export const Button = ({text, type, className, eventType}) => {
    return (
        <button onClick={()=>eventType ? eventType() : null} className={className && className} type={type && type}>
            {text ? text : 'Button'}
        </button>
    );
};

