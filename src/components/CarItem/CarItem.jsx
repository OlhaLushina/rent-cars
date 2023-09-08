//import PropTypes from "prop-types";
import { Item } from "./CarItem.styled";

export const CarItem = ({ car }) => {
  return (
    <Item>
      {car.year} {car.model}{" "}
    </Item>
  );
};

/* Опис типів props */
/*
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
*/
