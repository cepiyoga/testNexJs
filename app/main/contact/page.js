export const metadata = {
    title: "Contact",
}

export default async function Contact() {
    const response = await fetch("http://localhost:3001/posts");
    const posts = await response.json();
    console.log(posts);
    return (
        <>
            <div>
                <div>Contact</div>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>view</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.views}</td>

                        </tr>

                    ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}