import { useState } from "react"
function ArrayUseState() {
    
	const lists = [
		{ id: 1, name: "Edmar Jay" },
		{ id: 2, name: "Jessiel Jane" },
		{ id: 3, name: "React" },
	];

    const [list, display] = useState(lists);
    
  return (
    <div>
          {lists.map(people) = () => {
              const { id, name } = people
              return (
                  <div key={id}></div>
              )
      }}
    </div>
  )
}

export default ArrayUseState
