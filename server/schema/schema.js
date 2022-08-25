
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType, GraphQLBoolean } = require('graphql');
const User = require('../models/User')
// const Permission = require('../models/Permission')

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
    // permisions: {
    //   type: PermisionType,
    //   resolve(parent, args) {
    //     return permisions.find(permision => permision.id === parent.permisionId)
    //   }
    // }
  })
});
//Permision Type
// const PermisionType = new GraphQLObjectType({
//   name: 'Permision',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     description: { type: GraphQLString },
//     status: { type: GraphQLString }
//   })
// });

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
    // permissions: new GraphQLList(PermisionType),
    // resolve(parent, args) {
    //   return Permission.find();
    // },
    // permission: {
    //   type: PermisionType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Permission.findById(args.id);
    //   },
    // },
  },
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
        //permisions: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        const user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          status: args.status,
          usergroup: args.usergroup,
          //permisions: args.permisions
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
    // Add a permission
    // addPermission: {
    //   type: Permission,
    //   args: {
    //     name: { type: new GraphQLNonNull(GraphQLString) },
    //     describtion: { type: new GraphQLNonNull(GraphQLString) },
    //     status: { type: new GraphQLNonNull(GraphQLBoolean) },
    //   },
    //   resolve(parent, args) {
    //     const permission = new Permission({
    //       name: args.name,
    //       describtion: args.describtion,
    //       status: args.status,
    //     });
    //     return permission.save();
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})

