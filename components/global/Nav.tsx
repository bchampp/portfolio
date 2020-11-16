/* Nav Component */
import React, { useState } from 'react';
import Link from 'next/link';
import pageStyles from './page.module.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const links = [ 'about', 'work', 'projects', 'posts' ];

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #FFFFFF'
	}
})((props) => (
	<Menu
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
	const handleClick = (event) => {
		console.log(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
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
					<Link href="https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing">
						<a target="_blank">resume</a>
					</Link>
				</li>
			</ul>
			<a href="javascript:void(0);" className={pageStyles.icon} onClick={handleClick}>
				<MenuIcon />
			</a>
			{/* Responsive Navigation */}
			<StyledMenu
				id="navigation menu"
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
					<Link href="/resume">
						<a>
							<ListItemText primary="resume" />
						</a>
					</Link>
				</StyledMenuItem>
			</StyledMenu>
		</header>
	);
}
