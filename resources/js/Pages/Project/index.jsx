import React, { createContext, useState } from "react";
import Authenticated from "@/Layouts/Authenticated";
// import { Head } from "@inertiajs/inertia-react";
import { BadgeCheckIcon, CollectionIcon } from "@heroicons/react/solid";
import TaskCard from "./Components/TaskCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const CardContext = createContext({
    markAsDone: null,
});

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Projects(props) {
    const [taskList, setTaskList] = useState([
        {
            id: (Math.random() * 100).toFixed(0),
            status: "discussion",
            category: "Chores",
            title: "Buy dog food",
            details: "Gotta make my woof woof happy 🐕",
        },
        {
            id: (Math.random() * 100).toFixed(0),
            status: "discussion",
            category: "Shopping",
            title: "Buy Milk",
            details: "Remember, remember the lactose free aisle... 🥛",
        },
        {
            id: (Math.random() * 100).toFixed(0),
            status: "discussion",
            category: "Chores",
            title: "Renew Gym Membership",
            details: "Gotta keep the muscles happy! 💪🏻",
        },
    ]);

    const markAsDone = (id) => {
        const task = taskList.filter((task) => task.id === id);
        task[0].status = "done";
        setTaskList(taskList.filter((task) => task.id !== id).concat(task[0]));
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <Authenticated auth={props.auth} errors={props.errors}>
                <CardContext.Provider value={{ markAsDone }}>
                    <div className="flex-grow w-full h-full max-w-8xl mx-auto xl:px-3 lg:flex">
                        {/* Left sidebar & main wrapper */}
                        <div className="flex-1 min-w-0 bg-white xl:flex">
                            {/* Account profile */}
                            <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
                                <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 space-y-8">
                                            {/* Meta info */}
                                            <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                                                <div className="flex items-center space-x-2">
                                                    <BadgeCheckIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="text-sm text-gray-500 font-medium">
                                                        Pro Member
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <CollectionIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="text-sm text-gray-500 font-medium">
                                                        8 Projects
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Projects List */}
                            <div className="xl:flex-1">
                                <div className="mt-6 h-5/6 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
                                    <div className="xl:lg:ml-4 border bg-gray-100 border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                                        <div className="py-6 px-6">
                                            <h2 className="text-lg leading-6 font-medium text-gray-900">
                                                Discussion
                                            </h2>

                                            {taskList
                                                .filter(
                                                    (task) =>
                                                        task.status ===
                                                        "discussion"
                                                )
                                                .map((task) => (
                                                    <TaskCard
                                                        key={task.id.toString()}
                                                        id={task.id}
                                                        category={task.category}
                                                        title={task.title}
                                                        details={task.details}
                                                    />
                                                ))}
                                        </div>
                                    </div>

                                    <div className="border bg-gray-100 border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                                        <div className="py-6 pl-6">
                                            <h2 className="text-lg leading-6 font-medium text-gray-900">
                                                Todo
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="border bg-gray-100 border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                                        <div className="py-6 pl-6">
                                            <h2 className="text-lg leading-6 font-medium text-gray-900">
                                                In Progress
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="border bg-gray-100 border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
                                        <div className="py-6 px-6">
                                            <h2 className="text-lg leading-6 font-medium text-gray-900">
                                                Done
                                            </h2>
                                            {taskList
                                                .filter(
                                                    (task) =>
                                                        task.status === "Done"
                                                )
                                                .map((task) => (
                                                    <TaskCard
                                                        key={task.id.toString()}
                                                        id={task.id}
                                                        category={task.category}
                                                        title={task.title}
                                                        details={task.details}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContext.Provider>
            </Authenticated>
        </DndProvider>
    );
}
