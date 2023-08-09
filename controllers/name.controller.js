
const Name = require('../models/name.model');

exports.createName = async (req, res) => {
    try {
        const newName = new Name({ name: req.body.name });
        await newName.save();
        res.status(201).json(newName);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create name' });
    }
};

exports.getNames = async (req, res) => {
    try {
        const names = await Name.find();
        res.status(200).json(names);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve names' });
    }
};

exports.getNameById = async (req, res) => {
    try {
        const name = await Name.findById(req.params.id);
        if (!name) {
            return res.status(404).json({ error: 'Name not found' });
        }
        res.status(200).json(name);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve name' });
    }
};

exports.updateName = async (req, res) => {
    try {
        const updatedName = await Name.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
        if (!updatedName) {
            return res.status(404).json({ error: 'Name not found' });
        }
        res.status(200).json(updatedName);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update name' });
    }
};

exports.deleteName = async (req, res) => {
    try {
        const deletedName = await Name.findByIdAndDelete(req.params.id);
        if (!deletedName) {
            return res.status(404).json({ error: 'Name not found' });
        }
        res.status(200).json({ message: 'Name deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete name' });
    }
};
