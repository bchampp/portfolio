import Link from "next/link";

const links = ['about', 'work', 'projects', 'posts'];

export default function Nav({page}) {
    return (
        <div className="top-0 flex bg-black justify-between">
            <div>
                <Link href='/'><a className='inline-block py-2 px-4 text-white'>brent champion</a></Link>
            </div>
            <div className="text-center">
                <ul className="flex justify-between">
                    {links.map(link => (
                        <li className="mr-3" key={link}>
                            <Link href={`/${link}`}>
                                <a className={page == link ? 'inline-block py-2 px-4 underline text-white' : 'inline-block py-2 px-4 no-underline text-white'}>
                                    {link}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li className="mr-3">
                        <Link href='https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing'>
                            <a className='inline-block py-2 px-4 text-white'>
                                resume
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}