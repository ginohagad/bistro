import React from 'react'
import styles from './Nav.module.css'
import { makeStyles } from '@material-ui/core/styles'
import { Tabs, Tab, AppBar, Toolbar, Typography, IconButton, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import RestaurantIcon from '@material-ui/icons/Restaurant';



const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		textTransform: 'uppercase',
	},
	paper: {
		marginRight: theme.spacing(2),
	},
	tab: {
		'&:hover': {
			color: 'red',
			transition: 'color 0.2s ease-in-out',
		},
	},
	toolbar: {
		margin: '10px 0',
	},
	logo: {
		marginRight: theme.spacing(1),
		padding: 4,
		backgroundColor: 'red',
		borderRadius: 25,
	},
}))


const Nav = () => {
	const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
			setOpen((prevOpen) => !prevOpen);
	};

  const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

  function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
  }

	// return focus to the button when we transition from !open to open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}
	
		prevOpen.current = open;
	}, [open]);

	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
				<Toolbar className={classes.toolbar}>
					<IconButton 
						edge="start" 
						className={`${classes.menuButton} ${styles.menuButton}`}
						color="inherit" 
						aria-label="menu" 
						ref={anchorRef} 
						aria-controls={open ? 'menu-list-grow' : undefined}
						aria-haspopup="true"	
						onClick={handleToggle}
					>
						<MenuIcon />	
					</IconButton>
					<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
											<MenuItem onClick={handleClose} to='/' component={Link}>Home</MenuItem>
											<MenuItem onClick={handleClose} to='our-food' component={Link}>Our Food</MenuItem>
											<MenuItem onClick={handleClose}	to='order' component={Link}>Order Now</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
					<RestaurantIcon className={classes.logo} />
					<Typography variant="h6" className={classes.title}>Bistro</Typography>
					<Tabs className={styles.tabs}>
						<Tab className={classes.tab} label='Home' to='/' component={Link} />} />
						<Tab className={classes.tab} label='Our Food' to='our-food' component={Link} />
						<Tab className={classes.tab} label='Order Now' to='order' component={Link} />
					</Tabs>
			</Toolbar>
			</AppBar>
		</div>
	)
}


export default Nav
