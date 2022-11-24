import Button from 'Shared/Button/Button';
import './ResetSubmitButtons.scss';

function ResetSubmitButtons(): JSX.Element {
    return (
        <div className='reset-submit-btns-container'>
            <Button className='btn-outline' text='Reset' width='182px' type='reset'></Button>
            <div style={ { width: '13px'} }></div>
            <Button className='btn-primary' text='Submit' width='180px' type='submit'></Button>
        </div>
    );
}

export default ResetSubmitButtons;