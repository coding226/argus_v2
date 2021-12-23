import { useState } from 'react';

import { TextField, IconButton, Paper, Grid, Select, MenuItem, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from '@mui/styles';
import { PartDetails } from '../../model/commonModel';

import screenImg from '../../assets/image/screensimg.png';
import mockData from '../../data/mockData';

const styles: any = {
    root: {
        display: 'flex',
        padding: '1rem 0'
    },
    searchWraper: {
        position: 'relative',
        boxShadow: 'none !important',
        display: 'flex'
    },
    searchInput: {
        flexGrow: 1
    },
    inputText: {
        fontSize: '12px !important',
        '.MuiInputBase-input': {
            fontSize: '12px !important',
        }
    },
    searchIcon: {
        padding: '2px !important',
        position: 'absolute !important',
        right: 0,
        zIndex: 111,
        transform: 'rotate(90deg)'
    },
    w100: {
        width: '100%'
    },
    imageWraper: {

    },
    filterButton: {
        borderRadius: '0 !important',
        'text-transform': 'none !important',
        fontSize: '12px !important',
        width: '100%'
    }
};


function SustainmentFilter(props: any) {
    const [partNo, setPartNo] = useState('');
    const [selectedPart, setSelectedPart] = useState<PartDetails>({});
    const [state, setState] = useState({ serialNumber: '', lotNumber: '', nomenclature: '', configuration: '', part: '' });

    const classes = props.classes;

    function partSearchUpdate(e: any) {
        const value = e.target.value;
        if (value.trim() !== '') {
            setPartNo(value)
        } else {
            setPartNo('')
        }

    }

    function searchClick(e: any) {
        let selectedObj: any = mockData.find(d => d.partNumber === partNo)
        if (selectedObj) {
            setSelectedPart(selectedObj);
            const { configuration, part, nomenclature } = selectedObj;
            setState(prevState => ({ ...prevState, configuration, part, nomenclature }));
            props.onPartSelected(selectedObj)
        } else {
            setSelectedPart({})
            props.onPartSelected({})
        }
    }

    function getSerialNoItem(selectedPart: PartDetails) {
        return selectedPart.serial_numbers ? selectedPart.serial_numbers.map((item: number) => (<MenuItem value={item}>{item}</MenuItem>)) : null;
    }
    function getLotNoItem(selectedPart: PartDetails) {
        return selectedPart.lot_number_id ? selectedPart.lot_number_id.map((item: number) => (<MenuItem value={item}>{item}</MenuItem>)) : null;
    }
    function onchangeInput(e: any) {
        let { value, name } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item container spacing={2} xs={4}>
                    <Grid item xs={12}>
                        <Paper
                            component="div"
                            className={classes.searchWraper}
                        >
                            <TextField
                                size="small"
                                placeholder="Part Number"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                variant="outlined"
                                value={partNo}
                                className={`${classes.searchInput} ${classes.inputText}`}
                                onChange={partSearchUpdate}
                            />
                            <IconButton type="submit" className={classes.searchIcon} aria-label="search" size="small" onClick={searchClick}>
                                <SearchIcon fontSize="large" color="primary" />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={`${classes.w100} ${classes.inputText}`}
                            size="small"
                            variant="outlined"
                            placeholder="Variant/Configuration"
                            value={state.configuration}
                            name="configuration"
                            onChange={onchangeInput}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            displayEmpty
                            value={state.serialNumber}
                            name="serialNumber"
                            className={`${classes.w100} ${classes.inputText}`}
                            size="small"
                            placeholder="Serial Number"
                            inputProps={{ 'aria-label': 'Without label' }}
                            onChange={onchangeInput}
                        >
                            <MenuItem value="">Serial Number</MenuItem>
                            {
                                getSerialNoItem(selectedPart)
                            }
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            displayEmpty
                            className={`${classes.w100} ${classes.inputText}`}
                            value={state.lotNumber}
                            name="lotNumber"
                            size="small"
                            placeholder="Lot Number"
                            inputProps={{ 'aria-label': 'Without label' }}
                            onChange={onchangeInput}

                        >
                            <MenuItem value="">Lot Number</MenuItem>
                            {
                                getLotNoItem(selectedPart)
                            }
                        </Select>
                    </Grid>
                </Grid>
                <Grid item container columnSpacing={1} rowSpacing={1} xs={4} >
                    <Grid item xs={6} sx={{height: 46}}>
                        <Button variant="contained" className={`gradient-background ${classes.filterButton}`}>Tech Ops Support</Button>
                    </Grid>
                    <Grid item xs={6} sx={{height: 46}}>
                        <Button variant="contained" className={`gradient-background ${classes.filterButton}`}>ILS Data</Button>
                    </Grid>
                    <Grid item xs={6} sx={{height: 46}}>
                        <Button variant="contained" className={`gradient-background ${classes.filterButton}`}>Speciality Engineering Data</Button>
                    </Grid>
                    <Grid item xs={6} sx={{height: 46}}>
                        <Button variant="contained" className={`gradient-background ${classes.filterButton}`}>Hazard Data</Button>
                    </Grid>
                    <Grid item xs={12} sx={{height: 46}}></Grid>
                    <Grid item xs={12} sx={{height: 46}}></Grid>
                </Grid>
                <Grid item spacing={2} xs={4}>
                    <div className={classes.imageWraper}>
                        <img src={screenImg} className="" />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(SustainmentFilter);