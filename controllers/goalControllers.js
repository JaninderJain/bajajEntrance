const asyncHandler = require ('express-async-handler')

const Goal = require ('../models/goalSchema')


const getGoals =asyncHandler( async(req ,res)=> {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.send('please enter text');
        res.status(400);
        return;
    }
    const data=req.body.text;
    const user_id =john_doe_17091999;
    const email ='john@xyz.com';
    const roll_number='ABCD123';
    const goal = Goal.create({
        is_Success: true,
        user_id:user_id,
        email:email,
        roll_number:roll_number,
        odd_numbers: data.odd_Numbers,
        even_numbers: data.even_Numbers,
        albhabets: data.alphabets
    })
    try {
         goal.save();
    } catch (error) {
        console.log(error);
    }
    res.status(200).json(goal)
})

const updateGoal = asyncHandler(async(req,res) => {
    const goal =await Goal.findById(req.params.id)
    
    if(!goal){
        res.status(404)
        throw new Error('Goal not Found')
    }

    const updatedGoal= await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedGoal)
})

const deleteGoal =asyncHandler(async (req,res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not Found')
    }
    await goal.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
}