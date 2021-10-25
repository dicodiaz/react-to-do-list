import PropTypes from 'prop-types';

const Alert = (props) => {
  const { hiddenProps } = props;
  const classes = ['alert', 'alert-warning'];
  if (hiddenProps) classes.push('d-none');
  return (
    <div className={classes.join(' ')} role="alert">
      Please write item
    </div>
  );
};

Alert.propTypes = {
  hiddenProps: PropTypes.bool.isRequired,
};

export default Alert;
