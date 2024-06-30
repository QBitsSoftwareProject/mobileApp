const { model } = require('mongoose');
const QuestionModel = require('../../models/stressQuestions/Question.model');
const OptionsModel = require('../../models/stressOptions/Options.model');
const asyncHandler = require('express-async-handler');


const createQuestionWithOptions = asyncHandler(async (req, res) => {
    const { question, imgurl, options } = req.body;

    try {
        // create Options 
        const createdOptions = await OptionsModel.insertMany(options);

        // take IDs from created options
        const optionIds = createdOptions.map(option => option._id);

        // Create Question and associate Option IDs
        const newQuestion = await QuestionModel.create({
            question,
            imgurl,
            options: optionIds,
            questionId: '' 
        });

        res.status(201).json({
            message: 'Question created successfully',
            question: newQuestion
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Fetch all data

const getAllQuestions = asyncHandler(async (req,res) => {
    const questions = await QuestionModel.find().populate('options');

    if (questions.length > 0) {
        res.status(200).json(questions);
    } else {
        res.status(404).json({ message: "No questions found" });
    }
 
});

// questions ids

const getAllQuestionIds = asyncHandler(async (req, res) => {
    try {
        const questionIds = await QuestionModel.find({}, '_id');

        if (questionIds.length > 0) {
            res.status(200).json(questionIds);
        } else {
            res.status(404).json({ message: "No question IDs found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//get questions by id

const getQuestionById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;

        // Find the question by ID and populate the options
        const question = await QuestionModel.findById(id).populate('options');

        if (question) {
            res.status(200).json(question);
        } else {
            res.status(404).json({ error: 'Question not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


 const getAllOptions = asyncHandler (async (req,res) => {
    
    const response2 = await OptionsModel.find({});

   if(response2) {
       res.status(201).json(response2);
   } else {
       res.status(200).json("no question found");
   }
 });


const getOptionDetailsById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;

        // Find the option by ID
        const option = await OptionsModel.findById(id);

        if (option) {
            res.status(200).json(option);
        } else {
            res.status(404).json({ error: 'Option not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const findQuestionById = asyncHandler(async (req, res) => {
    const questionId = req.params.id;

    try {
        const foundQuestion = await QuestionModel.findById(questionId).populate('options');

        if (!foundQuestion) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.status(200).json({
            message: 'Question found',
            question: foundQuestion
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const updateQuestionWithOptionsById = asyncHandler(async (req, res) => {
    const { id } = req.params; // Get the ID from request parameters
    const { question, imgurl, options } = req.body;

    try {
        // Update Options
        const updatedOptions = await Promise.all(options.map(async (option) => {
            if (option._id) {
                // If the option has an ID, update it
                await OptionsModel.findByIdAndUpdate(option._id, option);
                return option._id; // Return the ID
            } else {
                // If the option doesn't have an ID, create it
                const createdOption = await OptionsModel.create(option);
                return createdOption._id; // Return the ID
            }
        }));

        // Update Question
        const updatedQuestion = await QuestionModel.findByIdAndUpdate(id, {
            question,
            imgurl,
            options: updatedOptions,
            questionId: '' // Assuming you need to set questionId
        }, { new: true });

        if (!updatedQuestion) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.status(200).json({
            message: 'Question updated successfully',
            question: updatedQuestion
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// delete question by id
const deleteQuestionById = async (req, res) => {

    const { id } = req.params;
    
    try {
        // Find the question by ID and delete it
        const deletedQuestion = await QuestionModel.findByIdAndDelete(id);
    
        if (!deletedQuestion) {
          return res.status(404).json({ error: 'Question not found' });
        }
    
        // Delete associated options
        await OptionsModel.deleteMany({ _id: { $in: deletedQuestion.options } });
    
        res.status(200).json({ message: 'Question and associated options deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

module.exports = {
    createQuestionWithOptions,
    getAllQuestions,
    getAllOptions,
    getOptionDetailsById,
    getQuestionById,
    getAllQuestionIds,
    findQuestionById,
    updateQuestionWithOptionsById,
    deleteQuestionById

};
