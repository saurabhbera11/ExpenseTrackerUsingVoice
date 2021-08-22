import React, { useEffect, useRef } from 'react'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import { Grid } from '@material-ui/core'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'
import useStyles from './styles';
import { SpeechState, useSpeechContext } from '@speechly/react-client'
const App = () => {
    const classes = useStyles();
    const { speechState } = useSpeechContext();
    const main = useRef(null);
    const executeScroll = () => main.current.scrollIntoView();
    useEffect(() => {
        if (speechState === SpeechState.Recording) {
            executeScroll();
        }
    }, [speechState])
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '40vh', }} >
                <Grid item xs={12} sm={4} className={classes.mobile}> <Details title='Income' className={classes.mobile} /> </Grid>
                <Grid ref={main} item xs={12} sm={3} className={classes.main}> <Main></Main> </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop}> <Details title='Income' className={classes.mobile} /> </Grid>
                <Grid item xs={12} sm={4} className={classes.last}> <Details title='Expense' /> </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App
