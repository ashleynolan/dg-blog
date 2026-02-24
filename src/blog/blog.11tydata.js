module.exports = {
    eleventyComputed: {
        permalink: (data) => {
            // Post url fields are bare slugs (no slashes).
            // Eleventy's own page.url always contains slashes, so this
            // safely targets only front-matter url fields.
            const slug = data.url;
            if (typeof slug === 'string' && !slug.includes('/')) {
                return `/blog/${slug}.html`;
            }
            return undefined; // preserve default permalink for index.hbs etc.
        }
    }
};
