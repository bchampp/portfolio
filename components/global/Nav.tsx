/* Nav Component */

import Link from 'next/link';
import pageStyles from './page.module.css';

const links = [ 'about', 'work', 'projects', 'posts' ];

export default function Nav({ page }) {
	return (
		<header className={pageStyles.nav}>
			<Link href="/">
				<a>brent champion</a>
			</Link>
			<div>
				<ul>
					{links && links.map((link) => (
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
			</div>
			<a href="javascript:void(0);" className={pageStyles.icon} onClick={() => alert("test")}>
				<i className="fa fa-bars"></i>
			</a>
		</header>
	);
}
