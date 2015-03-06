function ExpertSystem() {
    var facts = [];
    function addFact(label) {
        facts.push(label);
    }

    function CountFact() {
        return facts.length;
    }

    function addFactRange(list) {
        for(var item in list){
            facts.push(item);
        }
    }


    return Object.create({
        addFact: addFact,
        CountFact: CountFact,
        addFactRange: addFactRange
    });
}

module.exports = ExpertSystem;