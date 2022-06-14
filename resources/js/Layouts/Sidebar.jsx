import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
    const navigation = [
        { name: "Projects", href: "#", icon: FolderIcon, current: false },
        { name: "Team", href: "#", icon: UsersIcon, current: false },
    ];
    return (
        <nav className=" flex-1 px-2 bg-white space-y-1">
            {navigation.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className={classNames(
                        item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                >
                    <item.icon
                        className={classNames(
                            item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                    />
                    {item.name}
                </a>
            ))}
        </nav>
    );
}
