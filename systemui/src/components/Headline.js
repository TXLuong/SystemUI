import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Image from '../assets/job-love-working.jpg';
import WorkIcon from '@material-ui/icons/Work';
import TimelineIcon from '@material-ui/icons/Timeline';
const useStyles = makeStyles({
  root: {
    // width: 500,
    // padding : 100,
    backgroundImage : `url(${Image})`
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const noty = () => {alert("clicked")};
  return (
     // <div backgroundImage = {classes.root.backgroundImage}>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<WorkIcon />} onClick = {noty} />
      <BottomNavigationAction label="Working history" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Time line" icon={<TimelineIcon />} />
    </BottomNavigation>
 //   </div>
  );
}
