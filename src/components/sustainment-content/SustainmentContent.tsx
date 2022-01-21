import { useState, useEffect } from 'react';
import { withStyles } from '@mui/styles';

import { Grid, Card, CardContent, CardActions, Button, Typography, Box, TextField } from '@mui/material';
import { PartDetails, partData } from '../../model/commonModel';
const styles = {
    root: {},
    cardRoot: {
        padding: '10px', border: '1px solid #e1e1e1', minWidth: '100%', display: 'flex',
        'flex-direction': 'column'
    },
    cardContainer: { width: 550, height: 450, backgroundColor: '#f1f1f1', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, fontWeight: 400, color: '#c1c1c1','align-self': 'center' },
    cardContainerFull: {
        width: 1120, height: 390, backgroundColor: '#f1f1f1', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, fontWeight: 400, color: '#c1c1c1', 'align-self': 'center'
    },
    dropdown: {
        fontSize: '12px !important',
        padding: '4px 5px !important',
        borderRadius: '2px !important',
        background: 'linear-gradient(180deg, rgba(0,131,131,1) 0%, rgba(0,26,26,1) 112%)'
    },
    dropdownWraper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1.5rem'
    },
    dataLabel: {
        padding: '6px 16px',
        color: '#ffffff',
        fontWeight: 500,
        fontSize: '12px !important',
        'text-align': 'center',
        lineHeight: '1.75',
        letterSpacing: '0.02857em'
    },
    inputStyle: {
        fontSize: '14px !important',
        lineHeight: '16px !important'
    },
    gridstyle: {
        overflow: 'auto !important',

    }
}

function SustainmentContent(props: any) {
    const { classes } = props;
    const [state, setState] = useState({ ...props.selectedPart });
    useEffect(() => {
        setState(props.selectedPart);
    }, [props.selectedPart])


    const predictedActual = (selectedPart: PartDetails) => {
        const data = {
            moda: { predicted: '', actual: '' },
            mtbi: { predicted: '', actual: '' },
            smr_code: { predicted: '', actual: '' },
            mttr: { predicted: '', actual: '' },
            drt: { predicted: '', actual: '' },
            rtat: { predicted: '', actual: '' },
            mc_rate: { predicted: '', actual: '' },
            nmc_rate: { predicted: '', actual: '' },
            bit_coverage: { predicted: '', actual: '' },
            am: { predicted: '', actual: '' },
            ao: { predicted: '', actual: '' },
            dmsm: { predicted: '', actual: '' },
            ...selectedPart.data
        };
        return (
            <Grid container spacing={1}>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}></Grid>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>Predicted</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>Actual</Box>
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>MODA</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.moda.predicted}
                            name="moda"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.moda.actual}
                            name="moda"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>MTBI</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.mtbi.predicted}
                            name="mtbi"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.mtbi.actual}
                            name="mtbi"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>SMR Code</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.smr_code.predicted}
                            name="smr_code"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.smr_code.actual}
                            name="smr_code"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>MTTR</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.mttr.predicted}
                            name="mttr"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.mttr.actual}
                            name="mttr"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>DRT</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.drt.predicted}
                            name="drt"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.drt.actual}
                            name="drt"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>RTAT</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.rtat.predicted}
                            name="rtat"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.rtat.actual}
                            name="rtat"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>MC Rate</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.mc_rate.predicted}
                            name="mc_rate"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.mc_rate.actual}
                            name="mc_rate"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>NMC Rate</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.nmc_rate.predicted}
                            name="nmc_rate"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.nmc_rate.actual}
                            name="nmc_rate"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>BIT Coverage</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.bit_coverage.predicted}
                            name="bit_coverage"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.bit_coverage.actual}
                            name="bit_coverage"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>Am</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.am.predicted}
                            name="am"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.am.actual}
                            name="am"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>Ao</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.ao.predicted}
                            name="ao"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.ao.actual}
                            name="ao"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item container spacing={4} xs={12}>
                    <Grid item spacing={4} xs={4}>
                        <Box className={`${classes.dataLabel} gradient-background`}>DMSMS</Box>
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.dmsm.predicted}
                            name="dmsm"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                    <Grid item spacing={4} xs={4}>
                        <TextField
                            className={classes.w100}
                            size="small"
                            variant="outlined"
                            value={data.dmsm.actual}
                            name="dmsm"
                            InputProps={{
                                className: classes.inputStyle
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

    return (
        <div className={classes.root}>
            {state.data ? (<Grid container spacing={4}>
                <Grid item spacing={4} xs={12} sm={12} md={6} sx={{ overflow: 'auto' }}>
                    {
                        predictedActual(state)
                    }
                </Grid>
                <Grid item spacing={4} xs={12} sm={12} md={6} className={classes.gridstyle} >
                    <Card className={classes.cardRoot} sx={{ width: 550 }}>
                        <div className={classes.cardContainer}> 550 x 450</div>
                        {/* <CardMedia
                            component="img"
                            alt="green iguana"
                            height="520"
                            width="570"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        /> */}
                        <CardContent>
                            <Typography variant="h5" component="div">Fixed Title</Typography>
                            <Typography variant="body2" >
                                Description
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button variant="contained">Button</Button>
                            <Button variant="outlined" sx={{ ml: 1 }}>Button</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item spacing={4} xs={12} className={classes.gridstyle} >
                    <Card className={classes.cardRoot} sx={{ width: 1120 }}>
                        <div className={classes.cardContainerFull}> 1120 X 390 </div>
                        {/* <CardMedia
                            component="img"
                            alt="green iguana"
                            height="520"
                            width="570"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        /> */}
                        <CardContent>
                            <Typography variant="h5" component="div">Fixed Title</Typography>
                            <Typography variant="body2" >
                                Description
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button variant="contained">Button</Button>
                            <Button variant="outlined" sx={{ ml: 1 }}>Button</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>) : null}
        </div>
    )
}

export default withStyles(styles)(SustainmentContent);
