import Link from 'next/link'

export default function Home() {
    return (
        <div className="text-center mt-4">
            <Link href="/auth/login" className="underline text-xl display-sb">
                Go to login Page
            </Link>
        </div>
    )
}
