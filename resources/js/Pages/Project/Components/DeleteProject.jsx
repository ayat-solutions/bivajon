import { Dialog, Transition } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Fragment, useEffect, useState } from "react";

export default function DeleteProject({ project, isOpen, setIsOpen }) {
    const { errors } = usePage().props;
    const [values, setValues] = useState(project);

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            setIsOpen(false);
        }
    }, [errors]); // 👈️ add state variables you want to track

    useEffect(() => {
        setValues(project);
    }, [project]); // 👈️ add state variables you want to track

    async function handleSubmit(e) {
        e.preventDefault();
        Inertia.delete(`/projects/${values.uuid}`);
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Delete Project
                                </Dialog.Title>{" "}
                                <form onSubmit={handleSubmit}>
                                    <div className="my-2 p-1">
                                        Are you sure you want to delete this
                                        project?
                                    </div>
                                    <div className="mt-4 ">
                                        <button
                                            type="submit"
                                            className="w-full font-bold inline-flex justify-center rounded-md border border-transparent text-white bg-red-500 px-4 py-2 text-sm hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                        >
                                            Yes, Delete!
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
