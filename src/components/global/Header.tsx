import Head from 'next/head';
import MetadataConstants from '../../constants/metadata';

export default function Header(props) {
    const { page, id } = props;

	const pageTitle = id ? 
		id.toLowerCase() + MetadataConstants.TITLE_POSTFIX : 
		(page === 'home' ? 
		'brent champion' : 
		page + MetadataConstants.TITLE_POSTFIX);
		
	const pageDescription = id;

	return (
		<Head>
			<title>{pageTitle}</title>
			<link rel="icon" href="/logo.png" />
			<meta name="description" content={pageDescription} />
			<meta name="og:title" content={pageTitle} />
			<meta name="twitter:card" content="summary_large_image" />
			<script src="https://kit.fontawesome.com/9506f5416a.js" crossOrigin="anonymous" />
		</Head>
	);
}
