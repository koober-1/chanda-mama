<?php

namespace App\Services;

class ProductDescriptionService
{
    /**
     * Build the full prompt string based on product context and custom prompt.
     *
     * @param array $productContext
     * @param string|null $customPrompt
     * @return string
     */
    public function buildPrompt(array $productContext, ?string $customPrompt): string
    {
        $contextJson = json_encode($productContext, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

        if (!empty($customPrompt)) {
            $productName = $productContext['name'] ?? 'Product';
            $category = $productContext['category'] ?? '';
            $structure = !empty($productContext['has_variants']) ? 'Product with multiple variants' : 'Single product (no variants)';

            return <<<PROMPT
You are an expert e-commerce copywriter, merchandiser, and SEO specialist.
Write high-converting, professional, and SEO-optimized e-commerce content adhering strictly to the user's custom prompt and product details below.

USER'S CUSTOM PROMPT / INSTRUCTIONS:
{$customPrompt}

REQUIRED PRODUCT INFORMATION:
- Product Name: {$productName}
- Category: {$category}
- Product Structure: {$structure}

FULL PRODUCT CONTEXT:
{$contextJson}

INSTRUCTIONS FOR OUTPUT:
Based on the custom prompt and product information:
1. "description": Write an engaging, detailed, professional HTML-formatted product description. Use <h3> headings, <p> paragraphs, and <ul><li> bullet points. Accurately reflect whether this is a single product or has multiple variants. Do NOT wrap inside markdown backticks.
2. "highlights": Key product highlights formatted strictly as an HTML unordered list (<ul><li>...</li></ul>).
3. "meta_title": Engaging SEO Meta Title (maximum 60 characters).
4. "meta_keywords": Comma-separated relevant SEO keywords.
5. "meta_description": Compelling SEO Meta Description (maximum 160 characters).
6. "schema_markup": Valid JSON-LD schema markup script for this Product (including "@context": "https://schema.org", "@type": "Product", "name", "description").

Respond STRICTLY with a valid JSON object matching this structure:
{
    "description": "HTML formatted detailed product description",
    "highlights": "HTML formatted product highlights (<ul><li>...</li></ul>)",
    "meta_title": "SEO Meta Title",
    "meta_keywords": "comma separated keywords",
    "meta_description": "SEO Meta Description",
    "schema_markup": "Valid JSON-LD schema markup"
}
Do not output any explanatory text or markdown code blocks like ```json. Return ONLY the raw JSON.
PROMPT;
        }

        return <<<PROMPT
You are an expert PREMIUM E-COMMERCE PRODUCT DESCRIPTION WRITER who can understand and write descriptions for ANY type of product sold in a modern multi-category e-commerce marketplace.

IMPORTANT:
This marketplace can contain products ranging from very small everyday items to premium and highly technical products.
Never assume that the product belongs to only common categories such as fashion, jewellery or electronics. The product can literally be ANYTHING.

UNIVERSAL PRODUCT UNDERSTANDING
Before writing the description, carefully identify:
1. What the product is
2. What category it belongs to
3. What the product is used for
4. Who is likely to use it
5. Its important characteristics
6. Its practical benefits
7. Where and when it can be used
8. What makes it useful, attractive, convenient or enjoyable
9. Whether it is an everyday-use item, children's product, household item, accessory, professional product, hobby item, etc.

Do NOT force every product into a predefined template. The description style must automatically adapt according to the actual product.

SMALL & SIMPLE PRODUCTS
Do NOT treat a small or inexpensive product as an unimportant product. Make the description detailed through meaningful explanation — NOT meaningless repetition. NEVER invent specifications or characteristics that were not provided.

CHILDREN'S PRODUCTS & TOYS
For children's products, adapt the description toward: play experience, creativity, learning potential (only if supported), activities, family interaction, gifting suitability, indoor/outdoor usage, design and appearance, fun and engagement. Do NOT make safety claims unless explicitly supported.

EVERYDAY / LOW-COST PRODUCTS
Focus on practical usefulness, convenience, ease of use, everyday situations, product experience, suitable environments, potential users, storage, handling, durability (only if provided), design/appearance, value of the product's functionality.

HIGH-END PRODUCTS
Use a more sophisticated and refined tone. Focus on craftsmanship, design, experience, functionality, finish, lifestyle relevance, presentation, gifting, occasion suitability (only when supported).

DESCRIPTION LENGTH & DETAILS
The final description MUST contain at least 500 words. Target 600-800 words. Explain what the product does, what it is used for, who it is for (age groups, specific users like children, women, men, etc. especially if applicable). Never reach 500 words by repeating the same sentence. Expand content using relevant aspects of the product experience and use-cases.

EMOJIS
Use approximately 6-12 relevant emojis naturally throughout the description to improve visual readability and make the description feel modern. Do not put emojis in every sentence.

FACTUAL ACCURACY
NEVER invent information like material, size, weight, dimensions, age range, ingredients, certifications, warranty, country of origin, safety certifications, durability, waterproofing, battery life, performance, medical benefits, health benefits, compatibility, technical specifications. Note: The "available_stock_quantity" provided is our inventory stock, not the pack size of the product.
If the product has multiple variants (provided in the "variants" array), mention the different available measurements, prices, and available stock quantities in the description so the customer knows their options. Each variant can have a different measurement, price, and stock.

Now, based on the following product details:
{$contextJson}

Respond STRICTLY with a valid JSON object matching this structure:
{
    "description": "HTML formatted detailed product description (500+ words). Structure: <h2> or <h3> headers, then <p> paragraphs, <ul><li> bullets. Important: no code blocks, no markdown outside HTML.",
    "highlights": "HTML formatted product highlights, like <ul><li> bullet points of key features.",
    "meta_title": "SEO Meta Title (max 60 chars)",
    "meta_keywords": "comma separated SEO keywords",
    "meta_description": "SEO Meta Description (max 160 chars)",
    "schema_markup": "Valid JSON-LD schema markup script for a Product."
}
Do not output any explanatory text or markdown blocks like ```json. Return only the raw JSON.
PROMPT;
    }
}
