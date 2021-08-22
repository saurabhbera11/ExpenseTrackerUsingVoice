import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form'
import List from './LIst/List'
import { ExpenseTrackerContext } from '../../context/context'
const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
            <CardContent>
                <Typography align='center' variant='h5'>
                    Total Balance {balance}Rs
                </Typography>
                <Typography variant='subtitle2' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* Infocard */}
                    Try saying:Add income for 100Rs in Caregory Salary for Monday...
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
