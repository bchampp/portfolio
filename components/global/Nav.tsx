/* Nav Component */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import pageStyles from '../../styles/page.module.css';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

// const links = [ 'about', 'work', 'projects', 'posts' ];
const links = [ 'about', 'work', 'projects'];

const resumeLink = "https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing"

const StyledMenu: any = withStyles({
	paper: {
		border: '1px solid #FFFFFF'
	}
})((props: any) => (
	<Menu
		open={null}
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center'
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		'&:focus': {
			backgroundColor: theme.palette.primary.main,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white
			}
		}
	}
}))(MenuItem);

export default function Nav({ page }) {
	const [ anchorEl, setAnchorEl ] = useState(null);
	const [theme, setTheme] = useState(false)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	useEffect(() => {
		const currTheme = window.localStorage.getItem('theme') || null;
		if (currTheme == 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			setTheme(true);
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			setTheme(false);
		}
	}, [theme])

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleThemeChange = (e) => {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			window.localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			window.localStorage.setItem('theme', 'light');
		} 
		setTheme(!theme);
	}

	return (
		<header className={pageStyles.nav}>
			<Link href="/">
				<a>brent champion</a>
			</Link>
			{/* Desktop Navigation */}
			<ul>
				{links &&
					links.map((link) => (
						<li key={link}>
							{page === link ? (
								<a className={pageStyles.active}>{link}</a>
							) : (
								<Link href={`/${link}`}>
									<a>{link}</a>
								</Link>
							)}
						</li>
					))}
				<li>
					<a href={resumeLink} target="_">resume</a>
				</li>
				<li>
					<div className={pageStyles.toggle}>
					<input 	type="checkbox" 
							className={pageStyles.checkbox} 
							id="chk" 
							checked={theme}
							onChange={handleThemeChange}
					/>
					<label className={pageStyles.label} htmlFor="chk">
						<i className="fas fa-moon"></i>
						<i className="fas fa-sun"></i>
						<div className={pageStyles.ball}></div>
					</label>
					</div>
				</li>
			</ul>
			<a className={pageStyles.icon} onClick={handleClick}>
				<MenuIcon />
			</a>
			{/* Responsive Navigation */}
			<StyledMenu
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<StyledMenuItem>
					<Link href="/about">
						<a>
							<ListItemText primary="about" />
						</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<Link href="/work">
						<a>
							<ListItemText primary="work" />
						</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<Link href="projects">
						<a>
							<ListItemText primary="projects" />
						</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<Link href="/posts">
						<a>
							<ListItemText primary="posts" />
						</a>
					</Link>
				</StyledMenuItem>
				<StyledMenuItem>
					<Link href={resumeLink}>
						<a target="_blank">
							<ListItemText primary="resume" />
						</a>
					</Link>
				</StyledMenuItem>
			</StyledMenu>
		</header>
	);
}
