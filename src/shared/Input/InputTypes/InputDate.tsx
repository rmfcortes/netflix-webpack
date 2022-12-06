import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import '../Input.scss';

function InputDate({ placeholder='Select Date', name }: { placeholder?: string, name: string}): JSX.Element {
    const showPicker = (): void => {
        const inputDate = document.getElementById('inputDate') as HTMLInputElement;
         inputDate.showPicker();
    }
    return (
        <div style={{ position: 'relative' }}>
            <Field 
                id="inputDate"
                type='date'
                className='input-field'
                name={ name }
                placeholder={ placeholder }
                required
            />
            <FontAwesomeIcon className='input__icon' onClick={ showPicker } icon={ faCalendar } />
        </div>
    )
}

export default InputDate;