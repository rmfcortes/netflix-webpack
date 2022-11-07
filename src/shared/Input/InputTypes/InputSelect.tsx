import { useState } from 'react';
import './InputSelect.scss'
import '../Input.scss';
import OutsideAlerter from 'src/hooks/OutsideAlerter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-regular-svg-icons';

function SelectWithCheckboxes({ placeholder }: { placeholder: string }): JSX.Element {
    const [expanded, setExpanded] = useState(false);

    function toogleCheckboxes(): void {
        const checkboxes = document.getElementById('checkboxes') as HTMLInputElement;
        console.log(`expanded`, expanded);
        if (!expanded) {
          checkboxes.style.display = 'block';
          setExpanded(true);
        } else {
          hideCheckBoxes();
        }
    }

    function hideCheckBoxes(): void {
        const checkboxes = document.getElementById('checkboxes') as HTMLInputElement;
        checkboxes.style.display = 'none';
        setExpanded(false);
    }

    return(
        <OutsideAlerter handler={ expanded ? hideCheckBoxes : () => {} }>
            <div className="input-field select-container">
            <div className="selectBox" onClick={ toogleCheckboxes }>
                <select className="input-field">
                    <option>{ placeholder }</option>
                </select>
                <div className="overSelect"></div>
                <FontAwesomeIcon className='input__icon' icon={ faCaretSquareDown } />
            </div>
                <div id="checkboxes">
                    <label htmlFor="one">
                    <input type="checkbox" id="one" />First checkbox</label>
                    <label htmlFor="two">
                    <input type="checkbox" id="two" />Second checkbox</label>
                    <label htmlFor="three">
                    <input type="checkbox" id="three" />Third checkbox</label>
                </div>
            </div>
        </OutsideAlerter>
    );
}

export default SelectWithCheckboxes;