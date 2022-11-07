import { InputProps } from 'src/models/InputProps';
import InputDate from './InputTypes/InputDate';
import SelectWithCheckboxes from './InputTypes/InputSelect';
import InputText from './InputTypes/InputText';
import InputTextArea from './InputTypes/InputTextarea';

function Input({ type= 'text', placeholder, value= '' }: InputProps): JSX.Element {
    switch (type) {
        case 'date':
            return <InputDate placeholder={ placeholder } value={ value.toString() }/>
        case 'select':
            return <SelectWithCheckboxes placeholder= { placeholder ?? 'Select Genre' }/>
        case 'textarea':
            return <InputTextArea placeholder= { placeholder ?? 'Select Genre' } value={ value.toString() }/>
    
        default:
            return <InputText type={ type } placeholder={ placeholder } value={ value }/>
    }
}

export default Input;