import { ButtonProps } from '../../models/ButtonProps';
import './Button.scss'

function Button({ className, width, text }: ButtonProps): JSX.Element {
    const classes = ` button ${className}`;
    return (
        <button style={ { width } } className={ classes }>
            { text }
        </button>
    );
}

export default Button;