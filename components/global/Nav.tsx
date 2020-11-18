/* Nav Component */
import React, { useState } from 'react';
import Link from 'next/link';
import pageStyles from '../../styles/page.module.css';

import Switch from '@material-ui/core/Switch';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

const links = [ 'about', 'work', 'projects', 'posts' ];
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
	const [colorState, setState] = useState(false)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleChange = (e) => {
		console.log("Changing Color Scheme");
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
		}
		else {
			document.documentElement.setAttribute('data-theme', 'light');
		} 
		setState(!colorState);
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
								<div className={pageStyles.inactive}>{link}</div>
							) : (
								<Link href={`/${link}`}>
									<a>{link}</a>
								</Link>
							)}
						</li>
					))}
				<li>
					<Link href={resumeLink}>
						<a target="_blank">resume</a>
					</Link>
				</li>
				<li>
				<Switch
					checked={colorState}
					onChange={handleChange}
					name="checkedA"
				/>
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
