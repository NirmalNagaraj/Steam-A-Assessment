import * as userModel from '../models/users.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const result = await userModel.getAllUsers();
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const result = await userModel.getUserById(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const result = await userModel.createUser(req.body);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const result = await userModel.updateUser(req.params.id, req.body);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const result = await userModel.deleteUser(req.params.id);
    if (result.rows.length === 0) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json({ message: 'User deleted successfully' });
    }
  } catch (error) {
    next(error);
  }
};