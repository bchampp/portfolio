import Link from 'next/link';
import Layout from '../components/layout';

export default function Custom404() {
    return (
        <Layout page='notfound'>
            <div className="text-center">
                <p>Hmm.. I can't find that page for you.</p> 
                <p><Link href="/"><a>&larr; Back to Home</a></Link></p>
            </div>
            
        </Layout>
    )
  }