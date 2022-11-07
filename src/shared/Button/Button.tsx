import './Button.scss'
interface ButtonProps {
    text: string;
    width: string;
    floatRight?: boolean;
    className: 'btn-secondary' | 'btn-primary' | 'btn-outline';
    handleClick?: React.MouseEventHandler;
}

function Button({ className, width, text, floatRight = false, handleClick }: ButtonProps): JSX.Element {
    const classes = ` button ${className}`;
    const styles = {
        width,
        'marginLeft': floatRight ? `calc(100% - ${width})` : '0'
    };
    return (
        <button style={ styles } className={ classes } onClick={ handleClick }>
            { text }
        </button>
    );
}

export default Button;