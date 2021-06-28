import React, { useState } from 'react';
import GridItem from '../../components/Grid/GridItem';
import {
    Container,
    Grid,
    makeStyles,
    CircularProgress,
    Backdrop,
    Typography,
    ThemeProvider,
    createMuiTheme,
    MenuItem,
    TextField,
    Button,
    TableContainer, 
    TableHead,
    Divider,

} from '@material-ui/core';
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell"
import Paper from '@material-ui/core/Paper';

import { useNavigate } from 'react-router';
import { orange } from '@material-ui/core/colors';
import GridContainer from '../../components/Grid/GridContainer';



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
    },
    customTableContainer: {
        overflowX: "initial"
    },

    tableCell: {
        Width: 100,
    },
    head: {
        backgroundColor: "#FFA93F",
        position: "sticky",
        top: 0,
        color: '#fff',
       
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#FF8000',
        color: '#fff',
        "&:hover": {
            backgroundColor: "#c55100"
        }
    },

}));
const theme = createMuiTheme({
    palette: {
        primary: orange,
    },
});

export default function OpenOrders() {

    const classes = useStyles();
    let navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const closeLoader = () => {
        setOpen(false);
    };
    const toggleLoader = () => {
        setOpen(!open);
    };
    return (
        <Container>
            <Container maxWidth={false}>
                <GridItem xs={12} sm={12} md={12}>
                    <Typography className={classes.title}> Users </Typography>
                    <ThemeProvider theme={theme}>
                        <GridContainer>
                            <Table className={classes.table}>
                                      <TableBody>
                                          <TableRow>
                                              <TableCell>
                                                  <Typography variant="h6" gutterBottom className={classes.titleColor}>Sr No.</Typography>
                                              </TableCell>
                                              <TableCell >
                                                  <Typography variant="h6" gutterBottom className={classes.titleColor}>Name</Typography>
                                              </TableCell>
                                              <TableCell >
                                                  <Typography variant="h6" gutterBottom className={classes.titleColor}>Mobile No</Typography>
                                              </TableCell>
                                              <TableCell >
                                                  <Typography variant="h6" gutterBottom className={classes.titleColor}>Email</Typography>
                                              </TableCell>
                                              <TableCell >
                                                  <Typography variant="h6" gutterBottom className={classes.titleColor}>Site</Typography>
                                              </TableCell>
                                              <TableCell >
                                                  <Typography variant="h6" gutterBottom className={classes.titleColor}>Role</Typography>
                                              </TableCell>
                                              </TableRow>
                                    
                                        <TableRow  className={classes.tableRow}>
                                            <TableCell >
                                                <Typography variant="body1" gutterBottom>1</Typography>
                                            </TableCell>
                                            <TableCell >
                                                <Typography variant="body1" gutterBottom>Rahul Chaudhari</Typography>
                                            </TableCell>
                                            <TableCell >
                                                <Typography variant="body1" gutterBottom>7219755821</Typography>
                                            </TableCell>
                                            <TableCell >
                                                <Typography variant="body1" gutterBottom>rs@gmail.com</Typography>
                                            </TableCell>
                                            <TableCell >
                                                <Typography variant="body1" gutterBottom>PUNE</Typography>
                                            </TableCell>
                                            <TableCell >
                                                <Typography variant="body1" gutterBottom>SUPERVISOR</Typography>
                                            </TableCell>
                                            </TableRow>
                                        </TableBody>
                                        </Table>
                                     {/* </TableContainer> */}
                            </GridContainer>
                        </ThemeProvider>
                </GridItem>
                </Container>
                <Backdrop className={classes.backdrop} open={open} onClick={closeLoader}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Container>

    )
}
