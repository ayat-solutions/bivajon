import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../Types/items";

export default function TaskCard(props) {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: ItemTypes.CARD,
            id: props.id,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return (
        <div
            ref={drag}
            className="bg-white mt-4 p-2 space-y-2 rounded-md border-6"
        >
            <p>{props.title}</p>
        </div>
    );
}
