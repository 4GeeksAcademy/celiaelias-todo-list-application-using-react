import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
	
	const [ inputValue, setInputValue ] = useState("");
	const [ todos, setTodos ] = useState([]);

	return (
		<React.Fragment>
			<head>
				<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      		</head>

		<h1>Todos</h1>
		<div className="container">
			<ul>
				<li>
					<input 
						type="text"
						onChange={(e) => setInputValue(e.target.value)} 
						value={inputValue} 
						onKeyUp={(e) => {
							if (e.key === "Enter") { 
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"></input>
				</li>
				
				{todos.map((item, index) => (
					<li>
						{item} {""} 
						<FontAwesomeIcon icon={faTrashCan} className="trashcan" onClick={() => 
								setTodos (
									todos.filter((t, currentIndex) => index != currentIndex)
								)
							}/>
					</li>
				))}	
			</ul>
			<div>{todos.length} tasks</div>
		</div>
		
		</React.Fragment>
	);
};

export default Home;
