
/// <reference types="cypress" />

describe ("Testando funcionalidades do formulário", () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/");
    })


    it('Insere dados no formulário (INCLUSÃO)', () => {
        cy.get('[type="text"]')
          .type("Raphael Bouças")
          .should("have.value", "Raphael Bouças");
        cy.get('[type="email"]')
          .type("email@gmail.com")
          .should("have.value", "email@gmail.com");
        cy.get('[type="tel"]')
          .type("21-9999-99999")
          .should("have.value", "21-9999-99999");;
        cy.get(".adicionar").click();
    })

    it("Edita dados no formulário (ALTERAÇÃO)", () => {
        cy.wait(500)
        cy.get("#root > div > div > div").should("have.length.greaterThan", 0);
      cy.get("#root > div > div > div")
      .its("length")
      .then((l) => cy.get(`:nth-child(${l}) > .sc-gueYoa > .edit`).click());
        cy.wait(1000)
              cy.get('[type="text"]')
                .type("{selectAll}{del}")
                .type("EDITADORaphael Bouças")
                .should("have.value", "EDITADORaphael Bouças");
              cy.get('[type="email"]')
                .type("{selectAll}{del}")
                .type("EDITADOemail@gmail.com")
                .should("have.value", "EDITADOemail@gmail.com");
              cy.get('[type="tel"]')
                .type("{selectAll}{del}")
                .type("21-8888-88888")
                .should("have.value", "21-8888-88888");
              cy.get(".alterar").click();

    });

        it("Deleta os dados no formulário (REMOÇÃO)", () => {
          cy.wait(500);
          cy.get("#root > div > div > div").should(
            "have.length.greaterThan",
            0
          );
          cy.get("#root > div > div > div")
            .its("length")
            .then((l) =>
              cy.get(`:nth-child(${l}) > .sc-gueYoa > .delete`).click()
            );
          // cy.wait(1000);
          // cy.get('[type="text"]')
          //   .type("{selectAll}{del}")
          //   .type("EDITADORaphael Bouças")
          //   .should("have.value", "EDITADORaphael Bouças");
          // cy.get('[type="email"]')
          //   .type("{selectAll}{del}")
          //   .type("EDITADOemail@gmail.com")
          //   .should("have.value", "EDITADOemail@gmail.com");
          // cy.get('[type="tel"]')
          //   .type("{selectAll}{del}")
          //   .type("21-8888-88888")
          //   .should("have.value", "21-8888-88888");
          // cy.get(".alterar").click();
        });


})