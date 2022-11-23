import express from "express";

export function MenusApi(db){
    const MenusApi = express.Router();

    MenusApi.get("/", async (req, res) => {
        //console.log(req.query);
        //console.log(req);
        const { titleSearch } = req.query;
        let filter = {};
        //console.log(`year is ${year}`);

        if(titleSearch!=='undefined'
            && titleSearch!==''
            && titleSearch!==""
            && titleSearch){
            console.log("Title: " + titleSearch);
            //console.log(titleSearch!=='undefined');
            //filter.year = {year : { $gte: yearInt } };
            //filter.year = {$regex: /2.*/};
            //filter.title = {$regex: "(.*)" + input + "(.*)", $options: 'i'};
            filter = {
                "$or": [
                    {title: { '$regex': "(.*)" + titleSearch + "(.*)", '$options': 'i' }},
                    {plot: { '$regex': "(.*)" + titleSearch + "(.*)", '$options': 'i' }}
                ]
            }
        }

        console.log(filter);

        const menus = await db
            .collection("menus")
            .find(filter)
            .map(({ dishname, category, allergy }) => ({ dishname, category, allergy }))
            .limit(100)
            .toArray();
        console.log(menus);
        res.json(menus);
    });

    MenusApi.post("/", (req, res) => {
        const { dishname, category, allergy } = req.body;

        db.collection("menus").insertOne({ dishname, category, allergy });

        res.sendStatus(204);
    });

    return MenusApi;
}
