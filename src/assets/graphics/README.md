# Client marketing graphics

Sixteen social media graphics supplied by the client (originally published to their
public Facebook page). These are the brand reference for the site — logo lockup,
colour, tone of voice, and the only photography we have of the office and team.

## Why they live in `src/assets/` and not `public/`

Files here are only emitted if a page imports them, and Astro optimises them on the
way out (format conversion, resizing). Dropping 2.6 MB of source JPEGs into `public/`
would ship every one of them on every deploy whether or not anything references them.

Web-ready derivatives already cropped from these live in `public/images/`.

## Working with them

Every graphic has marketing copy baked into the image — headlines, phone numbers,
social icons. They can't be used as-is for web imagery. `public/images/storefront.jpg`
and `office-cards.jpg` were cropped out of `682739203…` and `682389048…` respectively
to isolate the usable photography (`office-cards.jpg` also has the old phone banner
cropped off its top edge).

Note the baked-in text is unreliable: it contains the old phone number and the ZIP typo documented
in the root README, and one graphic is stamped "TacTaxes 2023". Treat
`src/data/site.ts` as the source of truth for any fact, not these images.

## Rights

Client-owned marketing material, used for the client's own website. Several graphics
use stock photography licensed by whoever produced them — confirm licensing with the
client before reusing those images in new contexts.
