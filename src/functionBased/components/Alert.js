import PropTypes from 'prop-types';

const Alert = (props) => {
  const { hidden } = props;
  const classes = ['alert', 'alert-warning', 'text-center'];
  if (hidden) classes.push('d-none');
  return (
    <div className={classes.join(' ')} role="alert">
      Please write item
    </div>
  );
};

Alert.propTypes = {
  hidden: PropTypes.bool.isRequired,
};

export default Alert;
