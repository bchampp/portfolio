/* Nav Component */

import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../../styles/page.module.css";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

const links = ["about", "projects", "work"];

const resumeLink =
  "https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing";

const StyledMenu: any = withStyles({
  list: {
    "background-color": "var(--bg-color)",
  },
})((props: any) => (
  <Menu
    open={null}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "background-color": "var(--bg-color)",
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Nav({ page }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [theme, setTheme] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    const currTheme = window.localStorage.getItem("theme") || null;
    if (currTheme == "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme(false);
    }
  }, [theme]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("theme", "light");
    }
    setTheme(!theme);
  };

  return (
    <header className={styles.nav}>
      <Link href="/">
        <a>brent champion</a>
      </Link>
      {/* Desktop Navigation */}
      <ul>
        {links &&
          links.map((link) => (
            <li key={link}>
              {page === link ? (
                <Link href={`/${link}`}>
                  <a className={styles.active}>{link}</a>
                </Link>
              ) : (
                <Link href={`/${link}`}>
                  <a>{link}</a>
                </Link>
              )}
            </li>
          ))}
        <li>
          <a href={resumeLink} target="_">
            resume
          </a>
        </li>
        <li>
          <div className={styles.toggle}>
            <input
              type="checkbox"
              className={styles.checkbox}
              id="chk"
              checked={theme}
              onChange={handleThemeChange}
            />
            <label className={styles.label} htmlFor="chk">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className={styles.ball}></div>
            </label>
          </div>
        </li>
      </ul>
      <a className={styles.icon} onClick={handleClick}>
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
          <Link href={resumeLink}>
            <a>
              <ListItemText primary="resume" />
            </a>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <li>
            <div className={styles.toggle}>
              <input
                type="checkbox"
                className={styles.checkbox}
                id="chk"
                checked={theme}
                onChange={handleThemeChange}
              />
              <label className={styles.label} htmlFor="chk">
                <i style={{ paddingLeft: "1px" }} className="fas fa-moon"></i>
                <i style={{ paddingRight: "1px" }} className="fas fa-sun"></i>
                <div className={styles.mobileBall}></div>
              </label>
            </div>
          </li>
        </StyledMenuItem>
      </StyledMenu>
    </header>
  );
}
