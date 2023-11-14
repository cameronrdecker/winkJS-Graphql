const typeDefs = `#graphql

  type Document {
    sentences: [String]
    entities: [String]
    tokens: [Token]
  }

  type Token {
    value: String
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