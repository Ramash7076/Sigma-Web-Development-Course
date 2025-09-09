export default async function Page({ params }) {
    throw new Error("error hai")
    const { slug } = await params

    let languages = ["python", "JavaScript", "java", "c++", "php"]
    if (languages.includes(params.slug)) {
        return <div>My Post: {slug}</div>
    }
    else {
        return <div>Post not found</div>
    }
    //   return <div>My Post: {slug}</div>
}