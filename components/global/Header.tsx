import Head from 'next/head';

const name = ' - brent champion';

export default function Header(props) {
    const { page, id } = props;

    const siteTitle = id ? id + name : page + name;
    
	return (
		<Head>
			<title>{siteTitle}</title>
			<link rel="icon" href="/logo.png" />
			<meta name="description" content="Brent Champion Portfolio Website" />
			<meta name="og:title" content={siteTitle} />
			<meta name="twitter:card" content="summary_large_image" />
			<script src="https://kit.fontawesome.com/9506f5416a.js" crossOrigin="anonymous" />
		</Head>
	);
}
