import Link from 'next/link';
import Date from '../date';

export default function Projects({ projects }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#1a202c' }}>
      <h3 className='px-6 text-white text-2xl mb-3'>Check out some of my projects</h3>
      <div>
        <ul className='flex justify-evenly px-20 py-10'>
          {projects.slice(0, 3) // Take 3 most recent projects
            .map(({ id, date, title, description, img, tags }) => (
              <li className='h-30 w-72' key={id}>
                <Link href={`/projects/${id}`}>
                  <div className="max-w-sm rounded shadow-lg bg-white m-0  hover:bg-blue-800">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-wht">{title}</div>
                      <div className="text-m mb-2"><Date dateString={date} /></div>
                      <p className="text-gray-700 text-base">
                        {description}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {tags && tags.map(tag => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                      )
                      )}
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