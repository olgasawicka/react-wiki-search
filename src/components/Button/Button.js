import React from "react";
import PropTypes from "prop-types";
import ButtonStyled from "./ButtonStyled";

const Button = ({ type, children, onClick, disabled }) => {
  return (
    <ButtonStyled type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

const { string, func, bool } = PropTypes;

Button.propTypes = {
  type: string,
  onClick: func,
  disabled: bool,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
  disabled: false,
};

export default Button;
