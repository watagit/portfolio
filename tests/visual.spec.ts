import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";

/**
 * Visual regression tests for the portfolio website
 * Screenshots are captured and compared using Argos CI
 */

const pages = [
	{ name: "Home", path: "/" },
	// Add more pages here as needed
	// { name: "About", path: "/about" },
	// { name: "Projects", path: "/projects" },
];

const viewports = [
	{ name: "Desktop", width: 1920, height: 1080 },
	{ name: "Tablet", width: 768, height: 1024 },
	{ name: "Mobile", width: 375, height: 667 },
];

for (const page of pages) {
	for (const viewport of viewports) {
		test(`${page.name} - ${viewport.name}`, async ({ page: playwrightPage }) => {
			await playwrightPage.setViewportSize({
				width: viewport.width,
				height: viewport.height,
			});

			await playwrightPage.goto(page.path);

			// Wait for page to be fully loaded
			await playwrightPage.waitForLoadState("networkidle");

			// Take screenshot with Argos
			await argosScreenshot(playwrightPage, `${page.name}-${viewport.name}`);
		});
	}
}
