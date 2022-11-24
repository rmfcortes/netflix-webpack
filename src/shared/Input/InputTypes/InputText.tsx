import { Field } from 'formik';
import '../Input.scss';

interface InputTextProps { 
    name: string;
    placeholder?: string;
    type?: 'text' | 'number' | 'url';
    required: boolean;
}

function InputText({ placeholder, type='text', name, required }: InputTextProps): JSX.Element {
    return (
        <Field type={ type } className='input-field' placeholder={ placeholder } name={ name } required={ required }/>
    )
}

export default InputText;