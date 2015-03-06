describe ("ExpertSystem", function ()
{
	var expertSystem;
	
	beforeEach(
		function()
		{
			expertSystem = new ExpertSystem();
		}
	)
	
	it ("should exist", function()
		{
			expect(expertSystem).toBeTruthy();
		}
	)
	
	it ("should be able to add a fact", function()
		{
			expertSystem.addFact("A");
			expect(expertSystem.CountFact()).toBe(1);
			
		}	
	)
	
	it("should be able to add a range", function()
		{
			listFact[] = {"A","B","C","D","E","F"};
			expertSystem.addFactRange(listFact);
			expect(expertSystem.CountFact()).toBe(6);
			
		}
	)