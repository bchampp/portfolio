import Link from "next/link";

export default function Nav() {
    return (
        <div class="absolute top-0 flex justify-between">
            <div>
                <Link href='/'><a class='inline-block py-2 px-4 text-white'>Brent Champion</a></Link>
            </div>
            <div class="text-center">
                <ul class="flex justify-between">
                    <li class="mr-3">
                        <Link href='/about'><a class='inline-block py-2 px-4 text-white'>About</a></Link>>
                    </li>
                    <li class="mr-3">
                        <Link href='/projects'><a class='inline-block py-2 px-4 text-white'>Projects</a></Link>
                    </li>
                    <li class="mr-3">
                        <Link href='/posts'><a class='inline-block py-2 px-4 text-white'>Posts</a></Link>
                    </li>
                    <li class="mr-3">
                        <Link href='https://drive.google.com/file/d/1Mlz0-qz1H8olaJHuRJoG1eYiIaFCYjp-/view?usp=sharing'><a class='inline-block py-2 px-4 text-white'>Resume</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}