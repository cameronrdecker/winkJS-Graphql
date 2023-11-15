
const tokenize = (doc, its, as, fields) => {
    var tokens = []; 

    doc.tokens().each((t)=>{

        tokens.push({
        id: fields.tokens.id !== undefined ? t.out(its.uniqueId) : null,
        value: fields.tokens.value !== undefined ? t.out(its.value) : null,
        stem: fields.tokens.stem !== undefined ?  t.out(its.stem) : null,
        lemma: fields.tokens.lemma !== undefined ?  t.out(its.lemma) : null,
        pos: fields.tokens.pos !== undefined ?  t.out(its.pos) : null,
        type: fields.tokens.type !== undefined ? t.out(its.type) : null,
        shape: fields.tokens.shape !== undefined ? t.out(its.shape)  : null,
        normal: fields.tokens.normal !== undefined ? t.out(its.normal)  : null,
        case: fields.tokens.case !== undefined ? t.out(its.case)  : null,
        isStopWord: fields.tokens.isStopWord !== undefined ? t.out(its.stopWordFlag)  : null,
        isNegated: fields.tokens.isNegated !== undefined ? t.out(its.negationFlag)  : null,
        isContraction: fields.tokens.isContraction !== undefined ? t.out(its.contractionFlag)  : null,
        })
    })

    return tokens;
}

export default tokenize;