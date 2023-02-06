describe('UnitTesting of Aqms FrontEnd', () => {

  it('Localhost - Test1', () => {
     cy.request('http://localhost:3000/')
    .should((response) => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers')
      
 
    })
  })

  it('CarbonDioxideData Component-Test2', () => {
    cy.visit('http://localhost:3000/carbondioxide')
    cy.get('h2').should('contain.text','Air Quality Monitor CarbonDioxide Data')
    cy.get('button').should('contain.text','CarbonDioxide Data')
      
  });

  it('CarbonDioxideData API-Test3', () => {
      cy.request('http://localhost:3000/carbondioxide')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  });

  it('Data List Component-Test4', () => {
    cy.visit('http://localhost:3000/list')
    cy.get('h2').should('contain.text','Air Quality Monitor Data List')
    cy.get('button').should('contain.text','Data List')
      
  });

  it('Data List API-Test5', () => {
      cy.request('http://localhost:3000/list')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  });

  it('Invalid CarbonDioxide Data Component-Test6', () => {
    cy.visit('http://localhost:3000/invalidcarbondioxide')
    cy.get('h2').should('contain.text','Air Quality Monitor Invalid CarbonDioxide Data')
    cy.get('button').should('contain.text','Invalid CarbonDioxide Data')
      
  });

  it('Invalid CarbonDioxide Data API-Test7', () => {
      cy.request('http://localhost:3000/invalidcarbondioxide')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  });

  it('Invalid Data Component-Test8', () => {
    cy.visit('http://localhost:3000/invaliddata')
    cy.get('h2').should('contain.text','Air Quality Monitor Invalid Data')
    cy.get('button').should('contain.text','Invalid Data')
      
  });

  it('Invalid Data API-Test9', () => {
      cy.request('http://localhost:3000/invaliddata')
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  });
})