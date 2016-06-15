# How to use

- Use the [Shopify Theme gem](https://github.com/Shopify/shopify_theme) with Gulp
- Create a `config.yml` file using the `config.yml.example` file as a template. To get credentials, log into Shopify admin and then `Apps > Private Apps` section to setup key/password. Preferably set it up with a non-live theme.
- Go to `theme-output` directory and run `theme watch` in one console
- Run `gulp serve` in another console simultaneously
- Edit the site in the `src` folder, gulp should correctly compile them to the `theme-output` folder and the theme gem will upload them to Shopify
- Preview in the Preview theme option
- When you're happy, swap the non-live theme with the live theme and you're done!

😄
