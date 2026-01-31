const HouseModel = require("../model/Som-Rentals");

// Create a new user 
const createHouse = async (req, res) => {
    try {

        let dateInput = req.body.dateTime;

        if (dateInput && dateInput.includes('/')) {
            const parts = dateInput.split('/');
            dateInput = `${parts[2]}-${parts[1]}-${parts[0]}`;
        }
        const NewHouse = await HouseModel.create({
            title: req.body.title,
            pricePerMonth: req.body.pricePerMonth,
            location: req.body.location,
            bedrooms: req.body.bedrooms,
            image: req.file.filename,
            description: req.body.description,
            email: req.body.email,
            dateTime: new Date(dateInput)
        })
        res.status(201).json(NewHouse);
    } catch (err) {
        res.status(400).json({ message: "Cilad ayaa dhacday: " + err.message });
    }
}

// Read all users

const ReadAllHouses = async (req, res) => {
    try {
        const AllHouses = await HouseModel.find();
        res.status(200).json(AllHouses);
    } catch (err) {
        res.status(400).json({ message: "Cilad ayaa dhacday: " + err.message });
    }
}

// update user

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        let dataToUpdate = { ...req.body };
        if (req.file) {
            dataToUpdate.image = req.file.filename;
        }
        const updatedHouse = await HouseModel.findByIdAndUpdate(id, dataToUpdate, { new: true });
        if (!updatedHouse) {
            return res.status(404).json({ message: "Guriga lama helin!" });
        }
        res.status(200).json(updatedHouse);
    } catch (err) {
        res.status(400).json({ message: "Cilad ayaa dhacday: " + err.message });
    }
}

// delete user

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await HouseModel.findByIdAndDelete(id);

        if (!deleteUser) {
            return res.status(404).json({ message: "Guriga lama helin!" });
        } 
        res.status(200).json(deleteUser);
    } catch (err) {
        res.status(400).json({ message: "Cilad ayaa dhacday: " + err.message });
    }
}


module.exports = {
    createHouse,
    ReadAllHouses,
    updateUser,
    deleteUser
}