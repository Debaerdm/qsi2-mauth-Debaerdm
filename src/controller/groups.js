const { Groups } = require('../model');

const createGroup = ({title, description, metadata}, {id}) =>
  Groups.create({
    title,
    description,
    metadata,
    ownerId: id
  });

const findAllGroups = () => Groups.findAll();

const addUserToGroup = ({groupId, userId}) =>
  Groups.findOne({
    where: { id: groupId }
  }).then(group =>
    group ? group.addUser(userId) : Promise.reject(new Error('Group not found'))
  );

const removeUserFromGroup = ({ groupId, userId }) =>
  Groups.findOne({
    where: { id: groupId },
  }).then(group =>
    group
      ? group.removeUser(userId)
      : Promise.reject(new Error('Group not found'))
  );

module.exports = { createGroup, findAllGroups, addUserToGroup, removeUserFromGroup };