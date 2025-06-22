const User = require("../models/user-model");
const Contact = require("../models/contact-model");


// *-----------------------------
//     Get all The users Logic
// *-----------------------------

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length == 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        console.log(users);
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}



// *-----------------------------
//     Single User Edit logic
// *-----------------------------


const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

// *-----------------------------
//      User Update logic
// *-----------------------------

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne(
            { _id: id },
            {
                $set: updatedUserData,
            }
        );
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
};




// *-----------------------------
//      User Delete logic
// *-----------------------------


const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.status(200).json({ message: "User deleted successfully." });
    } catch (error) {
        next(error);
    }
};





// *-----------------------------
//     Get all The Contacts Logic
// *-----------------------------

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length == 0) {
            return res.status(404).json({ message: "No Contacts Found" });
        }
        console.log(contacts);
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};





// *-----------------------------
//       Delete Contacts logic
// *-----------------------------

const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Contact Deleted successfully." });
    } catch (error) {
        next(error);
    }
};



module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById };