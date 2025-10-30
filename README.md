# FinalAss
Lucas Ramirez
Data Anal
MedieInstitutet

Page description
This website is a mockery of another webpage called "thispersondoesnotexist.com"; a website that displays an AI generated image of either a man, woman, or child.
Similar to that page, this website displays a picture of a random seal. "thissealexists" fetches a picture with the tag "seal" using Unsplash's public API to display the picture filling the whole screen.
To add interactivity the webpage also has a "baby mode", which simply filters for baby seals instead.

My biggest problems creating this site were:

1. Broken pictures. For some reason that I originally didn’t understand, the page didn’t display any pictures. Looking at the console, I didn’t get any error messages either. After writing some troubleshooting code, error 403 became apparent; there was a problem with the API, which there was since I mixed the secret and public keys. Woops.
2. Not seal pictures. At the beginning "baby mode" would display photos of animal babies in general, which I didn’t understand. I thought at first that the Unsplash platform maybe looked at pictures matching "any tags", but cropping my tags from "seal" and "pup" to "seal pup" didn’t work either. Requesting another key and cropping the tags down to just "baby seal" seemed to fix it, or so I hope. There’s a limit of 50 API calls, and I didn’t want to waste tokens.
