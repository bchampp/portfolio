import Link from "next/link";

const links = ['About', 'Projects', 'Posts'];

export default function Nav() {
    return (
        <div className="top-0 flex bg-black justify-between">
            <div>
                <Link href='/'><a className='inline-block py-2 px-4 text-white'>Brent Champion</a></Link>
            </div>
            <div className="text-center">
                <ul className="flex justify-between">
                    {links.map(link => (
                        <li className="mr-3">
                            <Link href={`/${link.toLowerCase()}`}><a className='inline-block py-2 px-4 no-underline text-white'>{link}</a></Link>
                        </li>
                    ))}
                    <li className="mr-3">
                        <Link href='https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing'><a className='inline-block py-2 px-4 text-white'>Resume</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}