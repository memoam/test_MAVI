import Data from '../models/Data';

export const createData = async (req, res) => {
  const { names, lastNameFirst, lastNameSecond, addres, email } = req.body;
  const newData = new Data({
    names,
    lastNameFirst,
    lastNameSecond,
    addres,
    email,
  });
  const dataSaved = await newData.save();
  res.status(201).json(dataSaved);
};

export const getData = async (req, res) => {
  const data = await Data.find();
  res.status(201).json(data);
};

export const getDataByID = async (req, res) => {
  const { dataId } = req.params;
  const data = await Data.findById(dataId);
  res.status(200).json(data);
};

export const updateDataByID = async (req, res) => {
  const { dataId } = req.params;
  const updateddata = await Data.findByIdAndUpdate(dataId, req.body, {
    new: true,
  });
  res.status(200).json(updateddata);
};

export const deleteDataByID = async (req, res) => {
  const { dataId } = req.params;
  await Data.findByIdAndDelete(dataId);
  res.status(204).json();
};
