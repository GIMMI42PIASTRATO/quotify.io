"use client";
import { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

export default function CanvasKonva() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [stageWidth, setStageWidth] = useState(0);

	const [position, setPosition] = useState({
		x: 500,
		y: 250,
		isDragging: false,
	});

	useEffect(() => {
		const updateWidth = () => {
			if (containerRef.current) {
				setStageWidth(containerRef.current.offsetWidth);
			}
		};

		updateWidth();
		window.addEventListener("resize", updateWidth);

		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []);

	return (
		<div ref={containerRef} style={{ width: "100%" }}>
			<Stage width={stageWidth} height={500}>
				<Layer>
					<Circle
						x={position.x}
						y={position.y}
						radius={50}
						fill="green"
						draggable
						onDragStart={() => {
							setPosition({
								...position,
								isDragging: true,
							});
						}}
						onDragEnd={(e) => {
							setPosition({
								x: e.target.x(),
								y: e.target.y(),
								isDragging: false,
							});
						}}
					/>
				</Layer>
			</Stage>
		</div>
	);
}
