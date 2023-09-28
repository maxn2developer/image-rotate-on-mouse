import { useState } from "react";
export default function MovingDot() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	return (
		<div
			onPointerMove={(e) => {
				setPosition({
					x: e.clientX,
					y: e.clientY
				});
			}}
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh"
			}}>
			<div
				style={{
					position: "absolute",
					transform: `translate(${position.x}px, ${position.y}px)`,
					left: -10,
					top: -10,
					width: 20
				}}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
					alt="photoimage"
				/>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
					alt="photoimage"
				/>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
					alt="photoimage"
				/>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s"
					alt="photoimage"
				/>
			</div>
		</div>
	);
}
