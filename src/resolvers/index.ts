import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-model';
import tokenize from './tokens.js';
import sentences from './sentences.js'
import frequencies from './frequencies.js';
import graphqlFields from 'graphql-fields';
const nlp = winkNLP(model);

const its = nlp.its;

const as = nlp.as;

const resolvers = {
    Query: {
      Document: (_, args, __, info) => {
        const doc = nlp.readDoc(args.rawText);
        const fields = graphqlFields(info);

        return {
          value: fields.value !== undefined ? doc.out(its.value) : null,
          normal: fields.normal !== undefined ?doc.out(its.normal) : null,
          span: fields.span !== undefined ? doc.out(its.span) : null,
          isNegated: fields.isNegated !== undefined ? doc.out(its.negationFlag) : null,
          sentences: fields.sentences !== undefined ?  sentences(doc, its, as, fields) : null,
          entities: fields.entities !== undefined ? doc.entities().out() : null,
          tokens: fields.tokens !== undefined ? tokenize(doc, its, as, fields) : null,
          frequencies: fields.frequencies !== undefined ? frequencies(doc, its, as, fields) : null,
        };
      },
    },
  };


export default resolvers;