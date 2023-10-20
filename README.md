# DEPRECATED. This package is no longer supported. Please use: https://github.com/Financial-Times/cp-content-pipeline/tree/main/packages/styles

# n-content-body [![Circle CI](https://circleci.com/gh/Financial-Times/n-content-body.svg?style=svg)](https://circleci.com/gh/Financial-Times/n-content-body)

## Styling for the body of content (eg. article)

### Includes styling for article body elements;

- body text
- big numbers
- block quotes
- images
- inline tags
- pull quotes
- related content & promo boxes
- subheads
- tables
- video

plus common / utility classes used across article elements


### Excludes styling for;

- article heading styles (eg. headline, standfirst, date, byline)
- onward journey (eg. recommended reads, more-ons, story packages)


## Migration guides

### v9 to v10

v10 removes the width of embedded YouTube videos, in relation to the 'n-content-video--youtube' class. This is a design decision to make embedded YouTube videos consistently full-width. If you would like to replicate the old behaviour, you will have to set the width in the consumer repo.

Below is an example of how to replicate the old behaviour:
```
.n-content-video--youtube {
	width: 560px;
}
```

### v8 to v9

v9 upgrades its version of `n-ui-foundations` from ^4.0.0 to ^6.0.0.

Please read the [`n-ui-foundations` v5 to v6 migration notes](https://github.com/Financial-Times/n-ui-foundations#user-content-v5-to-v6) for details of the required amends to accommodate the v6 changes (snappy grid is no longer output as default), which explains the basis for the below change required by apps consuming this component:

- Find and replace `n-content-layout__container` classes with `n-content-layout__container n-content-layout__container--snappy`.
```diff
-<div class="n-content-layout__container"></div>
+<div class="n-content-layout__container n-content-layout__container--snappy"></div>
```
