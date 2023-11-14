import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-model';
import tokenize from './tokens.js';
import graphqlFields from 'graphql-fields';
const nlp = winkNLP(model);

const its = nlp.its;

const resolvers = {
    Query: {
      Document: (_, args, __, info) => {
        const doc = nlp.readDoc(args.rawText);
        const fields = graphqlFields(info);

        return {
          sentences: fields.sentences !== undefined ? doc.sentences().out() : null,
          entities: fields.entities !== undefined ? doc.entities().out() : null,
          tokens: fields.tokens !== undefined ? tokenize(doc, its, fields) : null
        };
      },
    },
  };


export default resolvers;