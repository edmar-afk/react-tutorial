import { useState } from "react";function UserChallenge() {
    const [user, setUser] = useState(null)

    const login = () => {
        setUser({name: 'Edmar Jay'})
    }

    const logout = () => {
        setUser(null)
    }

	return (
		<>
			<h1 className="text-center text-7xl font-bold mt-12 mb-16">User Challenge</h1>
			{user ? (
				<div className="flex flex-col">
					<p className="text-center text-5xl font-semibold mb-7">Hello, {user.name}</p>
					<button
						type="button"
						onClick={logout}
						className="mx-auto bg-green-700 p-4 text-white text-2xl rounded-2xl">
						Logout
					</button>
				</div>
			) : (
				<div className="flex flex-col">
					<p className="text-center text-5xl font-semibold mb-7">Please Login</p>
					<button
						type="button"
						onClick={login}
						className="mx-auto bg-green-700 p-4 text-white text-2xl rounded-2xl">
						Login
					</button>
				</div>
			)}
		</>
	);
}



export default UserChallenge;
