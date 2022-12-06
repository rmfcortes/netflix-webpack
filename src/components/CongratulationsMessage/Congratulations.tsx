import SuccessImg from 'src/assets/img/Success.png';
import './Congratulations.scss';

function Congratulations(): JSX.Element {
    return (
        <>
            <img src={SuccessImg} alt="Congratulations icon" className='congratulations__icon' />
            <h2 className='congratulations__header'>CONGRATULATIONS !</h2>
            <p className='congratulations__paragraph'>The movie has been added to database successfully</p>
        </>
    );
}

export default Congratulations;