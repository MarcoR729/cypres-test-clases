describe('pruebas todo', () => {
    it('crear tarea', () => {
      cy.visit('https://todomvc.com/examples/react/#/')
      cy.get('.new-todo').type("sacar al perro{enter}")
    
    })
    it('Marcar tarea como completada', () => {
      cy.visit('https://todomvc.com/examples/react/#/')
      cy.get('.new-todo').type("limpiar la casa{enter}")
      cy.get('.toggle').click()
    })

    it('Desmarcar tarea completada', () => {
      cy.visit('https://todomvc.com/examples/react/#/')
      cy.get('.new-todo').type("limpiar la casa de mi abuela{enter}")
      cy.get('.toggle').click()
      cy.get('.toggle').click()
    })

  })