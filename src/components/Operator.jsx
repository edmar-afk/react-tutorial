import { useState } from "react";

function Operator() {
    const [isEditing, setEditing] = useState(false)

    const setTrue = () => {
        setEditing(true)
    }
  return (
		<>
			<div className="text-center">
				<h2 className="text-center text-6xl mt-12">Ternary Operator</h2>
              <button type="submit" onClick={setTrue} className="mt-12 text-2xl bg-cyan-400 p-4 rounded-xl px-6">{isEditing ? 'Edit' : 'Add'}</button>
			</div>
		</>
	);
}

export default Operator
