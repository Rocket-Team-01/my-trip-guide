import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import CodeIcon from "@material-ui/icons/Code";
import DoneIcon from "@material-ui/icons/Done";
import Zoom from "react-reveal/Zoom";
import "../css/CustomizedTimeline.css";
import { LanguageContext } from "../context/LanguageContext";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();
  const languageContextAPI = React.useContext(LanguageContext);
  
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <ContactSupportIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Zoom>
            <Card className={(classes.root, "grow")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {languageContextAPI.t("about.1")}
                  </Typography>
                  <Typography variant="body2" component="p">
                  {languageContextAPI.t("about.2")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Zoom>
            <Card className={(classes.root, "grow")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image="https://images.pexels.com/photos/5907574/pexels-photo-5907574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {languageContextAPI.t("about.3")}
                  </Typography>
                  <Typography variant="body2" component="p">
                  {languageContextAPI.t("about.4")}
                  </Typography>
                  <img
                    width="48"
                    src="https://cdn.auth0.com/blog/react-js/react.png"
                  />
                  <img
                    width="48"
                    src="https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
                  />
                  <img
                    width="40"
                    src="https://img.icons8.com/color/452/material-ui.png"
                  />
                  <img
                    width="44"
                    src="https://gblobscdn.gitbook.com/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?alt=media"
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <DoneIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Zoom>
            <Card className={(classes.root, "grow")}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="300"
                  image="https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {languageContextAPI.t("about.5")}
                  </Typography>
                  <Typography variant="body2" component="p">
                  {languageContextAPI.t("about.6")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
