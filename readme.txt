
I (ng.package.json it is package.json for angular app next) ---- APJ

II (package.json it is package.json for NodeJs app) ------------- NPJ

In order to run angular app must do:

1. rename  NPJ file e.g (node.package.json)
2. rename APJ file to package.json
3. install all dependecive
4. npm start

This is to ensure that two applications are stored in the same store.
As you know, Angular does building a static file that can only be used in the user interface without the server side (without the email sender)
for this we should use the NodeJs application on the backend (with emailSender), which uses the Angular application static file.