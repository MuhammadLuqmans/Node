const { ApolloServer, gql } = require('apollo-server');

//this is a data 

const students = [
    {
        "id": 1,
      "Name": 'Muhammad Luqman',
      "Email": 'luqmanaslam0303@gmail.com',
      "Age" : 20
    },
    {
        "id": 2,
        "Name": 'Muhammad Usman',
        "Email": 'Usmanaslam0303@gmail.com',
        "Age" : 25
      },
      {
          "id": 3,
        "Name": 'Muhammad Awais',
        "Email": 'Awaisaslam0303@gmail.com',
        "Age" : 16
      },
  ];
  //Resolver
  const resolvers = {
    Query: {
      students: () => students,
    },
  };
// this is Schema in Apollo server
const typeDefs = gql`

  type Student {
    id: Int
    Name: String
    Email: String
    Age : Int
  }


  type Query {
    students: [Student]
  }
`;

    // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});