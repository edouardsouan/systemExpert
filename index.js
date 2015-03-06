function ExpertSystem() {
    var facts = [];
    function addFact(label) {
        facts.push(label);
    }

    function countFact() {
        return facts.length;
    }


    return Object.create({
        addFact: addFact,
        countFact: countFact
    });
}

module.exports = ExpertSystem;