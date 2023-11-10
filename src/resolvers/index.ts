import winkNLP from 'wink-nlp';
// Load english language model — light version.
import model from 'wink-eng-lite-model';
// Instantiate wink-nlp.
const nlp = winkNLP(model);

const its = nlp.its;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      Document: (parent, args, contextValue, info) => {
        var doc = nlp.readDoc(args.rawText);

        var tokens = []; 
        
        doc.tokens().each((t)=>{
          tokens.push( {
            token: t.out(its.value),
            stem: t.out(its.stem),
            lemma: t.out(its.lemma),
            pos: t.out(its.pos),
            type: t.out(its.type)
          })
        })

        return {
          sentences: doc.sentences().out(),
          entities: doc.entities().out(),
          tokens: tokens
        };
      },
    },
  };


export default resolvers;