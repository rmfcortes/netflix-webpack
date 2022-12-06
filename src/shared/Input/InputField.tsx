import { InputFieldProps } from 'src/models/InputProps';
import Input from './Input';
import './InputField.scss';

function InputField({ label, placeholder, type='text', width= '100%', name, required = false }: InputFieldProps): JSX.Element {
    return (
        <li style={ { width, zIndex: type === 'select' ? 1 : 'initial' } }>
            <label htmlFor={ name } className="input-label"> { label} </label>
            <Input type={ type } placeholder={ placeholder } name={ name } required={ required }/>
        </li>
    );
}

export default InputField;