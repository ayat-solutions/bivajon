import { useDrop } from "react-dnd";
import { ItemTypes } from "../Types/items";
import { useContext } from "react";
// import { CardContext } from "../../Project";

const BoxTarget = (props) => {
    // const { markAsDone } = useContext(CardContext);

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
                "flex flex-col justify-center items-center m-2 p-3 shadow-sm min-h-min w-full rounded-md text-white" +
                isOver
                    ? " green.500"
                    : " green.200"
            }
        >
            {props.children}
        </div>
    );
};

export default BoxTarget;
