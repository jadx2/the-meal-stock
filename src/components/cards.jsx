import PropTypes from 'prop-types';

const Card = (props) => {
  const { name, image } = props;

  return (
    <button type="button" className="card">
      <figure className="card-image">
        <img src={image} alt="name" />
      </figure>
      <h2>{name}</h2>
    </button>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
