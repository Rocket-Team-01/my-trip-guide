import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ListGroup } from "react-bootstrap";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appbar">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="My Favorites" {...a11yProps(0)} />
          <Tab label="My Wishlist" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ListGroup>
            <ListGroup.Item action className="toggle">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action className="toggle">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action className="toggle">
              This one is a button
            </ListGroup.Item>
          </ListGroup>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ListGroup>
            <ListGroup.Item action className="toggle">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action className="toggle">
              Link 2
            </ListGroup.Item>
            <ListGroup.Item action className="toggle">
              This one is a button
            </ListGroup.Item>
          </ListGroup>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
