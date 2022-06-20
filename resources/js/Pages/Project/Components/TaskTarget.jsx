import { useDrop } from "react-dnd";
import { ItemTypes } from "../Types/items";
import { useContext } from "react";
import { CardContext } from "../../Project/Details";

const TaskTarget = (props) => {
    const { markAsDone } = useContext(CardContext);

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => markAsDone(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            className={
                isOver
                    ? " bg-gray-200 border-blue-100 rounded-lg shadow-sm divide-y divide-gray-20"
                    : " bg-gray-100 border-blue-100 rounded-lg shadow-sm divide-y divide-gray-20"
            }
        >
            {props.children}
        </div>
    );
};

export default TaskTarget;
