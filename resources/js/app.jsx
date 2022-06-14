import "./bootstrap";

import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Bivajon";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <DndProvider backend={HTML5Backend}>
                <App {...props} />
            </DndProvider>
        );
    },
});

InertiaProgress.init({ color: "#4B5563" });
