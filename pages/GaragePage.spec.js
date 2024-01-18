import { test, expect } from '@playwright/test';

export default class GaragePage {
  constructor(page) {
    this.page = page;
    this.locators = {
      addCarButton: 'button.btn-primary',
      brandDropdown: '#addCarBrand',
      porscheOption: 'select#addCarBrand option:text-is("Porsche", {exact:true})',
      modelDropdown: '#addCarModel',
      porscheOption: 'select#addCarBrand option:text-is("Panamera", {exact:true})',
      mileageInput: '#addCarMileage',
      addButton: '[type="button"].btn-primary',
      addFuelExpenseButton: 'button:has-text("Add fuel expense")',
      mileageExpenseInput: '[name="mileage"]',
      numberOfLitersInput: '#addExpenseLiters',
      totalCostInput: '#addExpenseTotalCost',
      expensesTable: '#table.expenses_table',
      mileageExpenseTableValue: 'tr>td:nth-child(2)',
      litersUsedTableValue: 'tr>td:nth-child(3)',
      totalCostTableValue: 'tr>td:nth-child(4)',
      deleteIcon: 'button.btn-delete',
      removeButton: '[type="button"].btn-danger',
      garageTab: '.sidebar [href="/panel/garage"]',
      iconEdit: '.icon-edit',
      removeCarButton: '[type="button"].btn-outline-danger'
    };
  }

  async openAddCarModal() {
    await this.page.click(this.locators.addCarButton);
  }

  async openBrandDropdown() {
    await this.page.click(this.locators.brandDropdown);
  }

  async selectPorscheOption() {
    await this.page.selectOption(this.locators.brandDropdown, { value: '3: 4' });
  }

  async selectedBrandCheck() {
    await expect(this.page.locator(this.locators.brandDropdown)).toHaveValue("3: 4");
  }

  async openModelDropdown() {
    await this.page.click(this.locators.modelDropdown);
  }

  async selectPanameraOption() {
    await this.page.selectOption(this.locators.modelDropdown, { value: '7: 18' });
  }

  async selectedModelCheck() {
    await expect(this.page.locator(this.locators.modelDropdown)).toHaveValue("7: 18");
  }

  async fillOutMileageInput() {
    await this.page.fill(this.locators.mileageInput, '1500');
  }

  async mileageInputValueCheck() {
    await expect(this.page.locator(this.locators.mileageInput)).toHaveValue('1500');
  }

  async addCar() {
    await this.page.click(this.locators.addButton);
  }

  async openFuelExpenseModal() {
    await this.page.click(this.locators.addFuelExpenseButton);
  }

  async fillOutMileageExpenseInput() {
    await this.page.click(this.locators.mileageExpenseInput);
    await this.page.fill(this.locators.mileageExpenseInput, '1600');
  }
 

  async mileageExpenseValueCheck() {
    await expect(this.page.locator(this.locators.mileageExpenseInput)).toHaveValue('1600');
  }


  async fillOutnumberOfLitersInput() {
    await this.page.fill(this.locators.numberOfLitersInput, '2000');
  }

  async numberOfLitersValueCheck() {
    await expect(this.page.locator(this.locators.numberOfLitersInput)).toHaveValue('2000');
  }

  async fillOutTotalCostInput() {
    await this.page.fill(this.locators.totalCostInput, '20000');
  }

  async totalCostValueCheck() {
    await expect(this.page.locator(this.locators.totalCostInput)).toHaveValue('20000');
  }

  async verifyMileageExpenseTableValue() {
    await expect(this.page.locator(this.locators.mileageExpenseTableValue)).toContainText('1600');
  }


  async verifylitersUsedTableValue() {
    await expect(this.page.locator(this.locators.litersUsedTableValue)).toContainText('2000L');
  }



  async verifyTotalCostTableValue() {
    await expect(this.page.locator(this.locators.totalCostTableValue)).toContainText('20000.00 USD');
  }

  async addFuelExpense() {
    await this.page.click(this.locators.addButton);
  }


  async removeCarAndExpenses() {
    await this.page.click(this.locators.totalCostTableValue);
    await this.page.click(this.locators.deleteIcon);
    await this.page.click(this.locators.removeButton);
    await this.page.click(this.locators.garageTab);
    await this.page.click(this.locators.iconEdit);
    await this.page.click(this.locators.removeCarButton);
    await this.page.click(this.locators.removeButton);
  }
}