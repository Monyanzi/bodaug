from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the blog page
        page.goto("http://localhost:8080/blog")

        # 2. Click on the "Cultural Stories" filter
        page.get_by_role("button", name="Cultural Stories").click()

        # 3. Verify that only the "Why the Name Boda?" article is visible and take a screenshot
        article_element = page.get_by_text("Why the Name Boda?")
        article_element.scroll_into_view_if_needed()
        expect(article_element).to_be_visible()
        expect(page.get_by_text("Cultural Etiquette 101")).not_to_be_visible()
        page.screenshot(path="jules-scratch/verification/blog-filtered.png")

        # 4. Click on the "All Stories" filter
        page.get_by_role("button", name="All Stories").click()

        # 5. Verify that all articles are visible and take a screenshot
        page.get_by_text("Why the Name Boda?").scroll_into_view_if_needed()
        expect(page.get_by_text("Why the Name Boda?")).to_be_visible()
        expect(page.get_by_text("Cultural Etiquette 101")).to_be_visible()
        page.screenshot(path="jules-scratch/verification/blog-all.png")

        # 6. Navigate to the home page
        page.goto("http://localhost:8080/")

        # 7. Click on the "Why the name Boda?" card
        page.get_by_text("Why the name Boda?").click()

        # 8. Verify that the URL is correct
        expect(page).to_have_url("http://localhost:8080/blog/why-boda")
        page.screenshot(path="jules-scratch/verification/why-boda-page.png")

        browser.close()

if __name__ == "__main__":
    run_verification()
