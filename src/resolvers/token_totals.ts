import _ from 'lodash';

const token_totals = (doc, its, as, fields) => {

    return {
        value: fields.token_totals.value !== undefined ? doc.tokens().length() : null,
        stem: fields.token_totals.stem !== undefined ? _.uniq(doc.tokens().out(its.stem)).length : null,
        lemma: fields.token_totals.lemma !== undefined ? _.uniq(doc.tokens().out(its.lemma)).length : null,
        normal: fields.token_totals.normal !== undefined ? _.uniq(doc.tokens().out(its.normal)).length : null
    }
}

export default token_totals