import './Button.scss'
interface ButtonProps {
    text: string;
    width: string;
    floatRight?: boolean;
    className: 'btn-secondary' | 'btn-primary' | 'btn-outline';
    handleClick?: React.MouseEventHandler;
    type?: 'submit' | 'reset' | 'button';
}

function Button({ className, width, text, floatRight = false, handleClick, type='button' }: ButtonProps): JSX.Element {
    const classes = ` button ${className}`;
    const styles = {
        width,
        'marginLeft': floatRight ? `calc(100% - ${width})` : '0'
    };
    return (
        <button type={ type } style={ styles } className={ classes } onClick={ handleClick }>
            { text }
        </button>
    );
}

export default Button;