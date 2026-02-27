# Artview

**Summary: Artview is an online museum of a variety of artworks. Perfect for art enthusiasts.**

#### Live deployed link: https://sanaa-tylek-mls.github.io/mod-4-project/

**Coders:** 
\
Sanaa\
Tylek

### API:
The Chicago Museum of Art’s free API [http://api.artic.edu/docs]\

**Endpoints:**

**Collection endpoint:** [https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artwork_type_title]

Our collection API endpoint provided us with a certain set of fields for each artwork. We used the following information from each artwork:
```
- title
- image_id
- artwork_type_title
```

- **Single item endpoint:** [https://api.artic.edu/api/v1/artworks/129884]

Our single item API endpoint provided us with data for just one artwork. We used the following information from the artwork:
```
- title
- artist_title
- image_id
- date_display
- short_description
```
### Features

**MVP features:**
- Search for paintings by keyword
- Expand an artwork to see more information about it

**Stretch feature(s):**
- Add artworks to the favorites section
- Local Storage feature

### Setup instructions

```javascript
npm install
npm run dev
```

### Technologies used: 
- HTML
- CSS
- JavaScript
- Vite
- Claude.Ai

### Usage 
(demo through screenshots or screenshot of application)
<!-- Comment which option I should do for the usage section @Tylek -->

### Known limitations and future improvements

**Known limitations:**
- Users are unable remove artworks from favorites

**Future improvements:**
- Addition of a filter feature so users could filter through artworks by date, artwork_type, department_title, etc.
