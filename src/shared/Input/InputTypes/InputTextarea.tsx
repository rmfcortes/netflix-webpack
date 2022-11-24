import { Field } from 'formik';
import './InputTextarea.scss'
import '../Input.scss';

function InputTextArea({ placeholder, name, required }: { placeholder?: string, name: string, required: boolean }): JSX.Element {
    const CustomInputTextarea = (field: any): JSX.Element => (
        <textarea className='input-field textarea' placeholder={ placeholder } { ...field } required={ required }/>
    );
    
    return (
        <Field name={ name } as={ CustomInputTextarea }/>
    )
}

export default InputTextArea;