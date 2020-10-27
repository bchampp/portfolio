import Link from "next/link";

const links = ['About', 'Projects', 'Posts'];

export default function Nav() {
    return (
        <div class="top-0 flex justify-between">
            <div>
                <Link href='/'><a class='inline-block py-2 px-4 text-white'>Brent Champion</a></Link>
            </div>
            <div class="text-center">
                <ul class="flex justify-between">
                    {links.map(link => (
                        <li class="mr-3">
                            <Link href={`/${link.toLowerCase()}`}><a class='inline-block py-2 px-4 no-underline text-white'>{link}</a></Link>
                        </li>
                    ))}
                    <li class="mr-3">
                        <Link href='https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing'><a class='inline-block py-2 px-4 text-white'>Resume</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}