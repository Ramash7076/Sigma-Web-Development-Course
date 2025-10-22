import User from "../components/User";

export default async function Page({ params }) {
  const { username } = await params
  

  return (
    <div >
      <User  />
      
    </div>
  )
}
