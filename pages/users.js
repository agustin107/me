export default function Users({ users, data }) {
  console.log("users", users)
  return (
    <div>
      <h2>Lista de usuarios de {data}</h2>
      <div className="bg-slate-400">
        {users?.map((user) => (
          <pre>{user.name.first}</pre>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const isLogged = true;

  if (!isLogged) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      }
    }
  }

  const response = await fetch("https://randomuser.me/api/?results=5");
  const data = await response.json();

  return {
    props: {
      users: data.results,
      data: "Bootcamp"
    }
  }
}