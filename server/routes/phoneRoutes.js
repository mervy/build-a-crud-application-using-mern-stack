const express = require('express');
const PhoneBook = require('../model/PhoneBook');
const router = express.Router();

router.get('/get-phones', async (req, res) => {
    const phoneNumbers = await PhoneBook.find({})
    try {
        res.status(200).json({
            status: "Success in showing the number phones",
            data: {
                phoneNumbers
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed in showing the number phones',
            message: error
        })
    }
});

router.post('/add-phone', async (req, res) => {
    const phoneNumber = new PhoneBook(req.body)
    try {
        await phoneNumber.save()
        res.status(201).json({
            status: 'Success in insert phoneNumber',
            data: {
                phoneNumber
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed in insert phoneNumber',
            message: error
        })
    }
});

router.patch('/update-phone/:id', async (req, res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    try {
        res.status(200).json({
            status: 'Success in update number phone',
            data: {
                updatedPhone
            }
        })
    } catch (error) {
        console.log(error)
    }
});

router.delete('/delete-phone/:id', async(req, res) =>{
    await PhoneBook.findByIdAndDelete(req.params.id);

    try {
        res.status(204).json({
            status: "Success in deleting number phone",
            data: {}
        })
    } catch (error) {
        res.status(500).json({
            status: 'Failed in deleting number phone',
            message: error
        })
    }
})

module.exports = router;