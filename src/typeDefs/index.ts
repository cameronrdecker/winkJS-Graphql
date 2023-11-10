const typeDefs = `#graphql

  type Document {
    sentences: [String]
    entities: [String]
    tokens: [Token]
  }

  type Token {
    token: String
    stem: String
    lemma: String
    pos: String
    type: String
  }

  type Query {
    Document(rawText: String): Document
  }
`;

export default typeDefs;