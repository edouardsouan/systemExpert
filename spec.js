var ExpertSystem = require('./index.js');
var expect = require('chai').expect;

describe ("ExpertSystem", function () {
    var expertSystem;

    beforeEach(function () {
        expertSystem = new ExpertSystem();
    });

    it("should exist", function () {
            expect(expertSystem).to.be.an('object');
        }
    );

    it("should be able to add a fact", function () {
            expertSystem.addFact("A");
            expect(expertSystem.CountFact()).to.equal(1);

        }
    );

    it("should be able to add a range", function () {
            var listFact = ["A", "B", "C", "D", "E", "F"];
            expertSystem.addFactRange(listFact);
            expect(expertSystem.CountFact()).to.equal(6);

        }
    );
	
	it("should be able to set a fact to true", function()
		{
				expertSystem.addFact("A");
				expertSystem.setFact("A",true);
				
				expect(expertSystem.getFactValue("A")).to.equal(true);
		
		});
	
	it("should be able to set a rule",function()
		{
		 expertSystem.AddRule(["A","B"],"C");
		 expect(expertSystem.CountFact()).to.equal(3);
		 expect(expertSystem.CountRule()).to.equal(1);
		 
		});
		
	it ("should be able to infer forward", function()
		{
			expertSystem.addRule(["A","B"],"C");
			expertSystem.setFactValue("A",true);
			expertSystem.setFactValue("B",true);
			
			var infered = expertSystem.inferForward();
			
			expect(_.isEqual(infered,["C"])).to.equal(true);
			expect (expertSystem.getFactValue("C")).to.equal(true);
		});
		
	it("should be able to chain multiple rules", function()
		{
			expertSystem.addRule(["C"],"D");
			expertSystem.addRule(["A","B"], "C");
			expertSystem.setFactValue("A",true);
			expertSystem.setFactValue("B",true);
			
			var infered = expertSystem.inferForward();
			expect(_.isEqual(infered,["C","D"])).to.equal(true);
			
		});
		
	
});