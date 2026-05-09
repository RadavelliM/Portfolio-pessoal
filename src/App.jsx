import React, { useEffect, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const SPA = React.lazy(() => import("./pages/SPA/spa"));
const NotFound = React.lazy(() => import("./pages/notFound/notFoundMount"));
const Loader = React.lazy(() => import("./ui/loader/loader"));

export default function App() {
    useEffect(() => {
        const handleDisableDragImg = () => {
            const getImages = document
                .querySelectorAll("img")
                .forEach((imag) => imag.setAttribute("draggable", "false"));
        };
        handleDisableDragImg();

        const observer = new MutationObserver(() => handleDisableDragImg());
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<SPA />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
