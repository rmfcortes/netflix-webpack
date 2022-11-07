import './InputTextarea.scss'
import '../Input.scss';

function InputTextArea({ placeholder, value='' }: { placeholder?: string, value?: string }): JSX.Element {
    return (
        <textarea className='input-field textarea' placeholder={ placeholder } defaultValue={ value }/>
    )
}

export default InputTextArea;