import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    marginRight: "-600px",
    marginLeft: "380px",
    width: "auto"
  }
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
