# Artview

**Summary: Artview is an online museum of a variety of artworks. Perfect for art enthusiasts.**

**Live deployed link:** https://sanaa-tylek-mls.github.io/mod-4-project/

**Coders:** 
\
Sanaa\
Tylek

## API:
The Chicago Museum of Art’s free API [http://api.artic.edu/docs]\

**Endpoints:**

**Collection endpoint:** [https://api.artic.edu/api/v1/artworks/search?q=landscape&query[term][is_public_domain]=true&limit=100&fields=id,title,image_id,artwork_type_title]

Our collection API endpoint provided us with a certain set of fields for each artwork. We used the following fields from each artwork:

- `title`
- `image_id`
- `artwork_type_title`

**Single item endpoint:** [https://api.artic.edu/api/v1/artworks/129884]

Our single item API endpoint provided us with data for just one artwork. We used the following fields from the artwork:

- `title`
- `artist_title`
- `image_id`
- `date_display`
- `short_description`

## Features

**MVP features:**
- Search for paintings by keyword
- Expand an artwork to see more information about the artwork

**Stretch feature(s):**
- Add artworks to the favorites section
- Local Storage feature

## Setup 

```javascript
npm install
npm run dev
```

## Technologies Used
- HTML
- CSS
- JavaScript
- Vite
- Claude.Ai

## Usage/Demo
![Search feature screenshot](/Users/Marcy_Student/Development/mod-4/mod-4-project/src/imgs/search.png)

<!-- Comment which option I should do for the usage section @Tylek -->
<!-- [Doing this after I fix part of the code so favorites can be removed] -->
## Known Limitations and Future Improvements

**Known limitations:**
- Users are unable remove artworks from the favorites section

**Future improvements:**
- Addition of a filter feature allowing users to filter through artworks by date, artwork_type, department_title, etc.
