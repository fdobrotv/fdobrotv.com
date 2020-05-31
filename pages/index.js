import React from 'react';
import Container from '@material-ui/core/Container';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Menu from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import dynamic from "next/dynamic";
import SidebarComponent from "../components/SideBarComponent";

const AppBarComponent = dynamic(
    () => import('../components/AppBarComponent')
)

const items = [
    {name: 'home', label: 'Home', link: '/'},
    {
        name: 'cv',
        label: 'CV',
        link: '/cv'
    }
]

export default function Index() {
    return (
        <div>
            <AppBarComponent/>
            <SidebarComponent items={items}/>
            <Container maxWidth="sm">
                <Box my={4}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Dobrotvorskii Fedor home page
                    </Typography>
                    <Link href="/about" color="secondary">
                        Go to the about page
                    </Link>
                    <ProTip/>
                    <Copyright/>
                </Box>
            </Container>
        </div>
    );
}