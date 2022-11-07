import '../Input.scss';

interface InputTextProps { 
    placeholder?: string;
    type?: 'text' | 'number' | 'url';
    value: string | number;
}

function InputText({ placeholder, type='text', value }: InputTextProps): JSX.Element {
    return (
        <input type={ type } className='input-field' placeholder={ placeholder } defaultValue={ value }/>
    )
}

export default InputText;