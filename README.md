# Stand Up for Science Alabama

The website for the Alabama chapter of [Stand Up for Science](https://www.standupforscience.net/),
built with Jekyll and hosted free on GitHub Pages at **https://sufs-alabama.github.io**.

## Editing the site (no coding needed)

You can edit any file right on GitHub: open it, click the pencil ✏️, then **Commit changes**.
The site rebuilds automatically in a minute or two.

| To change… | Edit this |
| --- | --- |
| Red announcement bar, email, social links, header button | `_config.yml` |
| The "Who We Are" page and team | `who-we-are.md` |
| An event | the matching file in `_events/` |
| Press coverage on the Media page | `_data/media.yml` |
| Contact form text | `contact.html` |
| The infographics gallery | `_data/infographics.yml` + images in `assets/img/infographics/` |
| Home page text | `index.html` |

Look for `[brackets]` and `TODO` comments. Those are placeholders waiting for real details.

### Add an event

1. Copy any file in `_events/`, e.g. `science-smackdown-2025.md` → `science-smackdown-2026.md`.
2. Update the fields at the top:
   ```yaml
   title: Science Smackdown 2026
   category: trivia            # rally | trivia | speaking | meetup
   date: 2026-10-15            # shown as 10/15/2026; also sets the order
   time: "6:30–8:30 PM"        # optional
   venue: "Hop City Beer & Wine, 2924 3rd Ave S"   # optional
   city: "Birmingham, AL"
   summary: One or two sentences for the Events list.
   image: /assets/img/events/science-smackdown-2026.jpg   # optional flyer
   image_alt: Describe the flyer
   event_link: https://www.eventbrite.com/e/...           # optional
   rsvp_link: https://...                                 # optional, upcoming events
   ```
3. Write the story below the `---` line in plain Markdown.

Future-dated events appear under "Upcoming" on the Events page automatically.

### Add press coverage

Add an entry to `_data/media.yml`:
```yaml
- title: Headline of the story
  outlet: AL.com
  date: 2026-03-07
  type: article          # article | video | listing
  url: https://...
  summary: One sentence about the piece.
  # youtube_id: abc123   # for YouTube videos: embeds the player
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

## Contact form

The Contact page (`contact.html`) sends messages to the chapter email in `_config.yml`
through [FormSubmit](https://formsubmit.co) (free, no account), using the form ID in
`formsubmit_id` in `_config.yml` so the address isn't exposed in the page. The form is
already activated. Messages then arrive with the subject "New message from the SUFS Alabama
website". People who tick "Add me to the SUFS Alabama email list" show `email_list: Yes`
in the message.

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

Follows the national [Stand Up for Science](https://www.standupforscience.net/) design system:
League Spartan headings and Noto Serif JP body text, red `#d62828`, navy `#003049`,
speckled paper `#f2eee9`, 10px-radius buttons, hand-drawn red underlines (`.scribble`),
thin black section rules, red page-title bands, and white full-width event strips.
Colors live at the top of `assets/css/site.css`.
