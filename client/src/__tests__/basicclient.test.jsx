import * as React from "react"
import {createRoot} from "react-dom/client";
import { act } from "react-dom/test-utils";
import { MenuApiContext } from "../../menuApiContext.jsx";

import { ListMenu } from "../../Movies.jsx";

const movies = [
    {
        dishname: "Dishname Example",
        category: "Category Example",
        allergy: "Allergy Example"
    }
]

async function renderListMovies(listMenus) {
    const element = document.createElement("div");
    const root = createRoot(element);

    await act(async () =>
        root.render(
            <MenuApiContext.Provider value={{ listMenus }}>
                <ListMenu />
            </MenuApiContext.Provider>
        )
    );
    return element;
}

describe("client test suite", () => {

    it("show loading screen", async () => {
        const element = await renderListMovies(() => new Promise(() => {}));

        expect(element.querySelector(".loading-indicator")).not.toBeNull();
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("shows movies list", async () => {
        const element = await renderListMovies(async () => movies);

        expect(element.querySelector("h3").innerHTML).toEqual(` ${movies[0].dishname} - ${movies[0].category} - ${movies[0].allergy} `);
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("shows error message", async () => {
        const element = await renderListMovies(async () => {
           throw new Error("Failed to fetch");
        });

        expect(element.querySelector(".error-message").innerHTML)
            .toContain("Failed to fetch");
        expect(element.innerHTML).toMatchSnapshot();

    });
});