import { useEffect } from "react";

export default function Tags({tags, filters, handleClick}) {
	console.log(filters);
	
	useEffect(() => {

	}, [filters]);


	return (
		<div className="flex px-48 py-4 justify-evenly flex-wrap">
			{tags &&
				tags.map((tag) => (
					filters.includes(tag.name) ? // Selected Tag
                    <div key={tag.name} className="px-2 m-auto my-2 rounded bg-black text-white">
						<div
							className="hover:cursor-pointer"
							onClick={() => { handleClick(tag.name); }}
						>
							{tag.name}
						</div>
                    </div> 
                    :
                    <div key={tag.name} className="px-2 m-auto my-2 bg-gray-200 rounded hover:bg-gray-500">
						<div
							className="hover:cursor-pointer"
							onClick={() => { handleClick(tag.name); }}
						>
							{tag.name}
						</div>
                    </div> 
                    
				))}
		</div>
	);
}
