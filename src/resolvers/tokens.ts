
const tokenize = (doc, its, fields) => {
    var tokens = []; 

    doc.tokens().each((t)=>{
        tokens.push( {
        value: fields.tokens.value !== undefined ? t.out(its.value) : null,
        stem: fields.tokens.stem !== undefined ?  t.out(its.stem) : null,
        lemma: fields.tokens.lemma !== undefined ?  t.out(its.lemma) : null,
        pos: fields.tokens.pos !== undefined ?  t.out(its.pos) : null,
        type: fields.tokens.type !== undefined ? t.out(its.type) : null
        })
    })

    return tokens;
}

export default tokenize;