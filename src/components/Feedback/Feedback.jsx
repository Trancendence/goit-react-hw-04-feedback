import PropTypes from 'prop-types';

import { Component } from "react";
import css from './Feedback.module.css';


export class Feedback extends Component {

        render(){
         const { options } = this.props; 
             return (

             <div className={css.buttonGroup}>
              {options.map(el => {
                return (
                  <button className = {css.button} type="submit" key={el} onClick={() => this.props.onLeaveFeedback(el)}>
                    {el}
                  </button>
                );
              })}
            </div>
        );
      };
}



Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
