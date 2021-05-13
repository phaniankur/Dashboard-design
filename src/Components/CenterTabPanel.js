import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Tracker from './Tracker'


const useStyles = makeStyles({
root: {
    flexGrow: 1,
},
});

export default function CenteredTabs() {
const classes = useStyles();
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};


return (
<BrowserRouter>
    <Paper className={classes.root}>
    <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
    >
        <Tab label="Track Order" component={Link} to="/one"/>
        <Tab label="Media Files" component={Link} to="/two" />
        <Tab label="Subscriptions" component={Link} to="/three"/>
        
    </Tabs>
    <Switch>
            <Route path="/one" component={ItemOne} />
            <Route path="/two" component={ItemTwo} />
            <Route path="/three" component={ItemThree} />
        </Switch>
    </Paper>
    </BrowserRouter>
    
);
}

function ItemOne() {
    return (
    <Paper>
        <Tracker/>
    </Paper>
    );
}

function ItemTwo() {
    return (
    <Paper>
        <div>Item two</div>
    </Paper>
    );
}
function ItemThree() {
    return (
    <Paper>
        <div>Item three</div>
    </Paper>
    );
}