import PropTypes from 'prop-types';
import css from './Feedback.module.css';


export const Feedback = ({ options, onLeaveFeedback }) => {

        const elements = Object.keys(options);
             return (

             <div className={css.buttonGroup}>
              {elements.map(el => {
                return (
                  <button className = {css.button} type="submit" key={el} onClick={() => onLeaveFeedback(el)}>
                    {el}
                  </button>
                );
              })}
            </div>
        );
      }


Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
