import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { name, image, endPoint } = props;

  return (
    <Link to={endPoint} className="card">
      <figure className="card-image">
        <img src={image} alt="name" />
      </figure>
      <h2>{name}</h2>
    </Link>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  endPoint: PropTypes.string.isRequired,
};

export default Card;
