import {notFound} from "next/navigation";

export default function BlogPage({params}) {
    if (!['first', 'second'].includes(params.slug)) {
        notFound()
    }

    return (
        <>
            <h1>Blog {params.slug}</h1>
        </>
    )
}