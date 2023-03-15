import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({ good,neutral,bad,total,positivePercentage}) => {

    return (
        <>
        <h1 className={css.Statistic}> Statistic </h1>

        <p className={css.Stattext}>Good: {good}</p>
        <p className={css.Stattext}>Neutral: {neutral}</p>
        <p className={css.Stattext}>Bad: {bad}</p>
        <p className={css.Stattext}>Total: {total}</p>
        {total > 0 && (  <p className={css.Stattext}>Positive feedback: {positivePercentage} %</p> 
      )}
        </>
    ); 
    }



Statistic.propTypes = {
    props:  PropTypes.objectOf(PropTypes.string),
}