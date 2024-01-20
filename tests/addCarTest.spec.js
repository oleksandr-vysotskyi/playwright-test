import { test, expect } from '@playwright/test';
import GaragePage from '../pages/GaragePage.spec.js';
import Login from '../pages/Login.spec.js';

test.describe('Add car & fueld expenses of Hillel QA Auto site', () => {
    test.afterEach('Remove added car and expenses', async ({ page }) => {
        const garagePage = new GaragePage(page);
        await garagePage.removeCarAndExpenses();
    });
        test('Add car & expenses @fast', async ({ page }) => {
            const garagePage = new GaragePage(page);
            const login = new Login({ page });

            await login.loginToSite();
            await garagePage.openAddCarModal();
            await garagePage.openBrandDropdown();
            await garagePage.selectPorscheOption();
            await garagePage.selectedBrandCheck();
            await garagePage.openModelDropdown();
            await garagePage.selectPanameraOption();
            await garagePage.selectedModelCheck();
            await garagePage.fillOutMileageInput();
            await garagePage.mileageInputValueCheck();
            await garagePage.addCar();
            await garagePage.openFuelExpenseModal();
            await garagePage.fillOutMileageExpenseInput();
            await garagePage.mileageExpenseValueCheck();
            await garagePage.fillOutnumberOfLitersInput();
            await garagePage.numberOfLitersValueCheck();
            await garagePage.fillOutTotalCostInput();
            await garagePage.totalCostValueCheck();
            await garagePage.addFuelExpense();
            await garagePage.verifyMileageExpenseTableValue();
            await garagePage.verifylitersUsedTableValue();
            await garagePage.verifyTotalCostTableValue();
        });
    });
