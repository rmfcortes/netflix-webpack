import { InputProps } from 'src/models/InputProps';
import InputDate from './InputTypes/InputDate';
import SelectWithCheckboxes from './InputTypes/InputSelect';
import InputText from './InputTypes/InputText';
import InputTextArea from './InputTypes/InputTextarea';

function Input({ type= 'text', placeholder, name, required = false }: InputProps): JSX.Element {
    switch (type) {
        case 'date':
            return <InputDate placeholder={ placeholder } name={ name }/>
        case 'select':
            return <SelectWithCheckboxes placeholder= { placeholder ?? 'Select Genre' }/>
        case 'textarea':
            return <InputTextArea placeholder= { placeholder ?? 'Select Genre' } name={ name } required= { required }/>
    
        default:
            return <InputText type={ type } placeholder={ placeholder } name={ name } required= { required }/>
    }
}

export default Input;