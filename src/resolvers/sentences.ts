

const sentences = (doc, its, as, fields) => {
    var sentences = []; 

    doc.sentences().each((s)=>{
        sentences.push({
            value: fields.sentences.value !== undefined ? s.out(its.value) : null,
            normal: fields.sentences.normal !== undefined ? s.out(its.normal) : null,
            span: fields.sentences.span !== undefined ? s.out(its.span) : null,
            isNegated: fields.sentences.isNegated !== undefined ? s.out(its.negationFlag) : null,
        })
    })

    return sentences;
}

export default sentences;