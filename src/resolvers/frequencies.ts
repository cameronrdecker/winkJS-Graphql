
const frequencies = (doc, its, as, fields) => {
    //const frequencies = doc.tokens().filter((t)=>(  t.out( its.stopWordFlag ) === false && t.out( its.pos ) == 'VERB' )).out(its.value, as.freqTable).map((f)=>{
    const frequencies = doc.tokens().out(its.value, as.freqTable).map((f)=>{
        const length = doc.tokens().length();

        return {
            value: f[0],
            absolute_frequency: f[1],
            mean_frequency: ((f[1] / length) * 100000).toFixed(2)
        }
    });

    return frequencies.sort((a,b) => { a.frequency > b.frequency ? 1 : -1});
}

export default frequencies;