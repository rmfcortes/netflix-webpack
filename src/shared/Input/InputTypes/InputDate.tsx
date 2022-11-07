import '../Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

function InputDate({ placeholder='Select Date', value='' }: { placeholder?: string, value?: string}): JSX.Element {
    const showPicker = (): void => {
        const inputDate = document.getElementById('inputDate') as HTMLInputElement;
         inputDate.showPicker();
    }
    return (
        <div style={{ position: 'relative' }}>
            <input 
                id="inputDate"
                type='date'
                className='input-field'
                defaultValue={ value }
                placeholder={ placeholder }
                onClick={ showPicker }
                required
            />
            <FontAwesomeIcon className='input__icon' icon={ faCalendar } />
        </div>
    )
}

export default InputDate;