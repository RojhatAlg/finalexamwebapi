import * as React from "react";
import {createRoot} from "react-dom/client";
import { act, Simulate } from "react-dom/test-utils";
import { AddMenu } from "../../addMenu.jsx";
import { MemoryRouter } from "react-router-dom";
import { MenuApiContext } from "../../menuApiContext.jsx";

describe("add movie tests", () => {
    it("shows form", async () => {
       const element = document.createElement("div");
       const root = createRoot(element);

       await act(async () => {
           root.render(
            <MemoryRouter>
                <AddMenu />
            </MemoryRouter>
           );
       });
       expect(element.innerHTML).toMatchSnapshot();

       const inputLabels = Array.from(
           element.querySelectorAll("form label strong")
       ).map((label) => label.innerHTML);
       expect(inputLabels).toEqual(["dishname: ", "category: ", "allergy: "]);
    });

    it("submits form", async () => {
        const createMovie = jest.fn();

       const element = document.createElement("div");
       const root = createRoot(element);

       await act( async () =>
            root.render(
            <MemoryRouter>
                <MenuApiContext.Provider value={{ createMovie }}>
                    <AddMenu />
                </MenuApiContext.Provider>
            </MemoryRouter>
            )
       );

       act ( () =>
       Simulate.change(element.querySelector("form div:nth-of-type(1) input"), {
          target: { value: "Dishname Example" },
       }));

       act( () =>
        Simulate.change(element.querySelector("form div:nth-of-type(2) input"), {
            target: { value: "Category Example" },
        }));

        act( () =>
            Simulate.change(element.querySelector("form div:nth-of-type(3) input"), {
                target: { value: "Allergy Example" },
            }));

        act ( () =>
            Simulate.submit(element.querySelector("form"))
        );

       expect(createMovie).toBeCalledWith({
          dishname: "Disname Example",
          category: "Category Example",
          allergy: "Allergy Example",
       });

    });
});