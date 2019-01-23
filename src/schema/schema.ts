import * as graphql from 'graphql';
import * as _ from 'lodash';

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const books = [
  { name: 'Book_001', genre: 'Fantasy', id: '1' },
  { name: 'Book_002', genre: 'Fantasy', id: '2' },
  { name: 'Book_003', genre: 'Sci-Fi', id: '3' }
];

const authors = [
  { name: 'Author_001', age: 42, id: '1' },
  { name: 'Author_002', age: 44, id: '2' },
  { name: 'Author_003', age: 65, id: '3' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    genre: {
      type: GraphQLString
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});
