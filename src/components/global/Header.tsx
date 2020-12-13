import Head from 'next/head';
import MetadataConstants from '../../constants/metadata';
export default function Header(props) {
    const { page, id } = props;

	const siteTitle = id ? 
		id + MetadataConstants.TITLE_POSTFIX : 
		(page === 'home' ? 
		'brent champion' : 
		page + MetadataConstants.TITLE_POSTFIX);
    
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
