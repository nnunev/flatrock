
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType, GraphQLBoolean } = require('graphql');
const User = require('../models/User')
const Permission = require('../models/Permission')

//User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    status: { type: GraphQLString },
    usergroup: { type: GraphQLString },
    permissions: {
      type: PermissionType,
      resolve(parent, args) {
        return Permission.find(permission => permission.id === parent.permissionId)
      }
    }
  })
});
//Permission Type
const PermissionType = new GraphQLObjectType({
  name: 'Permission',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    permissions: {
      type: new GraphQLList(PermissionType),
      resolve(parent, args) {
        return Permission.find();
      }
    },
    permission: {
      type: PermissionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Permission.findById(args.id);
      },
    },
  }
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a user
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString), defaultValue: 'y' },
        usergroup: { type: new GraphQLNonNull(GraphQLString), defaultValue: 'User' },
      //  permissions: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          status: args.status,
          usergroup: args.usergroup,
          //permissions: args.permissions
        });
        return user.save();
      },
    },
    // Delete a user
    deleteUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },
   
    addPermission: {
      type: PermissionType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
      },
      resolve(parent, args) {
        const permission = new Permission({
          name: args.name,
          description: args.description,
        });
        return permission.save();
      },
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})

