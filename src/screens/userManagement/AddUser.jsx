import React from 'react';
import { TextField, Button, Snackbar, MenuItem, CircularProgress, Backdrop } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import Card from "../../components/Card/Card";

export default function AddUsers(){
    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        button: {
            margin: theme.spacing(1),
            backgroundColor: '#00acc1',
            color: '#fff'
        },
    }));
    
    const classes = useStyles();
    return(
        <GridContainer>
        <GridItem xs={12} sm={12} md={2}></GridItem>
        <GridItem xs={12} sm={12} md={8}>
            <form className={classes.root} noValidate autoComplete="on">
                <Card>
                    <CardHeader color="warning">
                        <h4 className={classes.cardTitleWhite}>Add User</h4>
                        <p className={classes.cardCategoryWhite}>All fields are mandatory</p>
                    </CardHeader>
                    <CardBody>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="firstName"
                                            label="First Name"
                                            type="firstName"
                                            id="firstName"
                                            // value={firstName}
                                            // onChange={handleChange("firstName")}
                                            // error={formSubmitted && firstName === ""}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="lastname"
                                            label="Last Name"
                                            type="text"
                                            id="lastname"
                                            // value={lastname}
                                            // onChange={handleChange("lastname")}
                                            // error={formSubmitted && lastname === ""}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="email"
                                            label="Email"
                                            type="email"
                                            id="email"
                                            // value={email}
                                            // onChange={handleChange("email")}
                                            // error={formSubmitted && email === ""}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <TextField
                                            inputProps={{ maxLength: 10 }}
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="mobileNumber"
                                            label="Mobile Number"
                                            type=""
                                            id="mobileNumber"
                                            // value={mobileNumber}
                                            // onChange={handleChange("mobileNumber")}
                                            // error={formSubmitted && mobileNumber === ""}
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="address"
                                            label="Address"
                                            type="text"
                                            id="address"
                                            // value={address}
                                            // onChange={handleChange("address")}
                                            // error={formSubmitted && address === ""}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="location"
                                            label="Location"
                                            type="text"
                                            id="location"
                                            // value={location}
                                            // onChange={handleChange("location")}
                                            // error={formSubmitted && location === ""}
                                        />
                                    </GridItem>  
                                    
                                    <GridItem xs={12} sm={12} md={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="city"
                                            label="City"
                                            type="text"
                                            id="city"
                                            // value={city}
                                            // onChange={handleChange("city")}
                                            // error={formSubmitted && city === ""}
                                        />
                                    </GridItem>  
                                </GridContainer>
                                <GridContainer>
                                    
                                    <GridItem xs={12} sm={12} md={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="site"
                                            label="Site"
                                            type="text"
                                            id="site"
                                            // value={site}
                                            // onChange={handleChange("site")}
                                            // error={formSubmitted && site === ""}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="department"
                                            label="Department"
                                            type="text"
                                            id="department"
                                            // value={department}
                                            // onChange={handleChange("department")}
                                            // error={formSubmitted && department === ""}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="designation"
                                            label="Designation"
                                            type="text"
                                            id="designation"
                                            // value={designation}
                                            // onChange={handleChange("designation")}
                                            // error={formSubmitted && designation === ""}
                                        />
                                    </GridItem>

                                    <GridItem xs={12} sm={12} md={6}>
                                    <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="Role"
                                            name="role"
                                            id="role"
                                            select
                                            // value={role}
                                            // onChange={handleChange('role')}
                                            // error={formSubmitted && role === ""}                                        
                                        >
                                            <MenuItem value = 'supervisor'>Supervisor</MenuItem>
                                            <MenuItem value = 'machineoperator'>Machine Operator</MenuItem>                                       
                                            <MenuItem value = 'laboperator'>Lab Operator</MenuItem>                                       
                                        </TextField>
                                    </GridItem>
                        </GridContainer>
                        <GridContainer>
                                    <GridItem xs={12} sm={12} md={8}>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <Button variant="contained"  className={classes.button} 
                                           fullWidth="true">Add User</Button>
                                    </GridItem>
                                </GridContainer>
                        </CardBody>
                        </Card>
                        </form>
        </GridItem>
        </GridContainer>                            
)}