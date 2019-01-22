module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define(
    'Groups',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        comment: 'Group ID',
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        comment: 'Group title',
        // setter to standardize
        set(val) {
          this.setDataValue('title', val.charAt(0).toUpperCase() + val.substring(1).toLowerCase());
        }
      },
      description: {
        type: DataTypes.STRING,
        comment: 'Group description',
        // setter to standardize
        set(val) {
          this.setDataValue('description', val.charAt(0).toUpperCase() + val.substring(1).toLowerCase());
        }
      },
      metadata: {
        type: DataTypes.JSON,
        comment: 'Group metadata'
      },
    },
    {
      // logical delete over physical delete
      paranoid: true,
      indexes: [
        {
          unique: true,
          fields: ['title']
        }
      ]
    }
  );

  return Groups;
};
