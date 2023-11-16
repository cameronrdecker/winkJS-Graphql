const typeDefs = `#graphql

  type Document {
    value: String
    normal: String
    span: [Int]
    token_totals: Totals
    isNegated: Boolean
    sentences: [Sentence]
    entities: [String]
    tokens: [Token]
    frequencies: [Frequency]
  }

  type Totals{
    value: Int
    stem: Int
    lemma: Int
    normal: Int
  }

  type Frequency{
    value: String
    absolute_frequency: Int
    mean_frequency: Float
  }

  type Token {
    id: Int
    value: String
    stem: String
    lemma: String
    pos: String
    type: String
    shape: String
    normal: String
    case: String
    isStopWord: Boolean
    isNegated: Boolean
    isContraction: Boolean
  }

  type Sentence {
    value: String,
    normal: String
    span: [Int]
    isNegated: Boolean
  }

  type Query {
    Document(rawText: String): Document
  }
`;

export default typeDefs;