import React from "react";
import ReactDOM from "react-dom";
import {
  Typography,
  Button,
  Switch,
  Paper,
  Input,
  Box,
  FormControl,
  InputLabel,
  IconButton,
  Select,
  MenuItem,
  Chip,
  TextField,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Grid
} from "@material-ui/core";

import {
  ThemeProvider,
  createMuiTheme,
  makeStyles
} from "@material-ui/core/styles";

import BatteryFullOutlined from "@material-ui/icons/BatteryFullOutlined";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#303030"
  },
  paperHighlight: {
    backgroundColor: "#005FAB",
    color: "#FFFFFF",
    padding: "4px"
  },

  paperLiveExt: {
    color: "#FFFFFF",
    textAlign: "center",
    backgroundColor: "#303030",
    paddingBottom: "5px"
  },
  paperLivetext: {
    color: "#739EBF"
  },
  paperLiveInt: {
    color: "#DFDFDF",
    textAlign: "center",
    paddingLeft: "4px",
    paddingRight: "4px",
    backgroundColor: "#303030"
  },

  paperLight: {
    padding: "4px",
    textAlign: "center",
    backgroundColor: "#303030",
    borderColor: "red"
  },
  blanksheetConnected: {
    textAlign: "center",
    color: "#739EBF",
    backgroundColor: "#303030",
    padding: "7px"
  },
  blanksheetScanning: {
    textAlign: "center",
    color: "#005FAB",
    padding: "7px",
    backgroundColor: "#91BFA2"
  },
  text: {
    color: "#9BD3FF"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    borderRadius: "4px",
    borderWidth: "8px",
    borderColor: "red",
    boxShadow: "0px 2px 2px",
    backgroundColor: "#353F48",
    "&:hover": {
      outlineColor: "blue",
      outlineWidth: "6px",
      boxShadow: "0px 3px 3px"
    },

    "& .MuiSelect-select": {
      color: "#9BD3FF"
    },

    "& .MuiSelect-outlined": {
      borderColor: "red",
      borderWidth: "8px"
    },

    "& .MuiInputLabel-formControl": {
      color: "#9BD3FF",
      backgroundColor: "#353F48",
      paddingLeft: "5px",
      paddingRight: "5px",
      borderRadius: "4px",
      borderWidth: "10px"
    }
  },
  selectFormControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    borderRadius: "4px",
    borderWidth: "8px",
    borderColor: "red",
    boxShadow: "0px 2px 2px",
    backgroundColor: "#353F48",
    "&:hover": {
      outlineColor: "blue",
      outlineWidth: "6px",
      boxShadow: "0px 3px 3px"
    },

    "& .MuiSelect-outlined": {
      borderColor: "red",
      borderWidth: "8px"
    },

    "& .MuiInputLabel-formControl": {
      paddingLeft: "5px",
      paddingRight: "5px",
      borderRadius: "4px",
      borderWidth: "10px",
      color: "#005FAB"
    },

    "& .MuiSelect-select": {
      color: "#9BD3FF"
    }
  },
  icon: {
    fill: "#9BD3FF"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  green: {
    backgroundColor: "#5CE361",
    margin: theme.spacing(0.5)
  },
  yellow: {
    backgroundColor: "#E2D758",
    margin: theme.spacing(0.5)
  },
  red: {
    backgroundColor: "#D14F4F",
    margin: theme.spacing(0.5)
  },
  grey: {
    backgroundColor: "#DBDBDB",
    margin: theme.spacing(0.5)
  },
  textWhite: {
    color: "#FFFFFF",
    margin: "5%"
  },
  chipColorDefault: {
    backgroundColor: "#DBDBDB",
    margin: "10px"
  },
  chipColorSelect: {
    backgroundColor: "#9BD3FF",
    margin: "10px"
  },
  formControlWhite: {
    margin: theme.spacing(1),
    minWidth: 120,
    borderRadius: "4px",
    borderWidth: "8px",
    boxShadow: "0px 2px 2px",
    backgroundColor: "#FFFFFF",

    "& .MuiSelect-outlined": {
      borderWidth: "8px"
    },

    "& .MuiInputLabel-formControl": {
      paddingLeft: "5px",
      paddingRight: "5px",
      borderRadius: "4px",
      borderWidth: "10px",
      color: "#005FAB"
    },

    "& .MuiSelect-select": {
      color: "#9BD3FF"
    }
  },
  mapButton: {
    color: "#000000",
    backgroundColor: "#9BD3FF",
    marginLeft: "5px"
  },
  locateButton: {
    color: "#9BD3FF",
    backgroundColor: "#353f48"
  },
  titleText: {
    color: "#9BD3FF"
  },
  titleTextSub: {
    color: "#DBDBDB80"
  },
  backButton: {
    color: "#9BD3FF95",
    float: "right"
  },
  beaconCard: {
    maxWidth: 120,
    minHeight: 120,
    backgroundColor: "#5CE361"
  },
  beaconCardDist: {
    padding: "4px",
    backgroundColor: "#DBDBDB80"
  }
}));

function App(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <h5>DONT DO HERE, WE WILL HAVE A CARD</h5>
      </Grid>
      <Paper className={classes.paper}>
        <Grid container item xs={12}>
          <Grid container direction="column">
            <Grid container direction="row" alignItems="center">
              <Grid container item xs={2}>
                <Paper className={classes.red}>
                  <FaceIcon />
                </Paper>
              </Grid>
              <Grid container item xs={10}>
                <Typography variant="h6" className={classes.titleText}>
                  Title (Tool or Person)
                </Typography>
              </Grid>
              <Grid container item>
                <Typography variant="caption" className={classes.titleTextSub}>
                  Beacon# and last connect user
                </Typography>
                <Grid container item>
                  <Typography variant="body2" className={classes.textWhite}>
                    Additional Info and notes
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid container item xs={3}>
            <Button variant="contained" className={classes.locateButton}>
              Locate
            </Button>
          </Grid>
          <Grid container item xs={3} className={classes.paperLiveInt}>
            <BatteryFullOutlined />
            <Typography> 1.6v </Typography>
          </Grid>
          <Grid container item xs={3}>
            <Button variant="outlined" className={classes.backButton}>
              Back
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.beaconCard}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          wrap="nowrap"
        >
          <Grid item xs={12} zeroMinWidth>
            <Typography noWrap align="center" variant="h6">
              Perrien, A
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FaceIcon style={{ fontSize: 50 }} />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.beaconCardDist}>
              <Typography align="center" variant="subtitle2">
                120
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
