import Menu from '../models/menu.js';



const createMenu = async (req,res) => {
    const {dishname,
        category,
        allergy} = req.body
    try {
        const newMenuCreated = await Menu.create({dishname,
            category,
            allergy})
        res.status(200).json(newMenuCreated)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


/*const newMenuCreated = async (req, res) => {
    const {dishname, category, allergy} = req.body;
    await Menu.create({ dishname, category, allergy})
    if(newMenuCreated) {
        res.status(201).json({

        })
    } else {
        res.status(400)
        throw new Error("invalid Menu name")
    }
}

 */

export default createMenu;

/*
_id: newMenuCreated.id,
            dishname: newMenuCreated.dishname,
            category: newMenuCreated.category,
            allergy: newMenuCreated.allergy,
 */

