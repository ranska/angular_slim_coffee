describe "appService", ->
	beforeEach module 'app'

	beforeEach ->
    true

	it 'should get people', inject ['duduService', (duduService) ->
    expect(true).toBe(true)
    expect(duduService.tata()).toBe('imim')
    console.log 'duie'
  ]
