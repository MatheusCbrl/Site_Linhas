# Google Maps Geolocation Example

A simple example on how to track user position with [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation) and display it on a map with [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/). Checkout the demo [here](https://marcopolo-consulta-linhas.vercel.app/).

## Installation

### 1. Clone this repository

First, clone this repository to your local computer:

```bash
git clone git@github.com:MatheusCbrl/Site_Linhas.git
```

### 2. Update the Google Maps API Key

Next, you need to update the Google Maps API Key on the [index.html] file:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=init"></script>
```

If you don't have one, you can get it [here](https://developers.google.com/maps/documentation/javascript/get-api-key) for free. Don't forget to restrict the **HTTP referrers (web sites)** under the **Key restriction** section.

### 3. Serve it Over SSL

Now, in order to use the Geolocation API, you have to serve it over SSL. The easiest way is to develop it on [Glitch](https://glitch.com/).

## Further Readings

- [Geolocation watchPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)
- [Google Maps Map class](https://developers.google.com/maps/documentation/javascript/reference/3/#Map)
- [Google Maps Marker class](https://developers.google.com/maps/documentation/javascript/reference/3/#Marker)

## License

MIT © [Matheus Nunes Cabral](https://matheus.cabral.vercel.app)
