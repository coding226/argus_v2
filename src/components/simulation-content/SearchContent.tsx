import { useState, useEffect } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Grid, Card, CardContent, CardActions, Button, Typography, Container } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PartDetails } from '../../model/commonModel';
const useStyle = makeStyles((theme: any) =>
    createStyles({
        root: {},
        cardRoot: {
            padding: '10px', border: '1px solid #e1e1e1', width: '570px !important', minWidth: '100%', display: 'flex',
            'flex-direction': 'column'
        },
        cardContainer: { width: 570, height: 520, backgroundColor: '#f1f1f1', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 24, fontWeight: 400, color: '#c1c1c1', 'align-self': 'center' },
        dropdown: {
            fontSize: '12px !important',
            padding: '4px 5px !important',
            borderRadius: '2px !important',
            background: 'linear-gradient(180deg, rgba(0,131,131,1) 0%, rgba(0,26,26,1) 112%)',
            marginRight: '22px !important',
            marginBottom: '2px !important',
        },
        dropdownWraper: {
            display: 'flex',
            marginBottom: '1.5rem',
            'flex-wrap': 'wrap',
            justifyContent: 'flex-start',
        }
    })
);
const theme = createTheme();
function SearchContent(props: any) {
    const classes = useStyle();
    const [state, setState] = useState({ ...props.selectedPart });
    useEffect(() => {
        setState(props.selectedPart);
    }, [props.selectedPart])
    /**
     * @def Card design
     * @param selectedPart Selected Part Object
     * @returns JSX for Card block
     */
    const creatCard = (selectedPart: PartDetails) => {
        if (selectedPart.product) {
            return selectedPart.product.map((item: any, index) => (
                <Grid item xs={12} sm={12} md={6} key={index} sx={{ overflow: 'auto' }}>
                    <Card className={classes.cardRoot}>
                        <div className={classes.cardContainer}> 570 x 520</div>
                        {/* <CardMedia
                            component="img"
                            alt="green iguana"
                            height="520"
                            width="570"
                            image="/static/images/cards/contemplative-reptile.jpg"
                        /> */}
                        <CardContent>
                            <Typography variant="h5" component="div">{item.name}</Typography>
                            <Typography variant="body2" >
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button variant="contained">Button</Button>
                            <Button variant="outlined" sx={{ ml: 1 }}>Button</Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
        } else {
            return null;
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                {state.product ? (<div className={classes.dropdownWraper}>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        disableElevation
                        endIcon={<KeyboardArrowDownIcon />}
                        className={classes.dropdown}
                        sx={{ textTransform: 'none' }}
                    >
                        Hardware Requirment List HRL
                    </Button>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        disableElevation
                        endIcon={<KeyboardArrowDownIcon />}
                        className={classes.dropdown}
                        sx={{ textTransform: 'none' }}
                    >
                        Cost Bill of Matarial CBOM
                    </Button>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        disableElevation
                        endIcon={<KeyboardArrowDownIcon />}
                        className={classes.dropdown}
                        sx={{ textTransform: 'none' }}
                    >
                        Engineering Bill of Matarial EBOM
                    </Button>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        disableElevation
                        endIcon={<KeyboardArrowDownIcon />}
                        className={classes.dropdown}
                        sx={{ textTransform: 'none' }}
                    >
                        Manufacturaing Bill of Matarial MBOM
                    </Button>
                    <Button
                        id="demo-customized-button"
                        aria-controls="demo-customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        disableElevation
                        endIcon={<KeyboardArrowDownIcon />}
                        className={classes.dropdown}
                        sx={{ textTransform: 'none' }}
                    >
                        Sustainment Bill of Matarial SBOM
                    </Button>
                </div>) : null
                }

                <Grid container spacing={4} >
                    {creatCard(state)}
                </Grid>

            </div>
        </ThemeProvider>
    )
}

export default SearchContent;

