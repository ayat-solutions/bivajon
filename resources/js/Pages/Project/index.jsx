import Authenticated from "@/Layouts/Authenticated";
import { useState } from "react";
import CreateProject from "./Components/CreateProject";
import UpdateProject from "./Components/UpdateProject";
import DeleteProject from "./Components/DeleteProject";
import { Link } from "@inertiajs/inertia-react";
import { PencilAltIcon, EyeIcon, TrashIcon } from "@heroicons/react/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Projects(props) {
    const [isCreate, setIsCreate] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [currentProject, setCurrentProject] = useState("");

    function editProject(project) {
        setCurrentProject(project);
        setIsUpdate(true);
    }

    function deleteProject(project) {
        setCurrentProject(project);
        setIsDelete(true);
    }

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <div className="mt-5 px-4 sm:px-6 lg:px-8">
                <>
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-xl font-semibold text-gray-900">
                                Projects
                            </h1>
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all the projects in your account
                                including their title, description and rest.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                onClick={() => {
                                    setIsCreate(true);
                                }}
                            >
                                Create project
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                                >
                                                    Title
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Description
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Date
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {props.projects.map(
                                                (project, index) => (
                                                    <tr key={index}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                            <Link
                                                                href={route(
                                                                    "projects.show",
                                                                    project.uuid
                                                                )}
                                                            >
                                                                {project.title}
                                                            </Link>
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {
                                                                project.description
                                                            }
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            Active
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            22-10-2022
                                                        </td>

                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <Link
                                                                href={route(
                                                                    "projects.show",
                                                                    project.uuid
                                                                )}
                                                            >
                                                                <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white p-1 m-1 border border-gray-500 hover:border-transparent rounded">
                                                                    <EyeIcon
                                                                        width={
                                                                            14
                                                                        }
                                                                    />
                                                                </button>
                                                            </Link>

                                                            <button
                                                                onClick={() => {
                                                                    editProject(
                                                                        project
                                                                    );
                                                                }}
                                                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 m-1 border border-blue-500 hover:border-transparent rounded"
                                                            >
                                                                <PencilAltIcon
                                                                    width={14}
                                                                />
                                                            </button>

                                                            <button
                                                                onClick={() => {
                                                                    deleteProject(
                                                                        project
                                                                    );
                                                                }}
                                                                className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white p-1 m-1 border border-red-500 hover:border-transparent rounded"
                                                            >
                                                                <TrashIcon
                                                                    width={14}
                                                                />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                <CreateProject isOpen={isCreate} setIsOpen={setIsCreate} />
                <UpdateProject
                    project={currentProject}
                    isOpen={isUpdate}
                    setIsOpen={setIsUpdate}
                />
                <DeleteProject
                    project={currentProject}
                    isOpen={isDelete}
                    setIsOpen={setIsDelete}
                />
            </div>
        </Authenticated>
    );
}
