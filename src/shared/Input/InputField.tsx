import { InputFieldProps } from 'src/models/InputProps';
import Input from './Input';
import './InputField.scss';

function InputField({ label, placeholder, type='text', width= '100%', value='' }: InputFieldProps): JSX.Element {
    return (
        <li style={ { width, zIndex: type === 'select' ? 1 : 'initial' } }>
            <label htmlFor={ label } className="input-label"> { label} </label>
            <Input type={ type } placeholder={ placeholder } value={ value }/>
        </li>
    );
}

export default InputField;