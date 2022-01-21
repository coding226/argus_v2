import { useState } from 'react';
import './Filter.css';

import { TextField, IconButton, Paper, Grid, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles } from '@mui/styles';
import { PartDetails } from '../../model/commonModel';

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
    inputText: {
        fontSize: '12px !important',
        lineHeight: '16px !important'
    },
    inputStyle: {
      fontSize: '14px !important',
      lineHeight: '16px !important'
    }
};


function Filter(props: any) {
    const [partNo, setPartNo] = useState('');
    const [selectedPart, setSelectedPart] = useState<PartDetails>({});
    const [state, setState] = useState({serialNumber: '', lotNumber: '', nomenclature: '', configuration: '', part: ''});

    const classes = props.classes;
    /**
     * @def State Update
     * @param e Event Object
     */
    function partSearchUpdate(e: any) {
        const value = e.target.value;
        if (value.trim() !== '') {
            setPartNo(value)
        } else {
            setPartNo('')
        }

    }
    /**
     * @def Select Object by part no.
     * @param e Event Object
     */
    function searchClick(e: any) {
        let selectedObj: any = mockData.find(d => d.partNumber === partNo)
        if (selectedObj) {
            setSelectedPart(selectedObj);
            const {configuration, part, nomenclature} = selectedObj;
            setState(prevState => ({ ...prevState, configuration, part, nomenclature }));
            props.onPartSelected(selectedObj)
        } else {
            setSelectedPart({})
            props.onPartSelected({})
        }
    }
    /**
     * 
     * @param selectedPart Selected Object by part no.
     * @returns JSX for dropdown.
     */
    function getSerialNoItem(selectedPart: PartDetails) {
        return selectedPart.serial_numbers ? selectedPart.serial_numbers.map((item: number, index) => (<MenuItem value={item} key={index}>{item}</MenuItem>)) : null;
    }
    /**
     * 
     * @param selectedPart Selected Object by part no.
     * @returns JSX for dropdown.
     */
    function getLotNoItem(selectedPart: PartDetails) {
        return selectedPart.lot_number_id ? selectedPart.lot_number_id.map((item: number, index) => (<MenuItem value={item} key={index}>{item}</MenuItem>)) : null;
    }
    /**
     * @def set data into state
     * @param e Event object
     */
    function onchangeInput(e:any){
        let {value, name} = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
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
                            className={classes.searchInput}
                            InputProps={{
                                className: classes.inputStyle
                            }}
                            onChange={partSearchUpdate}
                        />
                        <IconButton type="submit" className={classes.searchIcon} aria-label="search" size="small" onClick={searchClick}>
                            <SearchIcon fontSize="large" color="primary" />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
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
                <Grid item xs={12} sm={6} md={4}>
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
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        className={`${classes.w100} ${classes.inputText}`}
                        size="small"
                        variant="outlined"
                        placeholder="Nomenclature"
                        value={state.nomenclature}
                        name="nomenclature"
                        onChange={onchangeInput}                        
                        InputProps={{
                            className: classes.inputStyle
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        className={`${classes.w100} ${classes.inputText}`}
                        size="small"
                        variant="outlined"
                        placeholder="Configuration"
                        value={state.configuration}
                        name="configuration"
                        onChange={onchangeInput}
                        InputProps={{
                            className: classes.inputStyle
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        className={`${classes.w100} ${classes.inputText}`}
                        size="small"
                        variant="outlined"
                        placeholder="Make/Buy Part"
                        value={state.part}
                        name="part"
                        onChange={onchangeInput}
                        InputProps={{
                            className: classes.inputStyle
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles)(Filter);