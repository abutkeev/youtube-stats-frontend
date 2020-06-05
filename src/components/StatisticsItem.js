import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format'

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            paddingTop: 0,
            paddingBottom: 0,
            "&:hover": {
                backgroundColor: "transparent"
            }
        }
 }),
);

function StatisticsItem(props) {
    const classes = useStyles();
    return (
        <Button className={classes.button} startIcon={<props.icon />} disableElevation disableFocusRipple disableRipple component='div'>
                <Typography>
                    <NumberFormat value={props.value} thousandSeparator='&nbsp;' displayType='text' />
                </Typography>

        </Button>
    )
}

export default StatisticsItem