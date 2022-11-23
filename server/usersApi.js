import express from "express";

export function UsersApi(db){
    const api = express.Router();

    api.get("/", async (req, res) => {
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

        const users = await db
            .collection("users")
            .find(filter)
            .map(({ email, password, telephone }) => ({ email, password, telephone }))
            .limit(100)
            .toArray();
        //console.log(movies);
        res.json(users);
    });

    api.post("/", (req, res) => {
        const { email, password, telephone } = req.body;

        db.collection("users").insertOne({ email, password, telephone });

        res.sendStatus(204);
    });

    return api;
}
