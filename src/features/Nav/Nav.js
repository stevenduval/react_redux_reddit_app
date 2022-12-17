import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar sx={{ justifyContent: 'center', background: '#FF4500' }}>
                <Typography variant='h6'>
                    <Link to='/' style={{ color: '#FFFFFF', textDecoration: 'none' }}>React Redux Reddit App</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}