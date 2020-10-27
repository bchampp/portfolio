import Link from 'next/link';
import Date from '../date';

export default function Posts({ posts }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#1a202c' }}>
      <h3 className='px-6 text-white text-2xl mb-3'>Recent posts</h3>
      <div>
        <ul className='flex justify-evenly px-20 py-10'>
          {posts.slice(0, 3) // Take 3 most recent projects
            .map(({ id, date, title }) => (
              <li className='h-30 w-72' key={id}>
                <Link href={`/projects/${id}`}>
                  <div className="max-w-sm rounded shadow-lg bg-white m-0  hover:bg-blue-800">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-wht">{title}</div>
                      <div className="text-m mb-2"><Date dateString={date} /></div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}