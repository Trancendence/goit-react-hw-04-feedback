import PropTypes from 'prop-types';
import { Component } from "react";
import css from './Statistic.module.css';

export class Statistic extends Component {
    render (){
        const props = this.props;
    return (
        <>
        <h1 className={css.Statistic}> Statistic </h1>

        <p className={css.Stattext}>Good: {props.good}</p>
        <p className={css.Stattext}>Neutral: {props.neutral}</p>
        <p className={css.Stattext}>Bad: {props.bad}</p>
        <p className={css.Stattext}>Total: {props.total}</p>
        {props.total > 0 && (  <p className={css.Stattext}>Positive feedback: {props.positivePercentage} %</p> 
      )}
        </>
    ); 
    }
}


Statistic.propTypes = {
    props:  PropTypes.objectOf(PropTypes.string),
}