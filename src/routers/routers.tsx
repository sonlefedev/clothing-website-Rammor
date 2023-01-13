import { Routes, Route } from "react-router-dom";
import React, { useMemo } from "react";

//
const Home = React.lazy(() => import("../page/Home"));
const Product = React.lazy(() => import("../page/Product"));

const All = React.lazy(() => import("../page/collection/All"));
const Basic = React.lazy(() => import("../page/collection/Basic"));
const SummerNostalgia = React.lazy(
    () => import("../page/collection/SummerNostalgia")
);
const SummerVibes = React.lazy(() => import("../page/collection/SummerVibes"));

type Props = {};

const Routers = (props: Props) => {
    const RoutesData: { path: string; elm: JSX.Element }[] = useMemo(
        () => [
            {
                path: "/",
                elm: (
                    <React.Suspense>
                        <Home />
                    </React.Suspense>
                ),
            },
            {
                path: "/product",
                elm: (
                    <React.Suspense>
                        <h1>sorry, there are no product available</h1>
                    </React.Suspense>
                ),
            },
            {
                path: "/product/:id",
                elm: (
                    <React.Suspense>
                        <Product />
                    </React.Suspense>
                ),
            },
            {
                path: "/collections/summer-vibes",
                elm: (
                    <React.Suspense>
                        <SummerVibes />
                    </React.Suspense>
                ),
            },
            {
                path: "/collections/all",
                elm: (
                    <React.Suspense>
                        <All />
                    </React.Suspense>
                ),
            },
            {
                path: "/collections/basic-collection",
                elm: (
                    <React.Suspense>
                        <Basic />
                    </React.Suspense>
                ),
            },
            {
                path: "/collections/summer-nostalgia-collection",
                elm: (
                    <React.Suspense>
                        <SummerNostalgia />
                    </React.Suspense>
                ),
            },
            {
                path: "*",
                elm: (
                    <React.Suspense>
                        <h1>page not found.</h1>
                    </React.Suspense>
                ),
            },
        ],
        []
    );

    return (
        <>
            <Routes>
                {RoutesData.map((item) => (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={item.elm}
                    />
                ))}
            </Routes>
        </>
    );
};

export default Routers;
