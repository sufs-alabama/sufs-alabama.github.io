# Stand Up for Science Alabama

The website for the Alabama chapter of [Stand Up for Science](https://www.standupforscience.net/),
built with Jekyll and hosted free on GitHub Pages at **https://sufs-alabama.github.io**.

## Editing the site (no coding needed)

You can edit any file right on GitHub: open it, click the pencil ✏️, then **Commit changes**.
The site rebuilds automatically in a minute or two.

| To change… | Edit this |
| --- | --- |
| Red announcement bar, email, social links | `_config.yml` |
| The "Who We Are" page and team | `who-we-are.md` |
| An event | the matching file in `_events/` |
| The "Science in Alabama" fact cards | `_data/facts.yml` |
| The infographics gallery | `_data/infographics.yml` + images in `assets/img/infographics/` |
| Home page text | `index.html` |

Look for `[brackets]` and `TODO` comments. Those are placeholders waiting for real details.

### Add an event

1. Copy any file in `_events/`, e.g. `science-trivia.md` → `fall-trivia-2026.md`.
2. Update the fields at the top:
   ```yaml
   title: Fall Science Trivia
   category: trivia          # rally | trivia | speaking | meetup
   date: 2026-10-15          # used for ordering
   location: "Saturn, Birmingham, AL"
   summary: One or two sentences for the event card.
   image: /assets/img/events/fall-trivia.jpg   # optional
   ```
3. Write the story below the `---` line in plain Markdown.

Photos go in `assets/img/events/`. Add a photo gallery to an event with:
```yaml
gallery:
  - src: /assets/img/events/rally-1.jpg
    alt: Crowd holding signs on the capitol steps
```

### Add an infographic

Upload the image to `assets/img/infographics/`, then add it to `_data/infographics.yml`:
```yaml
- title: Why NIH funding matters in Alabama
  image: /assets/img/infographics/nih-funding.png
  alt: Describe what the graphic shows
  caption: Shared for the March rally.
```
Delete the three "Your infographic here" placeholder entries once real ones are in.

## Turn on GitHub Pages

Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
Branch = `main`, folder `/ (root)`.

## Preview locally (optional)

```sh
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Design

Uses the visual identity of the national Stand Up for Science brand: signal red
(`#d7282f`), speckled cream paper, deep navy, heavy geometric type (League Spartan),
and the red logo box, with an Alabama tag. Colors live at the top of `assets/css/site.css`.
